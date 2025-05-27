import { useMemo } from "react";
import Card from "../components/Card";
import servicesData from "../utils/index";

const Services = () => {
  const renderedServices = useMemo(() => {
    return servicesData.map((service) => (
      <Card
        key={service.title}
        icon={service.icon}
        title={service.title}
        description={service.description}
        image={service.image}
        link={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
      />
    ));
  }, []);

  const isEven = servicesData.length % 2 === 0;

  const cardRows = [];
  for (let i = 0; i < servicesData.length - (isEven ? 0 : 1); i += 2) {
    cardRows.push(renderedServices.slice(i, i + 2));
  }

  const lastCard = !isEven ? renderedServices[renderedServices.length - 1] : null;

  return (
    <section className="py-10 px-4 bg-[hsl(var(--background))] flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white font-playfair">
          Our Core Services
        </h2>

        {servicesData.length === 0 ? (
          <div className="text-white text-center">
            No services available at the moment.
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            {cardRows.map((row, idx) => (
              <div key={idx} className="flex flex-col md:flex-row w-full gap-8 md:justify-between items-center md:items-stretch">

                {row.map((card, i) => (
                  <div key={i} className="w-full md:w-[48%]">{card}</div>
                ))}
              </div>
            ))}
            {lastCard && (
              <div className="w-full flex justify-center">
                <div className="w-full md:w-[48%]">{lastCard}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
