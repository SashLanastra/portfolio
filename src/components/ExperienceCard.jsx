import { forwardRef } from "react";
import PropTypes from "prop-types";

export const ExperienceCard = forwardRef(({ className, ...rest }, ref) => {
  return (
    <a href={rest.href} target="_blank" rel="noopener noreferrer" className="hover:bg-primary hover:shadow-md hover:rounded-lg hover:shadow-black-50 hover:cursor-pointer">
      <div
        className={`p-2 rounded-md flex flex-col items-center backdrop-blur-3xl justify-between md:h-36 ${className}`}
        {...rest}
        ref={ref}
      >
        <img
          src={rest.src}
          alt={rest.alt}
          width={rest.width}
          height={50}
          className="text-red-700"
        />{" "}
        <div className="hidden md:flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm">{rest.company}</p>
          <p className="text-xs sm:text-sm">{rest.date}</p>
          <p className="text-xs sm:text-sm">{rest.description}</p>
        </div>
      </div>
    </a>
  );
});

ExperienceCard.displayName = "ExperienceCard";

ExperienceCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
