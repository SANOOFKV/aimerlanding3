import React, { useState } from 'react';
import { Quote, ArrowRight, ExternalLink } from 'lucide-react';

export function Supporters() {
  const mentors = [
    { name: 'Sriram P', role: 'Chief Strategist-DEI, AVTAR', photo: '/mentors/sriram.jpg' },
    { name: 'Rahul Raghav', role: 'COO, Interval Learning Platform', photo: '/mentors/rahul.jpg' },
    { name: 'Sharique Samsudheen', role: 'Founder, Fundfolio', photo: '/mentors/sharique.jpg' },
    { name: 'Shameer S', role: 'Founder, By The Startups', photo: '/mentors/shameer.jpg' },
    { name: 'Sayish CV', role: 'AGM, Vodafone Idea', photo: '/mentors/sayish.jpg' },
    { name: 'Rupesh Tiwari', role: 'Head of Sales', photo: '/mentors/rupesh.jpg' },
    { name: 'Nanda Rackanchath', role: 'Former CHRO, Tata', photo: '/mentors/nanda.jpg' },
    { name: 'Mani Karthik', role: 'CMO', photo: '/mentors/mani.jpg' },
  ];

  return (
    <section className="px-6 md:px-20 max-w-[1280px] mx-auto py-24 mt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-2xl">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-4">Network For Success</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Industry Leaders & Mentors</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            Learn directly from top industry executives, entrepreneurs, and global leaders who guide your experiential journey.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-8">
        {mentors.slice(0, 6).map((person, i) => (
          <div key={i} className="group relative bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:border-white/20 transition-all duration-300">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-xl mb-4 sm:mb-6 relative bg-white/5">
              <img 
                src={person.photo} 
                alt={person.name} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 mt-auto to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{person.name}</h3>
            <p className="text-white/60 text-xs sm:text-sm font-medium">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function QuoteStrip() {
  return (
    <section className="w-full bg-dark-teal py-24 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 mix-blend-screen"></div>
      <div className="max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center z-10 relative">
        <Quote className="w-12 h-12 text-accent mb-8 opacity-80" />
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          "The internships and management challenges gave me confidence to step into the industry before graduation."
        </h2>
        <div className="flex flex-col items-center gap-1 mb-16">
          <p className="font-bold text-lg">AIMER Student · Batch 1</p>
          <p className="text-accent text-sm font-semibold tracking-wider uppercase">UGBIP Graduate</p>
        </div>
        
        <div className="flex gap-8 md:gap-12 items-center flex-wrap justify-center">
          <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com1.svg" className="h-8 md:h-10 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300" alt="Institution" />
          <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com2.svg" className="h-8 md:h-10 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300" alt="Institution" />
          <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com3.svg" className="h-8 md:h-10 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300" alt="Institution" />
          <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com4.svg" className="h-8 md:h-10 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300" alt="Institution" />
          <img src="https://aimerbschool.com/wp-content/uploads/2026/03/fac-com5-1.svg" className="h-8 md:h-10 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300" alt="Institution" />
        </div>
      </div>
    </section>
  );
}

export function OutcomesStats() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-accent mb-2">75%</span>
          <span className="text-white/80 font-medium">Experiential learning</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-accent mb-2">2×6</span>
          <span className="text-white/80 font-medium">Month internships</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-accent mb-2">100+</span>
          <span className="text-white/80 font-medium">Industry mentors</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-accent mb-2">70+</span>
          <span className="text-white/80 font-medium">Corporate partners</span>
        </div>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
         <button className="bg-primary hover:bg-primary/80 hover:-translate-y-1 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
           Learn More
         </button>
         <button className="border border-white/20 hover:bg-white/10 hover:-translate-y-1 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
           Download Brochure
         </button>
      </div>
    </section>
  );
}

export function MediaStrip() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-20 pb-20">
      <div className="border border-primary/30 rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-transparent flex flex-col md:flex-row items-center gap-8 justify-between hover:border-primary/50 transition-all duration-300">
        <div className="flex-1">
          <span className="bg-accent text-background px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Upcoming Event</span>
          <h3 className="text-3xl font-bold mb-4">AIMER Young CEO — Shape the Next Generation of Leaders</h3>
          <p className="text-white/80 mb-6 font-medium">May 9–10, 2026 · For 12th grade students</p>
          <a href="https://youngceo.aimerbschool.com" target="_blank" rel="noreferrer" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer w-fit uppercase tracking-wider text-sm">
            Register Now <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="w-full md:w-[400px] h-60 bg-black/40 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
          {isPlaying ? (
            <video 
              className="w-full h-full object-cover"
              src="/events/youngceovideo.mp4" 
              controls
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <img src="/events/youngceo.png" alt="Event preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-accent/20">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
