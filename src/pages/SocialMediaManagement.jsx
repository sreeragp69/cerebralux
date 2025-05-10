import React from 'react';
import {
  FaRegCalendarAlt,
  FaRegImages,
  FaHashtag,
  FaUserEdit,
  FaComments,
  FaChartLine,
  FaRocket,
} from 'react-icons/fa';

const services = [
  {
    title: 'Content strategy & calendar planning',
    icon: <FaRegCalendarAlt className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'High-quality post design (carousels, reels, stories)',
    icon: <FaRegImages className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Captivating copywriting and hashtag research',
    icon: <FaHashtag className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Profile optimization for growth',
    icon: <FaUserEdit className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Community management (DMs, comments)',
    icon: <FaComments className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Performance tracking and monthly reports',
    icon: <FaChartLine className="text-xl sm:text-2xl text-white/80" />,
  },
  {
    title: 'Trend-driven campaigns to boost visibility',
    icon: <FaRocket className="text-xl sm:text-2xl text-white/80" />,
  },
];

const SocialMediaManagement = () => {
  return (
    <section className="pt-10 pb-20 px-4 bg-[hsl(var(--background))] text-white fade-in">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center font-playfair">
          Social Media Management
        </h2>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          We don’t just manage social media—we transform it into a powerful tool for brand growth, engagement, and conversion. Our team crafts visually stunning content, writes compelling copy, and implements data-driven strategies tailored to your brand’s goals.
        </p>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          From content calendars to community engagement and performance analytics, we handle every detail so your digital presence thrives consistently and impactfully.
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
          Your brand deserves more than just likes—it deserves leadership in the digital space.
        </p>
      </div>
    </section>
  );
};

export default SocialMediaManagement;
