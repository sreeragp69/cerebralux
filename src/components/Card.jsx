import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Card = ({ title, description, image, link }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const truncateText = (text, maxLength) =>
    text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div
      ref={ref}
      className="glass-effect relative shadow-lg hover-scale flex flex-col lg:flex-row rounded-md overflow-hidden h-full min-h-[250px]"
    >
      {/* Image Block with Lazy Loading */}
      <div className="w-full lg:w-1/2 h-60 lg:h-auto relative">
        {inView && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy" // Native lazy loading
          />
        )}
      </div>

      {/* Content Block */}
      <div className="w-full lg:w-1/2 px-7 py-6 flex flex-col justify-between relative">
        <div>
          <h3 className="text-xl font-bold text-white font-playfair pb-4 uppercase">
            {title}
          </h3>
          <p className="text-white/90 text-base text-justify">
            {truncateText(description, 190)}
          </p>
        </div>
        <Link to={link}>
          <button className="mt-6 text-sm text-white border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-fit self-end">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
