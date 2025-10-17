import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ExperienceCardProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
	className?: string;
	src: string;
	alt: string;
	width?: number;
	company: string;
	date: string;
	position: string;
	onClick: () => void;
}

export const ExperienceCard = forwardRef<
	HTMLButtonElement,
	ExperienceCardProps
>(
	(
		{
			className = "",
			src,
			alt,
			width,
			company,
			date,
			position,
			onClick,
			...rest
		},
		ref,
	) => {
		return (
			<button
				type="button"
				className={`p-2 rounded-md flex flex-col items-center backdrop-blur-3xl justify-between md:h-36 ${className}`}
				{...rest}
				ref={ref}
				onClick={onClick}
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
					<p className="text-xs sm:text-sm">{position}</p>
				</div>
			</button>
		);
	},
);

ExperienceCard.displayName = "ExperienceCard";
