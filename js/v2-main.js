function init() {
  // Initialize Lucide icons (deferred load — retry until available)
  function initLucide() {
    if (window.lucide) {
      window.lucide.createIcons();
    } else {
      setTimeout(initLucide, 100);
    }
  }
  initLucide();

  // ─── Populate State Dropdowns (single source, avoids HTML duplication) ────
  const STATES = [
    'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa',
    'Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
    'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
    'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
    'Uttar Pradesh','Uttarakhand','West Bengal'
  ];
  document.querySelectorAll('select[name="state"]').forEach(sel => {
    STATES.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sel.appendChild(opt);
    });
  });

  // ─── Hero Title Letter Animation ─────────────────────────────────────────
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    let delay = 0.02;
    const delayIncrement = 0.03;
    
    const parts = [
      { text: "India's", isBlock: false },
      { text: "first", isBlock: true },
      { text: "Business Integrated Program", isBlock: false }
    ];
    
    heroTitle.innerHTML = '';
    
    parts.forEach((part, partIndex) => {
      const words = part.text.split(' ');
      
      let container = heroTitle;
      if (part.isBlock) {
        container = document.createElement('span');
        container.className = 'text-primary block';
        heroTitle.appendChild(container);
      }
      
      words.forEach((word, wordIndex) => {
        if (!word) return;
        
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        
        for (let i = 0; i < word.length; i++) {
          const char = word[i];
          const span = document.createElement('span');
          span.className = 'inline-block animate__animated animate__fadeInLeft';
          span.style.display = 'inline-block';
          span.style.animationDelay = `${delay}s`;
          span.style.animationFillMode = 'both';
          span.textContent = char;
          wordSpan.appendChild(span);
          delay += delayIncrement;
        }
        
        container.appendChild(wordSpan);
        
        const isLastWordOfPart = wordIndex === words.length - 1;
        const isLastPart = partIndex === parts.length - 1;
        if (!isLastWordOfPart || !isLastPart) {
          container.appendChild(document.createTextNode(' '));
        }
      });
    });
  }

  // ─── LeadSquared Config ───────────────────────────────────────────────────
  const LSQ_URL = 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Create?accessKey=u$r0f83abac5915f1175344c491a1481e4a&secretKey=e23030c4b0cc1edc251ad61ce5340a9f6499c21d';

  // ─── Google Sheets Web App Config ─────────────────────────────────────────
  // INSTRUCTIONS TO CREATE A NEW SHEET:
  // 1. Create a new Google Sheet.
  // 2. Go to Extensions -> Apps Script.
  // Paste the following Google Apps Script:
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
          data.utmCampaign,
          data.utmTerm,
          data.utmContent
        ]);
        return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
      }
  */
  // 4. Click 'Deploy' -> 'New Deployment' -> Select 'Web App'.
  // 5. Set 'Execute as' to 'Me', and 'Who has access' to 'Anyone'.
  // 6. Deploy and copy the Web App URL, then paste it below:
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyAOac3M6BxktHQgBX96oLM_Pv2KCs5wp4CShDDqyUwCNpHEPNUbI3930j1IA_nP-jemg/exec'; // Web App from Aimerlanding

  // ─── UTM Tracking ─────────────────────────────────────────────────────────
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource   = urlParams.get('utm_source')   || '';
  const utmMedium   = urlParams.get('utm_medium')   || '';
  const utmCampaign = urlParams.get('utm_campaign') || '';
  const utmTerm     = urlParams.get('utm_term')     || '';
  const utmContent  = urlParams.get('utm_content')  || '';

  // ─── Lead Form Popup Logic ───────────────────────────────────────────────
  const popupOverlay = document.getElementById('lead-popup-overlay');
  const popupCloseBtn = document.getElementById('lead-popup-close');
  const popupTitle = document.getElementById('lead-popup-title');
  const popupSubmitBtn = document.getElementById('lead-popup-submit-btn');
  
  let popupShown = false;
  let currentIntent = 'apply'; // 'apply' or 'brochure'

  // Consolidated scroll handler (single listener for popup + back-to-top + scroll-spy)
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const navSections = Array.from(navLinks).map(link => ({
    link,
    section: document.getElementById(link.dataset.section)
  })).filter(item => item.section);

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Auto-show popup on scroll (once per session, after 10% scroll depth)
        const scrollDepth = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollDepth > 0.1 && !popupShown) {
          popupShown = true;
          openPopup('apply');
        }
        // Back to top button visibility
        if (backToTopBtn) {
          const isMobile = window.innerWidth < 768;
          // Show when scrolled near bottom (e.g. within 300px of the bottom)
          const isAtFooter = (scrollY + window.innerHeight) >= (document.documentElement.scrollHeight - 300);
          
          let shouldShow = false;
          if (isMobile) {
            shouldShow = isAtFooter;
          } else {
            shouldShow = scrollY > 500;
          }

          if (shouldShow) {
            backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0');
          } else {
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
          }
        }
        // Scroll-spy: highlight active nav link
        let activeId = '';
        for (const { link, section } of navSections) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) activeId = link.dataset.section;
        }
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === activeId);
        });
        ticking = false;
      });
      ticking = true;
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
      if (popupTitle) popupTitle.textContent = 'Take the next step';
      if (popupSubmitBtn) popupSubmitBtn.textContent = 'Talk To Our Team';
    }
    
    if (popupOverlay) {
      popupOverlay.classList.add('show');
    }
  }

  function closePopup() {
    if (popupOverlay) {
      popupOverlay.classList.remove('show');
      // Reset success view back to form input view after transition ends
      setTimeout(() => {
        const formView = document.getElementById('popup-form-view');
        const successView = document.getElementById('popup-success-view');
        const downloadMsg = document.getElementById('popup-download-message');
        
        if (formView) {
          formView.classList.remove('hidden');
          formView.classList.add('block');
        }
        if (successView) {
          successView.classList.remove('block');
          successView.classList.add('hidden');
        }
        if (downloadMsg) {
          downloadMsg.classList.remove('block');
          downloadMsg.classList.add('hidden');
        }
      }, 300);
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

  function cleanPhone(phone) {
    let hasPlus = phone.trim().startsWith('+');
    let cleaned = phone.replace(/\D/g, '');
    
    // Normalize Indian numbers (12 digits starting with 91 or 11 digits starting with 0)
    if (cleaned.length === 12 && cleaned.startsWith('91')) {
      cleaned = cleaned.substring(2);
      hasPlus = false;
    } else if (cleaned.length === 11 && cleaned.startsWith('0')) {
      cleaned = cleaned.substring(1);
      hasPlus = false;
    }
    
    return (hasPlus ? '+' : '') + cleaned;
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
    const rawPhone = phoneInput ? phoneInput.value.trim() : '';
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
    if (!rawPhone) {
      showError(phoneInput, 'Phone number is required');
    } else if (!/^\+?[\d\s-]{10,}$/.test(rawPhone)) {
      showError(phoneInput, 'Please enter a valid phone number (min 10 digits)');
    }
    if (!state) showError(stateInput, 'Please select your state');
    if (!status) showError(statusInput, 'Please select your status');

    if (hasErrors) return;

    const phone = cleanPhone(rawPhone);

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

    if (utmSource)   payload.push({ Attribute: 'mx_utm_source',   Value: utmSource });
    if (utmMedium)   payload.push({ Attribute: 'mx_utm_medium',   Value: utmMedium });
    if (utmCampaign) payload.push({ Attribute: 'mx_utm_campaign', Value: utmCampaign });
    if (utmTerm)     payload.push({ Attribute: 'mx_utm_term',     Value: utmTerm });
    if (utmContent)  payload.push({ Attribute: 'mx_utm_content',  Value: utmContent });

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
          name, phone, email, state, status, goal, utmSource, utmMedium, utmCampaign,
          utmTerm, utmContent,
          landingPage: 'ugprogram' // Extra tag for this project
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
        btnEl.textContent = 'Redirecting...';
        btnEl.style.backgroundColor = '#33A2B7';
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
          btnEl.textContent = 'Redirecting...';
          btnEl.style.backgroundColor = '#33A2B7';
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
    if (isBrochureDownload) {
      window.location.href = 'v2-thank-you.html?download=true';
    } else {
      window.location.href = 'v2-thank-you.html';
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



    // ─── Auto-scroll for Management Challenges Carousel ───────────────────────
    const projectsCarousel = document.getElementById('projects-carousel');
    if (projectsCarousel) {
        let scrollInterval;
        const scrollStep = 300; // Approximate width of one card
        const delay = 3000; // 3 seconds

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                // If reached the end, scroll back to start
                if (projectsCarousel.scrollLeft + projectsCarousel.clientWidth >= projectsCarousel.scrollWidth - 10) {
                    projectsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    projectsCarousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
                }
            }, delay);
        };

        const stopAutoScroll = () => clearInterval(scrollInterval);

        // Start scrolling initially
        startAutoScroll();

        // Pause on hover or touch
        projectsCarousel.addEventListener('mouseenter', stopAutoScroll);
        projectsCarousel.addEventListener('mouseleave', startAutoScroll);
        projectsCarousel.addEventListener('touchstart', stopAutoScroll);
        projectsCarousel.addEventListener('touchend', startAutoScroll);
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

  // ─── Back to Top Button (click handler only — scroll handled above) ────
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
