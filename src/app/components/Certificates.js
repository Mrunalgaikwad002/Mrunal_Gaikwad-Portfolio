import React from "react";

export default function Certificates() {
  const certificates = [
    {
      title: "Software Development Life Cycle (SDLC)",
      description: "Gained knowledge about waterfall model, structured software development processes, including requirement analysis, design, implementation, testing, and maintenance, ensuring better project planning and execution.",
      issuer: "Professional Development",
      date: "2024",
      icon: "📋",
      category: "Methodology"
    }
  ];

  return (
    <section id="certificates" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Certificates & Knowledge</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {cert.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{cert.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
