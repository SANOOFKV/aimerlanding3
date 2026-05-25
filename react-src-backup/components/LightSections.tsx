import { BookOpen, Brain, BadgeCheck, Download } from 'lucide-react';

export function Academics() {
  return (
    <section className="w-full bg-light-grey text-background py-24 border-y border-black/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Learning model</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">India's first experiential learning campus</h2>
          </div>
          <button className="bg-background hover:bg-background/80 hover:-translate-y-1 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300">
            Download Brochure <Download className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/10 p-8 rounded-2xl shadow-xl shadow-black/5 hover:-translate-y-2 transition-all duration-300">
            <BookOpen className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold mb-4">75% practical learning</h3>
            <p className="text-background/70 leading-relaxed font-medium">Master the fundamentals through live case studies, business simulations, and continuous problem-solving instead of rote memorization.</p>
          </div>
          <div className="bg-white border border-black/10 p-8 rounded-2xl shadow-xl shadow-black/5 hover:-translate-y-2 transition-all duration-300">
            <Brain className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Build & run companies</h3>
            <p className="text-background/70 leading-relaxed font-medium">You don't just study business, you build one. Work on live ventures, make real revenue, and learn from actual market feedback.</p>
          </div>
          <div className="bg-white border border-black/10 p-8 rounded-2xl shadow-xl shadow-black/5 hover:-translate-y-2 transition-all duration-300">
            <BadgeCheck className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Direct corporate access</h3>
            <p className="text-background/70 leading-relaxed font-medium">Weekly mentorship from CXOs, shadowing programs, and deep integrations with industry leaders from day one.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalImmersion() {
  return (
    <section className="w-full bg-light-teal text-background py-24 border-y border-black/10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">Global exposure</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Learn across borders</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-black/10 p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="font-bold text-xl mb-3">UAE Region</h4>
              <p className="text-background/70 font-medium">Immerse in the business landscape of Dubai and Abu Dhabi.</p>
            </div>
            <div className="bg-white border border-black/10 p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="font-bold text-xl mb-3">Malaysia & Singapore</h4>
              <p className="text-background/70 font-medium">Explore the booming tech and finance ecosystems in Southeast Asia.</p>
            </div>
            <div className="bg-white border border-black/10 p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="font-bold text-xl mb-3">Vietnam & China</h4>
              <p className="text-background/70 font-medium">Understand rapid manufacturing scale and emerging Asian markets.</p>
            </div>
            <div className="bg-secondary text-white border border-secondary p-8 rounded-2xl flex flex-col items-center justify-center shadow-lg transform sm:scale-105">
              <span className="font-black text-2xl text-center mb-2">Included</span>
              <span className="font-medium text-center text-white/90">in Tuition Fees</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-full">
            <img className="w-full h-full object-cover rounded-2xl border border-black/10 hover:scale-[1.02] transition-transform duration-500 shadow-xl" src="https://aimerbschool.com/wp-content/uploads/2026/03/visit2.jpg" alt="Global Immersion UAE" />
            <img className="w-full h-full object-cover rounded-2xl border border-black/10 hover:scale-[1.02] transition-transform duration-500 shadow-xl" src="https://aimerbschool.com/wp-content/uploads/2026/03/visit1.jpg" alt="Global Immersion Asia" />
            <div className="col-span-2 overflow-hidden rounded-2xl border border-black/10 shadow-xl hover:scale-[1.02] transition-transform duration-500">
              <img className="w-full h-full object-cover" src="https://ugbip.aimerbschool.com/images/flex3-1.jpg" alt="Global Immersion Group" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
