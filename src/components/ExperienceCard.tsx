import { forwardRef, HTMLAttributes } from "react";

interface ExperienceCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  company: string;
  date: string;
  description: string;
  href: string;
}

export const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>(
  (
    {
      className = "",
      src,
      alt,
      width,
      company,
      date,
      description,
      href,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-primary hover:shadow-md hover:rounded-lg hover:shadow-black-50 hover:cursor-pointer"
      >
        <div
          className={`p-2 rounded-md flex flex-col items-center backdrop-blur-3xl justify-between md:h-36 ${className}`}
          {...rest}
          ref={ref}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={50}
            className="text-red-700"
          />{" "}
          <div className="hidden md:flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm">{company}</p>
            <p className="text-xs sm:text-sm">{date}</p>
            <p className="text-xs sm:text-sm">{description}</p>
          </div>
        </div>
      </a>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";
