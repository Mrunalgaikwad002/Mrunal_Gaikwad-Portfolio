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
            tech={["React", "Next.js", "Tailwind CSS", "Supabase", "Express.js", "MongoDB", "Node.js", "Socket.io", "Stripe API"]}
          />

          <ExperienceCard
            company="TechFlow Solutions"
            role="Frontend Developer"
            period="Jan 2024 - May 2024"
            frontContent="Developed responsive React interfaces, collaborated with designers for pixel‑perfect UI, and optimized bundle performance."
            backContent="Led frontend on multiple client builds, implemented reusable component systems, and integrated external APIs for dynamic content."
            tech={["React", "TypeScript", "Tailwind CSS", "Figma", "Git", "Vercel"]}
          />

          <ExperienceCard
            company="StartupHub"
            role="Full Stack Developer"
            period="Sep 2023 - Dec 2023"
            frontContent="Built a project management platform end‑to‑end with auth, file uploads, and real‑time collaboration."
            backContent="Implemented JWT auth, task workflows, and notifications over WebSockets; designed REST APIs and MongoDB data models."
            tech={["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "AWS"]}
          />

          <ExperienceCard
            company="Digital Innovations"
            role="Web Development Intern"
            period="Jun 2023 - Aug 2023"
            frontContent="Shipped interactive client websites with responsive layouts and accessible components."
            backContent="Delivered e‑commerce and portfolio sites, ensured cross‑browser compatibility, and improved Core Web Vitals."
            tech={["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "PHP"]}
          />

          <ExperienceCard
            company="CodeCraft Academy"
            role="Teaching Assistant"
            period="Jan 2023 - May 2023"
            frontContent="Guided students through HTML, CSS, and JS fundamentals with hands‑on labs and reviews."
            backContent="Ran debugging sessions, reviewed projects, and mentored best practices in modern web development."
            tech={["HTML5", "CSS3", "JavaScript", "Git", "VS Code", "Chrome DevTools"]}
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
                  <h3 className="text-base font-semibold text-white">{company}</h3>
                  <p className="text-sm text-gray-400">{period}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="text-blue-400 font-medium text-sm mb-1">{role}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{frontContent}</p>
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {tech.slice(0, 6).map((technology, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300 border border-gray-600/30">
                    {technology}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">Hover to see details</p>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="flip-card-back bg-gray-800/95 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 shadow-lg">
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  {getInitials(company)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{company}</h3>
                  <p className="text-sm text-gray-400">{period}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{backContent}</p>
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Technologies Used</h4>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {tech.map((technology, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30">
                    {technology}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">Move cursor away to flip back</p>
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


