import React from 'react';
import {
  FaMicrophoneAlt,
  FaHeadphonesAlt,
  FaEdit,
  FaPalette,
  FaUpload,
  FaRetweet,
  FaUserCheck,
} from 'react-icons/fa';

const podcastServices = [
  {
    title: 'Podcast Concept Development',
    icon: <FaMicrophoneAlt className="text-xl sm:text-2xl text-white/80" />,
    description: 'Strategy, show format, naming, and positioning.',
  },
  {
    title: 'Professional Recording',
    icon: <FaHeadphonesAlt className="text-xl sm:text-2xl text-white/80" />,
    description: 'In-studio or remote sessions with broadcast-quality equipment.',
  },
  {
    title: 'Audio & Video Editing',
    icon: <FaEdit className="text-xl sm:text-2xl text-white/80" />,
    description: 'Clean, polished episodes ready for distribution across platforms.',
  },
  {
    title: 'Show Branding',
    icon: <FaPalette className="text-xl sm:text-2xl text-white/80" />,
    description: 'Custom intros, outros, cover art, and promotional graphics.',
  },
  {
    title: 'Publishing & Distribution',
    icon: <FaUpload className="text-xl sm:text-2xl text-white/80" />,
    description: 'Seamless uploads to Spotify, Apple Podcasts, YouTube & more.',
  },
  {
    title: 'Content Repurposing',
    icon: <FaRetweet className="text-xl sm:text-2xl text-white/80" />,
    description: 'Turn episodes into social clips, reels, quotes, and blog posts.',
  },
  {
    title: 'Guest Management',
    icon: <FaUserCheck className="text-xl sm:text-2xl text-white/80" />,
    description: 'From outreach to scheduling and briefing.',
  },
];

const CorporatePodcasting = () => {
  return (
    <section className="pt-10 pb-20 px-4 bg-[hsl(var(--background))] text-white fade-in">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center font-playfair">
          Corporate Podcasting
        </h2>

        <p className="text-lg sm:text-xl text-center font-playfair text-white/90">
          At Celebralux, we help brands and leaders launch high-impact podcasts that build trust,
          grow authority, and spark meaningful conversations. Whether you’re starting from scratch
          or scaling an existing show, we offer end-to-end podcasting solutions—designed for clarity,
          consistency, and quality.
        </p>

        <p className="text-base sm:text-lg text-white/80 text-center max-w-3xl mx-auto">
          Our state-of-the-art studio and expert production team ensure your message sounds as good as it looks.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcastServices.map((service, index) => (
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
          Whether you’re creating internal leadership content, thought leadership series, or branded shows—Celebralux is your all-in-one partner for professional podcast production and brand amplification.
        </p>

        <p className="text-xl sm:text-2xl font-semibold text-center italic font-playfair text-white/90">
          Ready to launch your voice into influence?
          <br />
          Book your studio session or podcast strategy call today.
        </p>
      </div>
    </section>
  );
};

export default CorporatePodcasting;
