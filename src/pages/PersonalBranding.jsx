import React from 'react';
import {
  FaPalette,
  FaBullseye,
  FaRegImages,
  FaLinkedin,
  FaCameraRetro,
  FaPenNib,
  FaUserShield,
} from 'react-icons/fa';

const services = [
  {
    title: 'Brand identity development (logo, color palette, typography)',
    icon: <FaPalette className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Personal brand strategy and positioning',
    icon: <FaBullseye className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Social media content creation and management',
    icon: <FaRegImages className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'LinkedIn optimization and profile revamp',
    icon: <FaLinkedin className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Video and photo branding shoots',
    icon: <FaCameraRetro className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Thought leadership content (articles, quotes, carousels)',
    icon: <FaPenNib className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Online presence audit and reputation management',
    icon: <FaUserShield className="text-xl sm:text-2xl text-white/80" />,
  },
];

const PersonalBranding = () => {
  return (
    <section className="pt-10 pb-20 px-4 bg-[hsl(var(--background))] text-white fade-in">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center font-playfair">
          Personal Branding
        </h2>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          At Celebralux, we help ambitious professionals, entrepreneurs, and thought leaders build powerful personal brands that command attention and trust. Through strategic storytelling, premium visual identity, and consistent digital presence, we position you as an authority in your field.
        </p>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          From refining your brand voice to managing your social media and online reputation, our team ensures your personal brand reflects your true value—and attracts high-impact opportunities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg space-y-3"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-white font-medium text-base sm:text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xl sm:text-2xl font-semibold text-center italic font-playfair text-white/90">
          Let the world see your brilliance—branded, bold, and beautifully you.
        </p>
      </div>
    </section>
  );
};

export default PersonalBranding;
