import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background/90 backdrop-blur-md text-white fixed top-0 w-full z-50 border-b border-white/10">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="https://aimerbschool.com/wp-content/uploads/2026/04/AIMER-New-Logo-1-1-1.svg" alt="AIMER Business School" className="h-8" />
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-white/80 font-medium hover:text-accent transition-colors duration-300" href="#">Programs</a>
          <a className="text-white/80 font-medium hover:text-accent transition-colors duration-300" href="#">Outcomes</a>
          <a className="text-white/80 font-medium hover:text-accent transition-colors duration-300" href="#">Campus</a>
          <a className="text-white/80 font-medium hover:text-accent transition-colors duration-300" href="#">Admissions</a>
        </nav>
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
          className="bg-primary hover:bg-primary/80 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,139,165,0.4)] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          Apply Now
        </button>
      </div>
    </header>
  );
}
