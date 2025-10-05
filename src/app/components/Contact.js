/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xzzjvznb");

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Send me a message and I will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Lets Connect</h3>
              <div className="space-y-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">mrunalgaikwad02@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/mrunalgaikwad02" className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                      linkedin.com/in/mrunalgaikwad02
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-xl">🐙</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/Mrunalgaikwad002" className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                      github.com/Mrunalgaikwad002
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 className="font-semibold mb-3">Quick Response</h4>
              <p className="text-gray-300 text-sm">
                I typically respond within 24 hours. For urgent matters, feel free to reach out directly via email.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What&apos;s this about?"
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
