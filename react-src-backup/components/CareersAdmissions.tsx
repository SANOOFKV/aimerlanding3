import { FileText, Mic, Briefcase, Mail, Calendar, GraduationCap, Linkedin, Twitter, Facebook } from 'lucide-react';

export function CareerPrep() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Career Preparation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="border border-white/10 p-8 rounded-xl bg-white/5 text-center hover:bg-white/10 transition-colors">
          <div className="flex justify-center mb-4"><FileText className="w-10 h-10 text-primary" /></div>
          <h3 className="text-xl font-bold mb-2">Resume & Portfolio Build</h3>
          <p className="text-white/60 text-sm">Transform your projects into a compelling narrative for recruiters.</p>
        </div>
        <div className="border border-white/10 p-8 rounded-xl bg-white/5 text-center hover:bg-white/10 transition-colors">
          <div className="flex justify-center mb-4"><Mic className="w-10 h-10 text-primary" /></div>
          <h3 className="text-xl font-bold mb-2">Mock Interviews</h3>
          <p className="text-white/60 text-sm">Practice technical and behavioral interviews with HR leaders.</p>
        </div>
        <div className="border border-white/10 p-8 rounded-xl bg-white/5 text-center hover:bg-white/10 transition-colors">
          <div className="flex justify-center mb-4"><Briefcase className="w-10 h-10 text-primary" /></div>
          <h3 className="text-xl font-bold mb-2">Exclusive Job Board</h3>
          <p className="text-white/60 text-sm">Direct access to unlisted roles from our partner network.</p>
        </div>
      </div>
      <div className="border-t border-white/10 pt-12 flex flex-col gap-8">
        <span className="text-center text-sm text-accent font-semibold uppercase tracking-widest">Our Graduates Work At</span>
        <div className="flex flex-wrap gap-8 justify-center items-center opacity-60 grayscale">
          <div className="h-8 w-32 bg-white/20 rounded"></div>
          <div className="h-8 w-24 bg-white/20 rounded"></div>
          <div className="h-8 w-36 bg-white/20 rounded"></div>
          <div className="h-8 w-28 bg-white/20 rounded"></div>
          <div className="h-8 w-32 bg-white/20 rounded"></div>
          <div className="h-8 w-24 bg-white/20 rounded"></div>
        </div>
      </div>
    </section>
  );
}

export function CareerOutcomesStats() {
  return (
    <section className="w-full bg-dark-teal py-20 border-y border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <span className="block text-4xl font-extrabold text-accent mb-2">65%</span>
          <span className="text-white/80 font-medium text-sm">Promoted within 1 year</span>
        </div>
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <span className="block text-4xl font-extrabold text-accent mb-2">30%</span>
          <span className="text-white/80 font-medium text-sm">Founded their own company</span>
        </div>
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <span className="block text-4xl font-extrabold text-accent mb-2">$5M+</span>
          <span className="text-white/80 font-medium text-sm">Funding raised by alumni</span>
        </div>
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <span className="block text-4xl font-extrabold text-accent mb-2">90+</span>
          <span className="text-white/80 font-medium text-sm">Countries represented</span>
        </div>
      </div>
    </section>
  );
}

export function Admissions() {
  return (
    <section className="w-full bg-light-grey text-background py-24 border-b border-black/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Admissions Process</h2>
            <p className="text-background/80 text-lg max-w-xl">We look for drive, resilience, and a builder's mindset. Standardized test scores are optional.</p>
          </div>
          <button className="bg-primary hover:bg-primary/80 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,139,165,0.4)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shrink-0">
            Start Application
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-black/10 p-6 rounded-xl relative hover:-translate-y-1 transition-transform">
            <span className="absolute top-6 right-6 text-4xl font-black text-black/5">1</span>
            <h4 className="font-bold mb-2">Online Application</h4>
            <p className="text-sm opacity-80">Submit your profile, essays, and a 2-minute video pitch.</p>
          </div>
          <div className="bg-white border border-black/10 p-6 rounded-xl relative hover:-translate-y-1 transition-transform">
            <span className="absolute top-6 right-6 text-4xl font-black text-black/5">2</span>
            <h4 className="font-bold mb-2">Cognitive Test</h4>
            <p className="text-sm opacity-80">A short assessment of logic and problem-solving skills.</p>
          </div>
          <div className="bg-white border border-black/10 p-6 rounded-xl relative hover:-translate-y-1 transition-transform">
            <span className="absolute top-6 right-6 text-4xl font-black text-black/5">3</span>
            <h4 className="font-bold mb-2">Interview</h4>
            <p className="text-sm opacity-80">A 45-minute discussion with an alumni or faculty member.</p>
          </div>
          <div className="bg-white border border-black/10 p-6 rounded-xl relative hover:-translate-y-1 transition-transform">
            <span className="absolute top-6 right-6 text-4xl font-black text-black/5">4</span>
            <h4 className="font-bold mb-2">Decision</h4>
            <p className="text-sm opacity-80">Receive your admissions decision within 2 weeks.</p>
          </div>
        </div>
        <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background text-white">
                <th className="p-4 font-semibold border-b border-black/10">Round</th>
                <th className="p-4 font-semibold border-b border-black/10">Application Deadline</th>
                <th className="p-4 font-semibold border-b border-black/10">Decision Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-black/10 font-medium">Round 1 (Early)</td>
                <td className="p-4 border-b border-black/10">October 15, 2024</td>
                <td className="p-4 border-b border-black/10">November 15, 2024</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-black/10 font-medium">Round 2</td>
                <td className="p-4 border-b border-black/10">January 10, 2025</td>
                <td className="p-4 border-b border-black/10">February 15, 2025</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-black/10 font-medium">Round 3 (Final)</td>
                <td className="p-4 border-b border-black/10">March 20, 2025</td>
                <td className="p-4 border-b border-black/10">April 25, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function IndustryPartnersContact() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Corporate Partners</h2>
          <p className="text-white/80 mb-8">Organizations that help shape our curriculum, provide live projects, and recruit our graduates.</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'TechCorp', src: 'https://placehold.co/200x80/transparent/FFFFFF?text=TechCorp' },
              { name: 'GlobalLink', src: 'https://placehold.co/200x80/transparent/FFFFFF?text=GlobalLink' },
              { name: 'Innovate', src: 'https://placehold.co/200x80/transparent/FFFFFF?text=Innovate+Inc' },
              { name: 'DevStream', src: 'https://placehold.co/200x80/transparent/FFFFFF?text=DevStream' }
            ].map((partner, i) => (
              <div key={i} className="h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden group">
                <img 
                  src={partner.src} 
                  alt={`${partner.name} logo`} 
                  className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-dark-teal border border-white/10 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-white/80 mb-8">Have questions about the program, admissions, or campus life? Our admissions team is here to help.</p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/80 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-sm text-accent font-semibold uppercase">Email Us</span>
                <a className="text-white hover:text-accent transition-colors" href="mailto:admissions@aimer.edu">admissions@aimer.edu</a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/80 transition-colors">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-sm text-accent font-semibold uppercase">Book a Call</span>
                <a className="text-white hover:text-accent transition-colors underline decoration-white/30 underline-offset-4" href="#">Schedule 15-min chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-navy text-white w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1280px] mx-auto px-6 md:px-20 py-16">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-6 h-6 text-accent fill-accent" />
            <span className="font-bold text-xl tracking-tighter">AIMER</span>
          </div>
          <p className="text-white/60 text-sm mb-2">Empowering the next generation of business leaders and founders.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-accent hover:-translate-y-1 transition-all duration-300"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="text-white/60 hover:text-accent hover:-translate-y-1 transition-all duration-300"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-accent hover:-translate-y-1 transition-all duration-300"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold mb-2">Academics</h4>
          <a className="text-white/60 text-sm hover:text-accent transition-colors duration-300" href="#">Curriculum</a>
          <a className="text-white/60 text-sm hover:text-accent transition-colors duration-300" href="#">Faculty & Mentors</a>
          <a className="text-white/60 text-sm hover:text-accent transition-colors duration-300" href="#">Global Immersion</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold mb-2">Admissions</h4>
          <a className="text-white/60 text-sm hover:text-accent transition-colors duration-300" href="#">Requirements</a>
        </div>
      </div>
    </footer>
  );
}
