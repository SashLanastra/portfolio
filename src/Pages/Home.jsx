import { useEffect } from "react";
import { Title } from "../components/Title";
import { SkillsCard } from "../components/SkillsCard";
import { ExperienceCard } from "../components/ExperienceCard";
import img1 from "../assets/company_1.svg";
import img2 from "../assets/company_2.svg";
import img3 from "../assets/company_3.svg";




import PropTypes from "prop-types";

export const Home = ({ home }) => {
  const greetings = [
    "Hello",
    "Sawubona",
    "Dumelang",
    "Thobela",
    "Hallo",
    "Ndaa",
    "Yha",
    "Lotjhani",
    "Bonjour",
    `Kon'nichiwa`,
    "Moni",
    "Ahoj",
    "Hola",
    "Ola",
    "Privet",
  ];

  useEffect(() => {
    document.title = `| Home`;
  }, []);

  return (
    <section
      ref={home}
      className="pt-32 h-full bg-bg-primary flex flex-col items-center gap-8"
    >
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
        I&apos;m <span className="font-bold">Daniel</span> and I&apos;m a{" "}
        Software Developer with <b>5 years</b> of experience in developing & deploying web
        applications from backend to frontend.
      </p>

      <div className="bg-[#030303b1] rounded-md text-center text-white mx-4">
        <h4 className="py-4">Work Experience:</h4>
        <div className="flex gap-4 sm:gap-8 p-4 h-full text-md">
          <ExperienceCard
            src={img1}
            alt="eSimplified badge"
            width={50}
            date="October 2023 - Present"
            company="eSimplified"
            description="Full Stack Developer"
            href="https://esimplified.io"

          />

          <ExperienceCard
            src={img2}
            alt="Old Mutual badge"
            date="July 2022 - October 2023"
            company="Old Mutual"
            description="Full Stack Developer"
            width={50}
            href="https://www.oldmutual.co.za/personal/digital-solutions/"

          />
          <ExperienceCard
            src={img3}
            alt="Urbane Software badge"
            date="May 2020 - June 2022"
            company="Urbane Software"
            description="Frontend Developer"
            width={60}
            href="https://urbanesoftware.co.za"

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

Home.propTypes = {
  home: PropTypes.object,
};
