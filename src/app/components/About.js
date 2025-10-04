import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>
        
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
            <p className="mb-6 text-lg">
              I am a 3rd year B.Tech Computer Science student with a strong interest in full-stack development and emerging technologies. I enjoy solving problems through code and building applications that are both functional and user-friendly. My journey started with web development, where I worked with modern frameworks and tools to create responsive, scalable projects.
            </p>
            
            <p className="mb-6 text-lg">
              Currently, I am interning as a Web Developer, gaining hands-on experience in real-world applications. Alongside this, I am learning Python and expanding into Artificial Intelligence and Machine Learning, aiming to combine my web development foundation with data-driven solutions in the future.
            </p>
            
            <p className="text-lg">
              I believe in continuous learning and staying adaptable in a rapidly changing tech landscape. This portfolio represents not just the projects I have built, but also my growth as a developer and my commitment to creating impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
