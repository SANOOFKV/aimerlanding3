import { Users } from 'lucide-react';

export function FacultySection() {
  const faculty = [
    {
      name: "Dr. A. P. J. Abdul Kalam (Late)",
      role: "Former President of India, Distinguished Professor",
      img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=400&h=400", // placeholder
      company: ""
    },
    {
      name: "Prof. Raghuram Rajan",
      role: "Former Governor of RBI, Professor of Finance",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400", // placeholder
      company: ""
    },
    {
      name: "Dr. Kiran Mazumdar-Shaw",
      role: "Founder, Biocon, Mentor in Residence",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400", // placeholder
      company: ""
    },
    {
      name: "Mr. Ratan Tata",
      role: "Chairman Emeritus, Tata Sons, Visionary Leader",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400", // placeholder
      company: ""
    },
    {
      name: "Indra Nooyi",
      role: "Former Chairperson & CEO of PepsiCo",
      img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400&h=400", // placeholder
      company: ""
    },
    {
      name: "N. R. Narayana Murthy",
      role: "Co-founder, Infosys, Tech Visionary",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400", // placeholder
      company: ""
    }
  ];

  return (
    <section id="faculty" className="max-w-[1280px] mx-auto px-6 md:px-20 py-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-2xl">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-4">Learn From The Best</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">World-Class Faculty</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            Our faculty brings decades of industry experience, global academic excellence, and visionary leadership to the classroom.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-8">
        {faculty.slice(0, 6).map((member, i) => (
          <div key={i} className="group relative bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:border-white/20 transition-all duration-300">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-xl mb-4 sm:mb-6 relative">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 mt-auto to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{member.name}</h3>
            <p className="text-white/60 text-xs sm:text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
