import React from 'react';

const Vision = ({ visionStatement, goals }) => {
  const visionData = {
    visionStatement: "To become the No.1 Personal Branding Company in India by building a community-driven creative ecosystem powered by videographers, editors, and storytellers across Kerala.",
    goals: [
      "Build value-driven personal brands",
      "Create career opportunities for young creators",
      "Become the go-to brand for digital growth"
    ]
  };

  return (
    <section className="pt-16 pb-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white font-playfair leading-tight">
          Our Vision
        </h2>

        <div className="glass-effect rounded-xl p-8 sm:p-12 space-y-12 bg-white/20 sm:bg-transparent transition-all duration-500 ease-in-out shadow-lg backdrop-blur-md">
          <p className="text-xl sm:text-2xl text-white text-center font-playfair leading-relaxed opacity-90">
            {visionStatement || "To become the No.1 Personal Branding Company in India by building a community-driven creative ecosystem powered by videographers, editors, and storytellers across Kerala."}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {visionData.goals?.map((goal, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl border border-white/20 bg-[hsl(var(--background))] hover:scale-[1.03] transition-transform duration-300 ease-in-out shadow-md backdrop-blur-sm cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white text-center  transition-colors duration-300">
                  {goal}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
