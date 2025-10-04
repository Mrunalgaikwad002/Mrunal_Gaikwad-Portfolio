import React from "react";

export default function Achievements() {
  const achievements = [
    
   
    {
      title: "– Odoo Hackathon 2025",
      description: " SkillSwap: Built a full-stack platform to connect learners and mentors, enabling skill exchange, real-time messaging, and profile management using Node.js, Express, and MongoDB.",
      icon: "🤝",
      category: "Hackathon"
    },

    {
      title: "Smart India Hackathon 2024",
      description: " DTC Bus Scheduling & Route Management: Developed a prototype to optimize DTC bus routes and schedules using MERN stack, demonstrating expertise in full-stack development and real-world problem solving.",
      icon: "🚌",
      category: "Hackathon"
    },

    {
      title: "Finalist – SSIP 2023",
      description: "Mappe: Developed the frontend for a School Bus Safety & Tracking System, enabling real-time bus tracking, notifications, and child profiles for parents and school authorities.",
      icon: "🏆",
      category: "Hackathon"
    }
    
  ];

  return (
    <section id="achievements" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Key Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {achievement.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
