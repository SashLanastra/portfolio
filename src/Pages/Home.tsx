import { useEffect, useState } from "react";
import { ExperienceDetailsModals } from "@/components/ExperienceDetailsModals";
import { ExperienceCardOpen } from "@/lib";
import { greetings } from "@/lib/const";
import { SkillsCard } from "../components/SkillsCard";
import { Title } from "../components/Title";

export const Home = () => {
	const [experienceCardState, setExperienceCardState] =
		useState<ExperienceCardOpen>(ExperienceCardOpen.NONE);

	useEffect(() => {
		document.title = `| Home`;
	}, []);

	return (
		<section className="pt-32 flex min-h-screen flex-col items-center gap-8 grow-1">
			<div className="flex items-center mb-8">
				<div className="relative flex justify-center greeting">
					{greetings.map((greeting, index) => {
						return (
							<div
								key={greeting}
								className="absolute origin-center opacity-0 text-3xl"
								style={{ animationDelay: `${index * 6000}ms` }}
							>
								{greeting}
							</div>
						);
					})}
				</div>
			</div>
			<p className="text-md sm:text-xl max-w-lg text-center px-4">
				I&apos;m <span className="text-color-blocker">Daniel</span> and I&apos;m
				a Software Developer with{" "}
				<span className="text-color-blocker">5 years</span> of experience in
				developing & deploying web applications from backend to frontend.
			</p>

			<div className="rounded-md text-center mx-4">
				<h4 className="py-4">Work Experience:</h4>
				<div className="flex gap-4 sm:gap-8 p-4 h-full text-md">
					<ExperienceDetailsModals
						experienceCardState={experienceCardState}
						setExperienceCardState={setExperienceCardState}
					/>
				</div>
			</div>

			<Title>Technical Skills</Title>

			<div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:place-content-center lg:grid lg:grid-cols-3 sm:place-items-start sm:max-w-(--breakpoint-xl) sm:gap-10  gap-8 mb-8 px-6">
				<div className="flex flex-col items-center w-full sm:max-w-sm gap-2">
					<h4 className="text-xl underline font-bold text-primary">
						Programming Languages
					</h4>
					<div className="flex flex-wrap gap-2 justify-center">
						<SkillsCard>TypeScript</SkillsCard>
						<SkillsCard>JavaScript</SkillsCard>
						<SkillsCard>Python</SkillsCard>
						<SkillsCard>HTML, CSS, TailwindCSS & SCSS</SkillsCard>
						<SkillsCard>SQL</SkillsCard>
					</div>
				</div>
				<div className="flex flex-col items-center w-full sm:max-w-md gap-2">
					<h4 className="text-xl underline font-bold text-primary">
						Programming Skills
					</h4>
					<div className="flex flex-wrap gap-2 justify-center">
						<SkillsCard>Single Page Apps</SkillsCard>
						<SkillsCard>REST API</SkillsCard>
						<SkillsCard>State Management</SkillsCard>
						<SkillsCard>Database Management</SkillsCard>
						<SkillsCard>Responsive Design</SkillsCard>
						<SkillsCard>PWA</SkillsCard>
						<SkillsCard>Object Oriented Programming</SkillsCard>
						<SkillsCard>Software Testing</SkillsCard>
						<SkillsCard>Software Documentation</SkillsCard>
					</div>
				</div>
				<div className="flex flex-col items-center w-full sm:max-w-md gap-2">
					<h4 className="text-xl underline font-bold text-primary text-center">
						Primary Frameworks & Technologies
					</h4>
					<div className="flex flex-wrap gap-2 justify-center">
						<SkillsCard>React(Vite/NextJS)</SkillsCard>
						<SkillsCard>Django</SkillsCard>
						<SkillsCard>ExpressJS</SkillsCard>
						<SkillsCard>AWS</SkillsCard>
						<SkillsCard>Postgres</SkillsCard>
						<SkillsCard>Docker</SkillsCard>
						<SkillsCard>Datadog</SkillsCard>
						<SkillsCard>Git & GitHub</SkillsCard>
						<SkillsCard>Supabase</SkillsCard>
						<SkillsCard>Figma & AdobeXD</SkillsCard>
					</div>
				</div>
				<div className="flex flex-col items-center w-full sm:max-w-md gap-2">
					<h4 className="text-xl underline font-bold text-primary">
						Spoken Languages
					</h4>
					<div className="flex flex-wrap gap-2 justify-center">
						<SkillsCard>English(fluent)</SkillsCard>
						<SkillsCard>Zulu(Proficient)</SkillsCard>
						<SkillsCard>Sepedi(Average)</SkillsCard>
					</div>
				</div>
				<div className="flex flex-col items-center w-full sm:max-w-md gap-2">
					<h4 className="text-xl underline font-bold text-primary">
						Tech Stack
					</h4>
					<div className="flex flex-wrap gap-2 justify-center">
						<SkillsCard>Windows</SkillsCard>
						<SkillsCard>MacOS</SkillsCard>
						<SkillsCard>Blender</SkillsCard>
					</div>
				</div>
				<div className="flex flex-col items-center w-full sm:max-w-md gap-2">
					<h4 className="text-xl underline font-bold text-primary">
						Soft Skills
					</h4>
					<div className="flex flex-wrap gap-2 justify-center">
						<SkillsCard>Problem Solving</SkillsCard>
						<SkillsCard>Effective Communication</SkillsCard>
						<SkillsCard>Good Leadership</SkillsCard>
						<SkillsCard>Good Comprehension</SkillsCard>
						<SkillsCard>Creative Thinking</SkillsCard>
					</div>
				</div>
			</div>
		</section>
	);
};
