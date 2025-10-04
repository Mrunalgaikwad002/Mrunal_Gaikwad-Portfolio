import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-[100svh] bg-gray-900">
      <div className="hero-bg">
        <div className="hero-row name-row center-row">
          <span className="hero-word highlighted">Hi, I am Mrunal Gaikwad</span>
        </div>
        <div className="hero-row title-row center-row">
          <span className="hero-word highlighted">FullStack Web Developer</span>
        </div>
        <div className="hero-row title-row center-row">
          <span className="hero-word highlighted">and Python, AI/ML enthusiastic</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 grid place-items-center">
        <div className="mt-10 w-full">
          <div className="avatar-wrap">
            <img src="/avatar.png" alt="Avatar" className="avatar-img" />
            <img src="/laptop.png" alt="Laptop" className="laptop-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
