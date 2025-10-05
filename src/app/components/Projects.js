import React from "react";

const demoProjects = [
  {
    title: "DevTrack",
    summary:
      "Full-stack issue tracking application with role-based authentication for teams and administrators. Features include project management, bug reporting, task assignment, Kanban board, ticket search and filters, file uploads, and comments. Built with React.js, Tailwind, and a Node.js backend for a scalable and efficient team collaboration experience.",
    tech: ["React.js", "Tailwind CSS", "React Router", "React DnD", "Node.js", "Express.js", "MongoDB", "JWT",],
    image: "/DevTrack.png",
    links: {
      demo: "https://devtrack-project-management.netlify.app",
      repo: [
        "https://github.com/Mrunalgaikwad002/DevTrack.git",
        "https://github.com/Mrunalgaikwad002/DevTrack-Backend.git",
      ],
    },
  },

  {
    title: "LanceConnect",
    summary:
      "Full-stack freelance marketplace with role-based authentication for freelancers and clients. Features include gig creation, order management, client dashboards, real-time chat with Socket.io, Stripe payment integration, reviews & ratings, and search filters. Built with React.js, Tailwind, and a Node.js backend for a scalable and responsive experience.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe API",
      "Socket.io",
    ],
    image: "/LanceConnect.png",
    links: {
      demo: "https://lanceconnect.netlify.app",
      repo: [
        "https://github.com/Mrunalgaikwad002/LanceConnect.git",
        "https://github.com/Mrunalgaikwad002/LanceConnect-Backend.git",
      ],
    },
  },

  {
    title: "CabNet",
    summary:
      "Full-stack ride-hailing application with role-based authentication for riders and drivers. Features include secure login, ride booking, driver dashboards, real-time GPS tracking via Google Maps API, Stripe payment integration, ride history & receipts, and ratings & reviews. Built with Next.js, Tailwind, and a Node.js backend for a scalable and responsive user experience.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "Express.js",
      "Node.js",
      "Stripe API",
      "Google Maps API",
    ],
    image: "/CabNet.png",
    links: {
      demo: "https://cabnet.vercel.app/",
      repo: [
        "https://github.com/Mrunalgaikwad002/Cabnet.git",
        "https://github.com/Mrunalgaikwad002/CabNet-Backend.git",
      ],
    },
  },

  {
    title: "SignSnap",
    summary:
      "Full-stack document signing application with authentication for users and signers. Features include PDF upload, signature placement via drag-and-drop, PDF-Lib integration for signed documents, audit trails, status tracking, and secure tokenized links. Built with React, Tailwind, Node.js, Express, and MongoDB for a seamless signing experience.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Multer",
        "PDF-Lib",
        "JWT",
      ],
    image: "/SignSnap.png",
    links: {
      demo: "https://signsnap-digital-sign.netlify.app",
      repo: [
        "https://github.com/Mrunalgaikwad002/SignSnap.git",
        "https://github.com/Mrunalgaikwad002/SnapSign-Backend.git",
      ],
    },
  },

  {
    title: "DataDock",
    summary:
      "Full-stack cloud storage platform with role-based authentication, file uploads, folder hierarchy, sharing permissions, search, trash, and versioning. Features include JWT auth, Google OAuth, secure file storage via AWS S3/Firebase, and responsive dashboard UI with previews. Built with React, Tailwind, Node.js, Express, and PostgreSQL/MongoDB for scalable file management.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Supabase",
      "JWT",
      "Multer",

    ],
    image: "/DataDock.png",
    links: {
      demo: "https://datadock-file-sharing.netlify.app/",
      repo: [
        "https://github.com/Mrunalgaikwad002/DataDock.git",
        "https://github.com/Mrunalgaikwad002/DataDock-Backend.git",
      ],
    },
  },

  {
    title: "WanderScape",
    summary:
      "Full-stack travel planning platform with authentication for travelers. Features include secure login, trip itineraries, destination search with filters, reviews, interactive maps via Google Maps API, and image uploads. Built with React.js, Tailwind, MongoDB, and Node.js backend for a seamless and scalable user experience.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Maps API",
        "JWT",
        "Stripe AP"
      ],
      image: "/WanderScape.png",
      links: {
        demo: "http://wanderscape.netlify.app",
        repo: [
          "https://github.com/Mrunalgaikwad002/WanderScapeFrontend.git",
          "https://github.com/Mrunalgaikwad002/WanderScape.git",
        ],
      },
      
  }
  
  

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {demoProjects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl bg-gray-800 shadow-xl ring-1 ring-white/10 hover:shadow-2xl hover:ring-white/20 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{p.summary}</p>

                {Array.isArray(p.tech) && p.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-blue-500/10 text-blue-300 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-500/20"
                      >
                        {/webrtc/i.test(t) ? (
                          <>
                            <span className="mr-1">📹</span>
                            {t}
                          </>
                        ) : (
                          t
                        )}
                      </span>
                    ))}
                  </div>
                )}

                {(p.links?.demo || p.links?.repo) && (
                  <div className="flex items-center gap-2 md:gap-3">
                    {p.links?.demo && (
                      <a
                        href={p.links.demo}
                        className="inline-flex items-center whitespace-nowrap leading-none rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white px-3 md:px-4 py-2 text-xs sm:text-sm font-medium tracking-tight hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                        target="_blank" rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {p.links?.repo && (
                      Array.isArray(p.links.repo) ? (
                        p.links.repo.map((repoUrl, idx) => (
                          <a
                            key={repoUrl}
                            href={repoUrl}
                            className="inline-flex items-center whitespace-nowrap leading-none rounded-lg px-3 md:px-4 py-2 text-xs sm:text-sm font-medium tracking-tight text-blue-300 ring-1 ring-inset ring-blue-500/30 hover:bg-blue-500/10 transition-colors"
                            target="_blank" rel="noreferrer"
                          >
                            {idx === 0 ? 'Frontend Code' : 'Backend Code'}
                          </a>
                        ))
                      ) : (
                        <a
                          href={p.links.repo}
                          className="inline-flex items-center whitespace-nowrap leading-none rounded-lg px-3 md:px-4 py-2 text-xs sm:text-sm font-medium tracking-tight text-blue-300 ring-1 ring-inset ring-blue-500/30 hover:bg-blue-500/10 transition-colors"
                          target="_blank" rel="noreferrer"
                        >
                          View Code
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


