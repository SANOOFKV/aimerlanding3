import { Building2, Wallet, Rocket, ArrowRight } from 'lucide-react';

export function Alumni() {
  const images = [
    'https://aimerbschool.com/wp-content/uploads/2026/03/success1.jpg',
    'https://aimerbschool.com/wp-content/uploads/2026/03/success2.jpg',
    'https://aimerbschool.com/wp-content/uploads/2026/03/internship1.jpg',
    'https://aimerbschool.com/wp-content/uploads/2026/03/visit2.jpg',
    'https://aimerbschool.com/wp-content/uploads/2026/03/success3.jpg',
    'https://aimerbschool.com/wp-content/uploads/2026/03/visit1.jpg',
    'https://ugbip.aimerbschool.com/images/flex1-1-1.jpg',
    'https://ugbip.aimerbschool.com/images/flex3-1.jpg'
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 border-t border-white/10">
      <div className="flex flex-col flex-wrap md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Our students</span>
          <h2 className="text-4xl md:text-5xl font-bold max-w-xl leading-tight">Building real businesses from day one</h2>
        </div>
        <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:text-accent transition-all hover:gap-3 ease-out shrink-0 text-lg">
          Know More <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className={`rounded-xl overflow-hidden bg-white/5 border border-white/10 ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}>
            <img alt="Student Life" className="w-full h-full object-cover min-h-[150px] md:min-h-[250px] hover:scale-105 transition-transform duration-700" src={img} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function CampusLife() {
  const cards = [
    { category: 'ON CAMPUS', title: 'Achievement Ceremony', body: '', img: 'https://ugbip.aimerbschool.com/images/flex1-1-1.jpg' },
    { category: 'CAMPUS LIFE', title: 'Football Tournament', body: '', img: 'https://ugbip.aimerbschool.com/images/flex2-2-1.jpg' },
    { category: 'CAMPUS LIFE', title: 'Community Outing', body: '', img: 'https://ugbip.aimerbschool.com/images/flex3-1.jpg' },
    { category: 'EVENT', title: 'Annual Startup Hackathon', body: 'A 48-hour intensive hackathon where students build functional prototypes and pitch to angel investors.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/success1.jpg' },
    { category: 'PROGRAM', title: 'Women in Leadership', body: 'A dedicated program fostering female entrepreneurship with exclusive mentorship and networking opportunities.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/success2.jpg' },
    { category: 'EVENT', title: 'Global Cultural Fest', body: 'Celebrating diversity on campus with food, music, and art from over 20 different countries.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/success3.jpg' },
    { category: 'ON CAMPUS', title: 'Industry Connect Mixers', body: 'Monthly networking events connecting current students with alumni and top industry executives.', img: 'https://aimerbschool.com/wp-content/uploads/2026/03/visit1.jpg' },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 border-t border-white/10">
      <div className="flex flex-col flex-wrap md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Campus life</span>
          <h2 className="text-4xl md:text-5xl font-bold">More than a classroom</h2>
        </div>
        <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:text-accent transition-all hover:gap-3 ease-out shrink-0 text-lg">
          Explore More <span>→</span>
        </a>
      </div>
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x">
        {cards.map((item, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[420px] aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer snap-start flex flex-col justify-end bg-black hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src={item.img} alt={item.title} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
            <div className="relative p-8 z-10">
              <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-md">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              {item.body && <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{item.body}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Founders() {
  const avatars = [
    'https://aimerbschool.com/wp-content/uploads/2026/03/Sriram-P.png',
    'https://aimerbschool.com/wp-content/uploads/2026/03/Rahul-Raghav.png',
    'https://aimerbschool.com/wp-content/uploads/2026/03/Sharique-Samsudheen.png'
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 border-t border-white/10">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Get mentored by founders</h2>
      <p className="text-white/80 text-lg mb-12">Weekly sessions with CEOs, continuous 1:1 guidance.</p>
      
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="border border-white/10 rounded-2xl p-4 sm:p-8 lg:p-10 bg-white/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Guest Lecture Series</h3>
          <p className="text-white/80 mb-4 sm:mb-8 text-xs sm:text-base max-w-sm leading-relaxed flex-1">Weekly intimate sessions with CEOs, CTOs, and founders who share unvarnished truths about building companies.</p>
          <div className="flex gap-2 sm:gap-4 flex-wrap mt-auto">
            {avatars.map((img, i) => (
              <img key={i} src={img} alt="Mentor" className="w-8 h-8 sm:w-14 sm:h-14 object-cover rounded-full border border-white/20 shadow-lg" />
            ))}
          </div>
        </div>
        <div className="border border-white/10 rounded-2xl p-4 sm:p-8 lg:p-10 bg-primary/20 bg-gradient-to-br from-primary/30 to-transparent hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex flex-col items-start">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">1:1 Mentorship</h3>
          <p className="text-white/90 mb-4 sm:mb-8 text-xs sm:text-base max-w-sm leading-relaxed font-medium flex-1">Get paired with an industry veteran who acts as your personal board member throughout the program.</p>
          <button className="bg-white text-primary px-3 py-2 sm:px-6 sm:py-3 text-[10px] sm:text-base rounded-lg font-bold hover:bg-white/90 transition-all duration-300 shadow-xl mt-auto whitespace-nowrap">
            Meet Mentors
          </button>
        </div>
        <div className="border border-white/10 rounded-2xl p-4 sm:p-8 lg:p-10 bg-white/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Office Hours</h3>
          <p className="text-white/80 text-xs sm:text-base leading-relaxed max-w-sm mt-auto">Direct access to faculty and investors for specific problem-solving and strategy sessions.</p>
        </div>
        <div className="border border-white/10 rounded-2xl p-4 sm:p-8 lg:p-10 bg-white/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Founder Retreats</h3>
          <p className="text-white/80 text-xs sm:text-base leading-relaxed max-w-sm mt-auto">Off-site immersive weekends focused on leadership development and deep networking.</p>
        </div>
      </div>
    </section>
  );
}

export function Incubator() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-24 border-t border-white/10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Transition to a founder</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">From day one, you are treated as a founder. Transition seamlessly from student to entrepreneur with our dedicated incubator resources.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-10 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:border-primary/30 transition-all duration-300">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
            <Building2 className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Free Workspace</h3>
          <p className="text-white/70 leading-relaxed font-medium block">Keep your dedicated desk in our innovation hub for 6 months post-graduation.</p>
        </div>
        <div className="flex flex-col items-center text-center p-10 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:border-primary/30 transition-all duration-300">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
            <Wallet className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Legal & Cloud Credits</h3>
          <p className="text-white/70 leading-relaxed font-medium block">Over $100k in AWS credits and pro-bono legal setup for your corporation.</p>
        </div>
        <div className="flex flex-col items-center text-center p-10 border border-white/10 rounded-2xl bg-primary/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Demo Day</h3>
            <p className="text-white/90 leading-relaxed font-medium">A guaranteed spot to pitch your venture to a room of 50+ vetted angel investors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
