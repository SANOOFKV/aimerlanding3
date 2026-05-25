document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ─── LeadSquared Config ───────────────────────────────────────────────────
  const LSQ_URL = 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Create?accessKey=u$r0f83abac5915f1175344c491a1481e4a&secretKey=e23030c4b0cc1edc251ad61ce5340a9f6499c21d';

  // ─── Google Sheets Web App Config ─────────────────────────────────────────
  // INSTRUCTIONS TO CREATE A NEW SHEET:
  // 1. Create a new Google Sheet.
  // 2. Go to Extensions -> Apps Script.
  // 3. Paste the following Google Apps Script:
  /*
      function doPost(e) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        sheet.appendRow([
          new Date(),
          data.name,
          data.phone,
          data.email,
          data.state,
          data.status,
          data.goal,
          data.utmSource,
          data.utmMedium,
          data.utmCampaign
        ]);
        return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
      }
  */
  // 4. Click 'Deploy' -> 'New Deployment' -> Select 'Web App'.
  // 5. Set 'Execute as' to 'Me', and 'Who has access' to 'Anyone'.
  // 6. Deploy and copy the Web App URL, then paste it below:
  const GOOGLE_SHEET_URL = ''; // TODO: Paste your new Google Apps Script Web App URL here

  // ─── UTM Tracking ─────────────────────────────────────────────────────────
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource   = urlParams.get('utm_source')   || '';
  const utmMedium   = urlParams.get('utm_medium')   || '';
  const utmCampaign = urlParams.get('utm_campaign') || '';

  // ─── Lead Form Popup Logic ───────────────────────────────────────────────
  const popupOverlay = document.getElementById('lead-popup-overlay');
  const popupCloseBtn = document.getElementById('lead-popup-close');
  const popupTitle = document.getElementById('lead-popup-title');
  const popupSubmitBtn = document.getElementById('lead-popup-submit-btn');
  
  let popupShown = false;
  let currentIntent = 'apply'; // 'apply' or 'brochure'

  // Trigger popup automatically on scroll (once per session)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400 && !popupShown) {
      popupShown = true;
      openPopup('apply');
    }
  }, { passive: true });

  // Custom global event listener for "openLeadForm"
  window.addEventListener('openLeadForm', (e) => {
    const intent = (e.detail && e.detail.intent) || 'apply';
    openPopup(intent);
  });

  // Attach listeners to trigger buttons
  document.querySelectorAll('.trigger-popup').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const intent = button.getAttribute('data-intent') || 'apply';
      openPopup(intent);
    });
  });

  function openPopup(intent) {
    currentIntent = intent;
    if (intent === 'brochure') {
      if (popupTitle) popupTitle.textContent = 'Download Brochure';
      if (popupSubmitBtn) popupSubmitBtn.textContent = 'Download Brochure';
    } else {
      if (popupTitle) popupTitle.textContent = 'Apply for UGBIP';
      if (popupSubmitBtn) popupSubmitBtn.textContent = 'Apply Now';
    }
    
    if (popupOverlay) {
      popupOverlay.classList.add('show');
    }
  }

  function closePopup() {
    if (popupOverlay) {
      popupOverlay.classList.remove('show');
    }
  }

  if (popupCloseBtn) {
    popupCloseBtn.addEventListener('click', closePopup);
  }
  if (popupOverlay) {
    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });
  }

  // ─── Lead Submission API Call ─────────────────────────────────────────────
  async function submitLead(formEl, btnEl, isBrochureDownload = false) {
    const nameInput = formEl.querySelector('#name') || formEl.querySelector('[name="name"]');
    const emailInput = formEl.querySelector('#email') || formEl.querySelector('[name="email"]');
    const phoneInput = formEl.querySelector('#phone') || formEl.querySelector('[name="phone"]');
    const stateInput = formEl.querySelector('#state') || formEl.querySelector('[name="state"]');
    const statusInput = formEl.querySelector('#status') || formEl.querySelector('[name="status"]');
    const goalInput = formEl.querySelector('#goal') || formEl.querySelector('[name="goal"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const state = stateInput ? stateInput.value : '';
    const status = statusInput ? statusInput.value : '';
    let goal = goalInput ? goalInput.value : '';

    // Clear previous errors
    formEl.querySelectorAll('.error-msg').forEach(el => el.remove());
    formEl.querySelectorAll('input, select').forEach(el => el.classList.remove('border-red-500'));

    let hasErrors = false;
    
    function showError(element, message) {
      if (!element) return;
      element.classList.add('border-red-500');
      const err = document.createElement('p');
      err.className = 'text-red-400 text-xs mt-1 error-msg';
      err.textContent = message;
      element.parentNode.appendChild(err);
      hasErrors = true;
    }

    // Validation
    if (!name) showError(nameInput, 'Name is required');
    if (!email) {
      showError(emailInput, 'Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      showError(emailInput, 'Please enter a valid email address');
    }
    if (!phone) {
      showError(phoneInput, 'Phone number is required');
    } else if (!/^\+?[\d\s-]{10,}$/.test(phone)) {
      showError(phoneInput, 'Please enter a valid phone number (min 10 digits)');
    }
    if (!state) showError(stateInput, 'Please select your state');
    if (!status) showError(statusInput, 'Please select your status');

    if (hasErrors) return;

    // Expand short goal value to full text description
    const goalMapping = {
      'placed': 'Get placed in a top company',
      'startup': 'Start my own business / startup',
      'network': 'Build a strong professional network',
      'career_path': 'Figure out the right career path for me',
      'all': 'All of the above'
    };
    if (goalMapping[goal]) {
      goal = goalMapping[goal];
    }

    // Prepare LeadSquared payload
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = [
      { Attribute: 'FirstName',        Value: firstName },
      { Attribute: 'LastName',         Value: lastName  },
      { Attribute: 'Phone',            Value: phone     },
      { Attribute: 'EmailAddress',     Value: email     },
      { Attribute: 'mx_State',         Value: state     },
      { Attribute: 'mx_Qualification', Value: status    },
      { Attribute: 'Notes',            Value: goal      },
      { Attribute: 'Source',           Value: 'UGBIP Landing Page' },
    ];

    if (utmSource)   payload.push({ Attribute: 'SourceContent',  Value: utmSource });
    if (utmMedium)   payload.push({ Attribute: 'SourceMedium',   Value: utmMedium });
    if (utmCampaign) payload.push({ Attribute: 'SourceCampaign', Value: utmCampaign });

    // Loading State
    const originalText = btnEl.textContent;
    btnEl.textContent = 'Submitting…';
    btnEl.disabled = true;

    // Send payload to Google Sheets (Non-blocking)
    if (GOOGLE_SHEET_URL) {
      fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, phone, email, state, status, goal, utmSource, utmMedium, utmCampaign
        })
      }).catch(err => console.error('Google Sheets Submission Error:', err));
    } else {
      console.warn('Google Sheets URL is empty. Lead details will not be written to Sheets.');
    }

    // Send payload to LeadSquared
    try {
      const res = await fetch(LSQ_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        handleSuccess(isBrochureDownload);
      } else {
        const text = await res.text();
        let isDuplicate = false;
        try {
          const errData = JSON.parse(text);
          if (errData.ExceptionType === 'MXDuplicateEntryException') {
            isDuplicate = true;
          }
        } catch (e) {}

        if (isDuplicate) {
          console.log('Duplicate lead detected. Proceeding to thank you page.');
          handleSuccess(isBrochureDownload);
        } else {
          console.error('CRM error response:', text);
          throw new Error('CRM Submission Failed');
        }
      }
    } catch (err) {
      console.error(err);
      btnEl.textContent = '✗ Error — Try again';
      btnEl.style.backgroundColor = '#c0392b';
      setTimeout(() => {
        btnEl.textContent = originalText;
        btnEl.disabled = false;
        btnEl.style.backgroundColor = '';
      }, 3000);
    }
  }

  function handleSuccess(isBrochureDownload) {
    closePopup();
    if (isBrochureDownload) {
      window.location.href = 'thank-you.html?download=true';
    } else {
      window.location.href = 'thank-you.html';
    }
  }

  // Bind forms
  const popupForm = document.querySelector('#lead-popup-box form');
  if (popupForm) {
    popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitLead(popupForm, popupForm.querySelector('button[type="submit"]'), currentIntent === 'brochure');
    });
  }

  const sectionForm = document.querySelector('#apply-now-section form');
  if (sectionForm) {
    sectionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitLead(sectionForm, sectionForm.querySelector('button[type="submit"]'), false);
    });
  }

  // ─── Scroll Animations (Intersection Observer) ───────────────────────────
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        animationObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.05
  });

  document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    animationObserver.observe(el);
  });

  // ─── Video Toggle in Media Strip ─────────────────────────────────────────
  const eventPreview = document.getElementById('media-preview-container');
  const eventVideoContainer = document.getElementById('media-video-container');
  
  if (eventPreview && eventVideoContainer) {
    eventPreview.addEventListener('click', () => {
      eventPreview.classList.add('hidden');
      eventVideoContainer.classList.remove('hidden');
      const video = eventVideoContainer.querySelector('video');
      if (video) {
        video.play().catch(err => console.log('Video autoplay blocked:', err));
      }
    });
  }

  // ─── Back to Top Button ─────────────────────────────────────────────────
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
