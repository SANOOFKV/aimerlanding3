import { Calendar, Clock, MapPin, Award } from 'lucide-react';
import vodafoneLogo from '../assets/images/regenerated_image_1779174557713.svg';

export default function Hero() {
  return (
    <>
      {/* 2. Hero Section */}
      <section className="min-h-[800px] flex flex-col justify-center px-6 md:px-20 max-w-[1280px] mx-auto py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-start gap-8 z-10 w-full">
            <span className="bg-accent text-background px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Admissions Open · Batch 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              India's <span className="text-primary block">first</span> Business Integrated Program
            </h1>
            <p className="text-white/80 text-xl max-w-xl">
              Learn business by doing business — through real projects, internships, and global exposure.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <button onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))} className="bg-primary hover:bg-primary/80 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,139,165,0.4)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                Apply Now <span className="text-xl leading-none">→</span>
              </button>
              <button onClick={() => { alert('Brochure download initiated!'); }} className="border border-white/20 hover:bg-white/10 hover:-translate-y-1 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
            
            <div className="flex flex-col gap-8 mt-8 lg:mt-12 w-full pt-8 lg:pt-10 border-t border-white/10">
              <div>
                <p className="text-white/60 text-sm font-semibold mb-4 uppercase tracking-wider">Backed by corporates from:</p>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/kims-healthcare-1.svg" className="h-6 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="KIMS Healthcare" />
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/capkon-logo-01-01-1.svg" className="h-7 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Capkon" />
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/Elance_Logo-1.svg" className="h-6 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Elance" />
                  <img src={vodafoneLogo} className="h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Vodafone Idea" />
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/Tata_logo-1.svg" className="h-7 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Tata" />
                </div>
              </div>
              <div>
                <p className="text-white/60 text-sm font-semibold mb-4 uppercase tracking-wider">Faculty from:</p>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com1.svg" className="h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Faculty 1" />
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com2.svg" className="h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Faculty 2" />
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com3.svg" className="h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Faculty 3" />
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com4.svg" className="h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Faculty 4" />
                  <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com5-1.svg" className="h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" alt="Faculty 5" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[800px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 order-first lg:order-last -mt-12 lg:-translate-y-32 transition-transform duration-500">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 mix-blend-screen"></div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-center"
              src="https://aimerbschool.com/wp-content/uploads/2026/03/banner-video.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3. Program Info Card */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 relative z-20">
        <div className="bg-dark-teal border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">UGBIP</span>
              <h2 className="text-2xl lg:text-3xl font-bold">Under Graduate Business Integrated Program</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/5">75% Practical</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/5">2 Internships</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/5">Global Immersion</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Duration</span>
                <span className="font-bold text-lg">3 Years</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Format</span>
                <span className="font-bold text-lg">Full-Time</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Location</span>
                <span className="font-bold text-lg">Calicut, Kerala</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Intake</span>
                <span className="font-bold text-lg">Limited Seats</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
             <a href="#curriculum" className="text-primary font-semibold flex items-center gap-2 hover:text-accent transition-colors hover:gap-3 ease-out duration-300">
               Explore Programme <span className="text-xl leading-none">→</span>
             </a>
          </div>
        </div>
      </section>
    </>
  );
}
