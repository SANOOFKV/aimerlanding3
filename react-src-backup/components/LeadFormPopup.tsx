import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

let hasTriggeredThisSession = false;

export function LeadFormPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: '',
    state: '',
    goal: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => setIsOpen(true);
    window.addEventListener('openLeadForm', handleOpenForm);

    const handleScroll = () => {
      if (!hasTriggeredThisSession && window.scrollY > 400) {
        hasTriggeredThisSession = true;
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('openLeadForm', handleOpenForm);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }
    if (!formData.status) newErrors.status = 'Please select a status';
    if (!formData.state.trim()) newErrors.state = 'State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', status: '', state: '', goal: '' });
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: undefined as any }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-2">Take the next step</h3>
        <p className="text-white/60 text-sm mb-6">
          Fill out the form below to get more details about our admissions process.
        </p>

        {isSuccess ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg text-center animate-in fade-in">
            <p className="font-medium">Thanks for reaching out!</p>
            <p className="text-sm mt-1 text-green-400/80">Our team will contact you shortly.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.name ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.email ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.phone ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all`}
                placeholder="+91 00000 00000"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-white/80 mb-1">Status</label>
                <select 
                  id="status" 
                  value={formData.status}
                  onChange={handleChange}
                  className={`w-full bg-black/50 border ${errors.status ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-lg px-4 py-2.5 text-white appearance-none focus:outline-none focus:ring-1 transition-all`}
                >
                  <option value="" disabled>Select status</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
                </select>
                {errors.status && <p className="text-red-400 text-xs mt-1">{errors.status}</p>}
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-white/80 mb-1">State</label>
                <select 
                  id="state" 
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full bg-black/50 border ${errors.state ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-lg px-4 py-2.5 text-white appearance-none focus:outline-none focus:ring-1 transition-all`}
                >
                  <option value="" disabled>Select state</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
                {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-white/80 mb-1">Goal (Optional)</label>
              <textarea 
                id="goal" 
                rows={2}
                value={formData.goal}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="What do you want to achieve?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary text-black font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 hover:scale-[1.02] transition-all mt-4"
            >
              Talk To Our Team
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
