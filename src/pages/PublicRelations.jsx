import React from 'react';
import {
  FaNewspaper,
  FaClipboardList,
  FaQuoteRight,
  FaShieldAlt,
  FaUserFriends,
} from 'react-icons/fa';

const prServices = [
  {
    title: 'Media Outreach & Press Coverage',
    icon: <FaNewspaper className="text-xl sm:text-2xl text-white/80" />,
    description: 'Secure features in top-tier publications and niche platforms.',
  },
  {
    title: 'Press Kit Development',
    icon: <FaClipboardList className="text-xl sm:text-2xl text-white/80" />,
    description: 'Professionally designed media kits that communicate your brand story.',
  },
  {
    title: 'Thought Leadership Positioning',
    icon: <FaQuoteRight className="text-xl sm:text-2xl text-white/80" />,
    description: 'Strategically place your voice in interviews, articles, and expert panels.',
  },
  {
    title: 'Reputation Management',
    icon: <FaShieldAlt className="text-xl sm:text-2xl text-white/80" />,
    description: 'Shape public perception with proactive narrative control.',
  },
  {
    title: 'Influencer & Collaboration PR',
    icon: <FaUserFriends className="text-xl sm:text-2xl text-white/80" />,
    description: 'Align with key voices to expand your brand’s visibility.',
  },
];

const PublicRelations = () => {
  return (
    <section className="pt-20 pb-20 px-4 bg-[hsl(var(--background))] text-white fade-in">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center font-playfair">
        Build credibility. Earn attention. Influence perception.
        </h2>

      
        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          At Celebralux, our Public Relations services are designed to strategically position you and your brand in front of the right audience, at the right time, with the right story.
        </p>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          We go beyond press releases—we craft narratives that resonate, build authority, and open doors. Whether you’re a founder, expert, creator, or thought leader, our goal is to get you seen, heard, and respected across digital and traditional media.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prServices.map((service, index) => (
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

        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          We combine creativity with credibility, helping you build trust through consistent media presence and compelling brand storytelling.
        </p>

        <p className="text-xl sm:text-2xl font-semibold text-center italic font-playfair text-white/90">
          Because in today’s world, perception is power—and we help you own the narrative.
        </p>
      </div>
    </section>
  );
};

export default PublicRelations;
