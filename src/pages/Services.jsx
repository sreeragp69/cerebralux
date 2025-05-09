import Card from "../components/Card";
import servicesData from "../utils/index";

const Services = () => {
  return (
    <section className="py-10 px-4 bg-[hsl(var(--background))]  flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white font-playfair">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData && servicesData.length > 0 ? (
            servicesData.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                link={`/services/${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                a
              />
            ))
          ) : (
            <div className="col-span-full text-center text-white text-lg">
              No services available at the moment. Please check back later.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
