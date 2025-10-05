export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExperienceCard
            company="Labmentix"
            role="Full Stack Web Developer"
            period="June 2025 - present"
            frontContent="Currently working as a Web Development Intern, building interactive dashboards and implementing core features using modern technologies. Specializing in real-time data visualization, API integration, responsive UI/UX design, and scalable backend development."
            backContent="Improved user engagement with refined UI/UX, integrated APIs for real‑time data, and contributed to scalable backend workflows."
            tech={["React", "Next.js", "Tailwind CSS", "Supabase", "Express.js", "MongoDB", "Node.js", "Socket.io", "Stripe API", "Webrtc"]}
          />

        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ company, role, period, frontContent, backContent, tech = [] }) {
  return (
    <div className="flip-card cursor-pointer group" aria-label="Experience card">
      <div className="flip-card-inner">
        {/* Front of the card */}
        <div className="flip-card-front bg-gray-800/90 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  {getInitials(company)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{company}</h3>
                  <p className="text-sm text-gray-400">{period}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="text-blue-400 font-medium text-base mb-1">{role}</h4>
                <p className="text-gray-300 text-base leading-relaxed">{frontContent}</p>
              </div>
            </div>
            
            <div />
          </div>
        </div>

        {/* Back of the card (only technologies) */}
        <div className="flip-card-back bg-gray-800/95 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 shadow-lg">
          <div className="h-full flex flex-col justify-start text-left">
            <h4 className="text-base uppercase tracking-wider text-gray-300 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((technology, index) => (
                <span key={index} className="px-2 py-1 text-sm rounded-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getInitials(name) {
  if (!name) return "";
  const parts = String(name).trim().split(/\s+/);
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}


