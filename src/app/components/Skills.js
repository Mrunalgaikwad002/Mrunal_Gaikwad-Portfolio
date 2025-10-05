import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "⚡" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Redux toolkit", icon: "🔄" },
        { name: "Socket.io", icon: "🔗" },
        { name: "Webrtc", icon: "📹" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "Socket.io", icon: "🔗" },
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🗄️" },
        { name: "Supabase", icon: "🔥" }
      ]
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" }
      ]
    },
    {
      title: "APIs & Integrations",
      skills: [
        { name: "RESTful APIs", icon: "🔗" },
        { name: "Stripe Integration", icon: "💳" },
        { name: "Leaflet", icon: "🗺️" },
        { name: "OpenStreetMap", icon: "🌍" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Postman", icon: "📮" },
        { name: "Visual Studio Code", icon: "💻" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header to match About */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={category.title}>
              <h2 className="text-3xl font-bold text-white mb-6">{category.title}</h2>
              <div className="h-px bg-gray-600 mb-8"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 group text-center"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-white font-medium text-sm">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
