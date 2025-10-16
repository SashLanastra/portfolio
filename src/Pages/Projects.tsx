import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SkillsCard } from "../components/SkillsCard";
import { Title } from "../components/Title";
import img from "../assets/shoppingspree 1.webp";
import img1 from "../assets/hrsystema 1.webp";
import img3 from "../assets/urbanesoftware.webp";
import placeholder_one from "../assets/hrsystema_placeholder.png";
import placeholder_two from "../assets/shoppingspree_placeholder.png";
import placeholder_three from "../assets/urbanesoftware_placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";





export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    
    handleResize(); // Call immediately to set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsData = [
    {
      id: 1,

      image: img3,
      placeholderSrc: placeholder_three,
      title: "U r b a n e",
      skills: ["ReactJS", "GSAP", "HTML", "CSS", "Sass", "Figma"],
      description:
        "Urbane Software is a tech company in Johannesburg that offers software development services. I collaborated with them in primarily designing and developing their landing page and secondarily creating their logo.",

      link: "https://urbanesoftware.co.za",
    },
    {
      id: 2,
      image: img,
      placeholderSrc: placeholder_two,
      title: "S h o p p i n g S p r e e",
      skills: ["React", "TypeScript", "HTML", "CSS", "Figma"],
      description:
        "Shopping Spree is an e-commerce website, with a simplistic, yet slick design that is sure to grab any customers attention.",

      link: "https://shopping-spree-site.vercel.app/",
    },
    {
      id: 3,
      image: img1,
      placeholderSrc: placeholder_one,
      title: "HR S y s t e m a",
      skills: [
        "ReactJS",
        "HTML",
        "TailwindCSS",
        "ExpressJS(Node)",
        "MySQL",
        "Figma",
      ],
      description:
        "Built to meet the simple needs of a small to medium company, this web application goes above and beyond, with the MVP meeting all the minimum requirements set by the client.",

      link: "https://sash-hr-systema.netlify.app",
    },
  ];

  const getSlideStyles = (index) => {
    const difference = index - currentIndex;
    const normalizedDiff =
      (difference + projectsData.length) % projectsData.length;

    let classes =
      "absolute top-1/2 transition-all duration-500 ease-in-out cursor-pointer w-full max-w-xl";

    if (normalizedDiff === 0) {
      // Current slide
      classes += " left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-100";
    } else if (normalizedDiff === 1) {
      // Next slide
      classes +=
        " left-[80%] -translate-x-1/2 -translate-y-1/2 z-20 opacity-40 scale-50";
    } else if (normalizedDiff === projectsData.length - 1) {
      // Previous slide
      classes +=
        " left-[20%] -translate-x-1/2 -translate-y-1/2 z-20 opacity-40 scale-50";
    } else {
      // Hidden slides
      classes +=
        " left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 scale-0";
    }

    return classes;
  };

  const handleSlideClick = (index) => {
    const difference = index - currentIndex;
    const normalizedDiff =
      (difference + projectsData.length) % projectsData.length;

    if (normalizedDiff === 1 || normalizedDiff === projectsData.length - 1) {
      setCurrentIndex(index);
    }
  };

  return (
    <section
      ref={projects}
      className={`flex flex-col px-2 w-full gap-8 items-center min-h-screen justify-center bg-bg-primary ${!isMobile ? 'overflow-y-hidden' : 'overflow-visible'}`}
    >

      {!isMobile ? (
        <div className="relative w-full max-w-6xl h-144 z-0">
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              className={getSlideStyles(index)}
              onClick={() => handleSlideClick(index)}
              aria-label={`View ${project.title} project`}
              type="button"
            >
              <ProjectCard>
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  placeholderSrc={project.placeholderSrc}
                  className="rounded-sm w-full"
                  effect="blur"


                />


                <h2 className="text-slate-50 text-lg tracking-widest">
                  {project.title}

                </h2>
                <div className="flex w-full justify-center flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <SkillsCard key={skill}>{skill}</SkillsCard>
                  ))}
                </div>
                <p className="text-slate-50">{project.description}</p>
                {project.link && (
                  <div className="flex w-full gap-4 justify-start">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SkillsCard className="bg-secondary text-slate-50 underline">
                        View Project
                      </SkillsCard>
                    </a>
                  </div>
                )}
              </ProjectCard>
            </button>
          ))}

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {projectsData.map((_, index) => (
              <button
                key={_.id}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-secondary w-4" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col py-28 gap-8 items-center w-full">
          <Title>Projects</Title>
          {
            projectsData.map((project) => (

              <ProjectCard key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-sm w-full"
                />
                <h2 className="text-slate-50 text-lg tracking-widest">
                  {project.title}
                </h2>
                <div className="flex w-full flex-wrap justify-center gap-2">
                  {project.skills.map((skill) => {
                    return <SkillsCard key={skill}>{skill}</SkillsCard>;
                  })}
                </div>
                <p className="text-slate-50">{project.description}</p>
                {project.link && (
                  <div className="flex w-full gap-4 justify-start">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SkillsCard className="bg-secondary text-slate-50 underline">
                        View Project
                      </SkillsCard>
                    </a>
                  </div>
                )}
              </ProjectCard>
            ))
          }
        </div>
      )}
    </section>
  );
};

export default Projects;
