import { ProjectCard } from "../components/ProjectCard";
import { Title } from "../components/Title";
import img from "../assets/shoppingspree 1.png";
import img1 from "../assets/hrsystema 1.png";
import img3 from "../assets/urbanesoftware.png";
import img4 from "../assets/spinwin.svg";
import { SkillsCard } from "../components/SkillsCard";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const Projects = ({ projects }) => {
  useEffect(() => {
    document.title = "| Projects";
  }, []);
  return (
    <section
      ref={projects}
      className="flex px-2 w-full flex-col gap-8 items-center overflow-x-hidden pt-44 min-h-screen bg-bg-primary"
    >
      <Title className="">Projects</Title>
      <div className="flex flex-col items-center gap-8 pb-8 w-full">
        <ProjectCard>
          <img src={img4} alt="project img" className="rounded w-full " />
          <h2 className="text-slate-50 text-lg tracking-widest">
            Old Mutual Digital Adoption
          </h2>
          <div className="flex w-full justify-center flex-wrap gap-2">
            <SkillsCard>React</SkillsCard>
            <SkillsCard>TypeScript</SkillsCard>
            <SkillsCard>HTML</SkillsCard>
            <SkillsCard>TailwindCSS</SkillsCard>
            <SkillsCard>Supabase</SkillsCard>
            <SkillsCard>Figma</SkillsCard>
          </div>
          <p className="text-slate-50">
            Old Mutual&apos;s Digital Adoption was a campaign with the goal of
            encouraging their clientele to adopt their digital banking platforms
            to lessen the in-branch traffic. This was achieved by way of a
            digital &apos;Spin n Win&apos; wheel. I collaborated with them
            through an agency(Black Creative Ideas) in designing and developing
            the wheel and their web app which would house the wheel. The
            competition ran for a period of 3 months.{" "}
            <span className="text-color-blocker">
              <span className="font-bold">NB.</span> The link is no longer
              available due to our contractual obligation to destroy the site
              and all information it housed, once the competition reached its
              close.
            </span>
          </p>
        </ProjectCard>
        <ProjectCard>
          <img src={img3} alt="project img" className="rounded w-full " />
          <h2 className="text-slate-50 text-lg">U r b a n e</h2>
          <div className="flex w-full flex-wrap justify-center gap-2">
            <SkillsCard>ReactJS</SkillsCard>
            <SkillsCard>GSAP</SkillsCard>
            <SkillsCard>HTML</SkillsCard>
            <SkillsCard>CSS</SkillsCard>
            <SkillsCard>Sass</SkillsCard>
            <SkillsCard>Figma</SkillsCard>
          </div>
          <p className="text-slate-50">
            Urbane Software is a tech company in Johannesburg that offers
            software development services. I collaborated with them in primarily
            designing and developing their landing page and secondarily creating
            their logo. The site features fluid animations on desktop, uses a
            modern design layout and is fully responsive.
          </p>
          <div className="flex w-full gap-4 justify-start">
            <a
              href="https://urbanesoftware.co.za"
              target="_blank"
              rel="noreferrer"
            >
              <SkillsCard className="bg-secondary text-slate-50 underline">
                View Project
              </SkillsCard>
            </a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <img src={img} alt="project img" className="rounded w-full " />
          <h2 className="text-slate-50 text-lg">S h o p p i n g S p r e e</h2>
          <div className="flex w-full gap-2 justify-center">
            <SkillsCard>React</SkillsCard>
            <SkillsCard>TypeScript</SkillsCard>
            <SkillsCard>HTML</SkillsCard>
            <SkillsCard>CSS</SkillsCard>
            <SkillsCard>Figma</SkillsCard>
          </div>
          <p className="text-slate-50">
            Shopping Spree is an e-commerce website, with a simplistic, yet
            slick design that is sure to grab any customers attention. The site
            fetches all current product information from the
            &apos;fakestoreAPI&apos; and serves it on a React TypeScript front
            end. With a responsive design that is sure to impress, this product
            maintains the standard across all devices.
          </p>
          <div className="flex w-full gap-4 justify-start">
            <a
              href="https://sash-shopping-spree.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <SkillsCard className="bg-secondary text-slate-50 underline">
                View Project
              </SkillsCard>
            </a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <img src={img1} alt="project img" className="rounded w-full " />
          <h2 className="text-slate-50 text-lg">HR S y s t e m a</h2>
          <div className="flex w-full flex-wrap gap-2 justify-center">
            <SkillsCard>ReactJS</SkillsCard>
            <SkillsCard>HTML</SkillsCard>
            <SkillsCard>TailwindCSS</SkillsCard>
            <SkillsCard>ExpressJS(Node)</SkillsCard>
            <SkillsCard>MySQL</SkillsCard>
            <SkillsCard>Figma</SkillsCard>
          </div>
          <p className="text-slate-50">
            Dare I say, this is a Human Resource Utopia. Built to meet the
            simple needs of a small to medium company, this web application goes
            above an beyond, with the MVP meeting all thge minimum requirements
            set by the client. The web app runs on ReactJS front end with a
            NodeJS & ExpressJS server that fetches all employee information from
            a MySQL database.
          </p>
          <div className="flex w-full gap-4 justify-start">
            <a
              href="https://sash-hr-systema.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <SkillsCard className="bg-secondary text-slate-50 underline">
                View Project
              </SkillsCard>
            </a>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.object,
};
