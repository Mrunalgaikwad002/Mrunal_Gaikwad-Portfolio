"use client";
import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const section = document.getElementById('home');
    const laptop = document.querySelector('.laptop-img');
    if (!section || !laptop) return;

    // Close as soon as user starts scrolling down; reopen near top
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > 4) {
        laptop.classList.add('laptop-closing');
      } else {
        laptop.classList.remove('laptop-closing');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Also fallback to observer if section completely out of view
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        laptop.classList.add('laptop-closing');
      }
    }, { threshold: 0 });
    observer.observe(section);

    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden min-h-[100svh] bg-gray-900">
      <div className="hero-bg">
        <div className="hero-row name-row center-row">
          <span className="hero-word highlighted hero-script">Hi, I am Mrunal Gaikwad</span>
        </div>
        <div className="hero-row title-row center-row">
          <span className="hero-word highlighted hero-script">FullStack Web Developer</span>
        </div>
        <div className="hero-row title-row center-row">
          <span className="hero-word highlighted hero-script">and Python, AI/ML enthusiastic</span>
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
