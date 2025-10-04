import React from "react";

const demoEducation = [
  {
    degree: "Bachelor of Engineering – Computer Science",
    school: "Rai University",
    location: "Ahmedabad, India",
    period: "2023 – present",
    details: [

      "Relevant Coursework: Web Development, Software Engineering, Data Structures, Python, AI/ML",
      "Activities: Coding Club, Hackathons"
    ],
  },
  {
    degree: " Secondary and Higher Secondary – Science",
    school: "Abasaheb Garware Junior College",
    location: "Pune, India",
    period: "2021 – 2023",
    
  },

  {
    degree: " Secondary Education – Science",
    school: "St.Joseph's Convent School",
    location: "Pune, India",
    period: "2011 – 2021",
    
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="relative education-timeline">
          <div className="timeline-line" />

          <div className="space-y-12">
            {demoEducation.map((item, idx) => (
              <div key={idx} className="timeline-row edu-card">
                <div className="timeline-dot">🎓</div>
                <div className="timeline-card bg-gray-800 rounded-2xl p-6 shadow-xl transition-transform duration-300">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-medium">{item.school}</span>
                    {item.location ? `, ${item.location}` : ""}
                  </p>
                  <p className="inline-flex items-center gap-2 text-sm text-blue-300 mb-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                    {item.period}
                  </p>
                  {Array.isArray(item.details) && item.details.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


