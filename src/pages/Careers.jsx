// src/pages/Careers.jsx
import React from "react";

const Careers = () => {
  return (
    <section className="bg-[hsl(var(--background))] min-h-screen px-6 py-16 sm:py-20 fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-center text-white mb-16">
          Join Our Team
        </h2>

        <div className="glass-effect p-8 sm:p-10 rounded-2xl shadow-lg text-white space-y-8 transition duration-300 hover:shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-semibold font-playfair">
              Videographer cum Editor
            </h3>
            <p className="text-white/80 text-lg">
              We are looking for a creative and detail-oriented{" "}
              <strong>Videographer cum Editor</strong> to join our dynamic team.
              You will be responsible for shooting, editing, and producing
              high-quality video content for social media, brand campaigns,
              client projects, and internal marketing needs. You will play a key
              role in translating brand stories into visually compelling
              narratives that captivate audiences and elevate our clients’
              presence.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white">Key Responsibilities:</h4>
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Plan, shoot, and edit high-quality video content.</li>
                <li>Collaborate with creative and marketing teams on content direction.</li>
                <li>Ensure timely delivery of engaging edits with dynamic visuals.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">What We’re Looking For:</h4>
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Strong skills in Adobe Premiere Pro, After Effects, and camera handling.</li>
                <li>Ability to work independently and meet creative briefs.</li>
                <li>Portfolio that showcases storytelling, creativity, and editing finesse.</li>
              </ul>
            </div>

            <p className="text-white/90">
              <span className="font-semibold">Location:</span> Kozhikkode, Kerala 
            </p>

            <p className="text-white/90">
              <span className="font-semibold">How to Apply:</span> Send your resume and portfolio to{" "}
              <a
                href="mailto:careers@celebralux.com"
                className="underline text-white hover:text-secondary transition"
              >
                careers@celebralux.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
