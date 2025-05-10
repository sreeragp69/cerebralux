import React from 'react';
import { FaVideo, FaBullhorn, FaPodcast, FaRegLightbulb, FaRegCalendarCheck, FaShareAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Brand Story Videos',
    icon: <FaVideo className="text-xl sm:text-2xl text-white/80" />,
    description: 'Craft compelling narratives that humanize your brand.',
  },
  {
    title: 'Social Media Reels & Shorts',
    icon: <FaShareAlt className="text-xl sm:text-2xl text-white/80" />,
    description: 'Short-form content optimized for reach and engagement.',
  },
  {
    title: 'Promotional & Ad Videos',
    icon: <FaBullhorn className="text-xl sm:text-2xl text-white/80" />,
    description: 'Creative content that drives clicks and conversions.',
  },
  {
    title: 'Podcast & Interview Edits',
    icon: <FaPodcast className="text-xl sm:text-2xl text-white/80" />,
    description: 'Clean, professional edits that keep your audience tuned in.',
  },
  {
    title: 'Event Coverage & Recaps',
    icon: <FaRegCalendarCheck className="text-xl sm:text-2xl text-white/80" />,
    description: 'Capture key moments with cinematic precision.',
  },
  {
    title: 'Thought Leadership Content',
    icon: <FaRegLightbulb className="text-xl sm:text-2xl text-white/80" />,
    description: 'Position yourself as a credible voice in your niche.',
  },
];

const VideoProduction = () => {
  return (
    <section className="pt-20 pb-20 px-4 bg-[hsl(var(--background))] text-white fade-in">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center font-playfair">
        Powerful visuals. Strategic storytelling. Unmatched impact.
        </h2>

       
        <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
          At Celebralux, we specialize in creating video content that not only looks exceptional—but performs. Our video production and editing services are designed to help personal brands and businesses communicate with clarity, emotion, and authority across digital platforms.
        </p>

        <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
          Whether you’re building your presence or promoting your expertise, we offer end-to-end video solutions tailored to your goals:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg space-y-4"
            >
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-sm text-white/80">{service.description}</p>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
          From scripting and shooting to editing and final delivery, we manage the full creative process—ensuring every frame reflects the essence of your brand.
        </p>

        <p className="text-xl sm:text-2xl font-semibold text-center italic font-playfair text-white/90">
          Let your story speak louder.
          <br />
          Partner with Celebralux and create videos that influence, inspire, and ignite action.
        </p>
      </div>
    </section>
  );
};

export default VideoProduction;
