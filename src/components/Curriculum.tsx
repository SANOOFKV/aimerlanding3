import { Calendar, Clock, MapPin, CalendarDays } from 'lucide-react';

export function CurriculumSection() {
  return (
    <section id="curriculum" className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest block">Program details</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Undergraduate Business Integrated Program</h2>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <span className="text-lg font-medium">3 Years · 6 Semesters</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <span className="text-lg font-medium">Full-Time, Offline</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <CalendarDays className="w-5 h-5 text-accent" />
              </div>
              <span className="text-lg font-medium">Aug 2026 Intake</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <span className="text-lg font-medium">Markaz Knowledge City, Kozhikode, Kerala</span>
            </li>
          </ul>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))} className="bg-primary hover:bg-primary/80 hover:-translate-y-1 text-white px-8 py-4 rounded-lg font-semibold w-fit transition-all duration-300 mt-4">
            Apply Now
          </button>
        </div>
        <div className="border border-white/10 rounded-2xl overflow-hidden aspect-video md:aspect-square bg-white/5 relative">
          <video 
            className="w-full h-full object-cover" 
            src="https://aimerbschool.com/wp-content/uploads/2025/02/MKC-720p.mp4" 
            autoPlay loop muted playsInline
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export function NumberedFeatures() {
  const features = [
    { num: '01', title: 'New-age academics', desc: 'Industry-integrated curriculum blending business foundations with real-world application across 6 semesters.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/internship2.jpg' },
    { num: '02', title: 'Learn from industry leaders', desc: '100+ mentors, founders, and CXOs teach live on campus — real stories, real access.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/Sriram-P.png' },
    { num: '03', title: 'Global immersion', desc: 'Exposure across UAE, Singapore, Malaysia, Vietnam, China & Saudi Arabia in structured international learning tours.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/visit2.jpg' },
    { num: '04', title: 'Startup readiness', desc: 'From ideation to investor pitch — live management challenges, incubator access, and mentorship throughout.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/Zyno.jpg' },
    { num: '05', title: 'Industry bootcamps', desc: 'Intensive practitioner-led sprints across analytics, marketing, finance, consulting, operations, and AI tools.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/visit1.jpg' },
    { num: '06', title: 'Career preparation', desc: 'Structured placement support, interview readiness, and direct access to 70+ corporate partners.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/success1.jpg' }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 border-t border-white/10">
      <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">The AIMER difference</span>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">Built for the real world</h2>
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col group cursor-pointer border border-white/10 rounded-2xl bg-white/5 overflow-hidden hover:-translate-y-2 hover:bg-white/10 transition-all duration-300">
            <div className="h-16 sm:h-24 md:h-48 overflow-hidden relative">
              <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
              <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-6 text-lg sm:text-2xl md:text-4xl font-black text-white/20 group-hover:text-primary transition-colors">{feature.num}</span>
            </div>
            <div className="p-2 sm:p-4 md:p-6 md:pt-2 flex-1 flex flex-col">
              <h3 className="text-xs sm:text-base md:text-xl font-bold mb-1 sm:mb-2 md:mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-[8px] sm:text-xs md:text-sm flex-1">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function IndustryProjects() {
  const challenges = [
    { company: 'Zyno', brief: 'ZYNO is a growing apparel brand focused on fitness wear, custom t-shirts, and quality uniforms — built from scratch through real student experience.', outcome: 'Students managed brand, ops, and sales end to end.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/Zyno.jpg' },
    { company: 'Zordar', brief: 'A creative gifting startup specializing in customized miniature keychains and "Mini Me" products — designed for celebrations and individual personalities.', outcome: 'Students built the brand identity, product line, and customer pipeline.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/zordar.jpeg' },
    { company: 'She Kit', brief: 'A thoughtfully curated period-care gift hamper brand created to make women feel supported and valued during their menstrual days.', outcome: 'Students defined the mission, product, and go-to-market strategy.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/shekit.jpg' }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 border-t border-white/10 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Management challenges</h2>
          <p className="text-white/80 text-lg">As part of AIMER's learning model, students build and run real businesses on campus.</p>
        </div>
        <button onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))} className="bg-primary hover:bg-primary/80 hover:-translate-y-1 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shrink-0">
          Apply Now
        </button>
      </div>
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x">
        {challenges.map((project, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[420px] border border-white/10 rounded-2xl bg-white/5 overflow-hidden group snap-start flex flex-col hover:bg-white/10 transition-all">
            <div className="h-56 overflow-hidden">
              <img src={project.img} alt={project.company} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Student Built</span>
              <h3 className="font-bold text-2xl mb-4">{project.company}</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed flex-1">{project.brief}</p>
              <div className="pt-4 border-t border-white/10">
                <span className="block text-xs uppercase tracking-wider text-white/40 mb-2 font-semibold">Outcome</span>
                <p className="text-sm font-medium">{project.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Bootcamps() {
  const tracks = [
    { title: 'Business Analytics', desc: 'Data interpretation, dashboards & decision-making' },
    { title: 'Digital Marketing & Growth', desc: 'Campaign strategy, performance marketing & brand building' },
    { title: 'Consulting & Strategy', desc: 'Case cracking, frameworks & presentation mastery' },
    { title: 'Finance & Valuation', desc: 'Financial modelling, valuation & investment basics' },
    { title: 'Operations Excellence', desc: 'Process design, supply chain & operational strategy' },
    { title: 'AI & Business Tools', desc: 'AI-powered productivity for modern business' }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 border-t border-white/10">
      <div className="flex justify-between flex-wrap gap-8 mb-16 items-start">
        <div className="max-w-xl">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Industry skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Industry readiness bootcamps</h2>
          <p className="text-white/80 text-lg">Intensive sprints guided by practitioners in today's fast-moving industries.</p>
        </div>
        <button onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))} className="bg-primary hover:bg-primary/80 hover:-translate-y-1 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
          Apply Now
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold text-accent mb-2">06</span>
          <span className="text-sm text-white/60 uppercase tracking-wider font-semibold">Bootcamp tracks</span>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold text-accent mb-2">75%</span>
          <span className="text-sm text-white/60 uppercase tracking-wider font-semibold">Practical curriculum</span>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold text-accent mb-2">100+</span>
          <span className="text-sm text-white/60 uppercase tracking-wider font-semibold">Industry mentors</span>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold text-accent mb-2">2</span>
          <span className="text-sm text-white/60 uppercase tracking-wider font-semibold">Live internships</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all cursor-default group">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{track.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{track.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
