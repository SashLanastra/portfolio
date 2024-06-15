import { useState, useEffect } from "react";
import { Title } from "../components/Title";
import img from "../assets/aboutimg.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const About = ({ about }) => {
  const [fullAboutMe, setFullAboutMe] = useState(false);

  useEffect(() => {
    document.title = "| About Me";
  });

  const button = fullAboutMe ? "Show short version" : "Show full version";

  const handleAbout = () => {
    setFullAboutMe(!fullAboutMe);
  };

  return (
    <section
      ref={about}
      className="flex flex-col gap-8 items-center pt-44 min-h-screen px-4 pb-8 bg-bg-primary"
    >
      <Title>About Me</Title>
      <div className="bg-black-75 w-full max-w-4xl rounded flex flex-col items-center gap-4 px-3 py-2 lg:flex-row lg:items-start">
        <div className="w-1/3 p-2 rounded gradient">
          <img src={img} alt="" className="w-full img rounded" />
        </div>
        <div className="flex flex-col gap-3 w-full lg:w-2/3 items-start">
          <button
            className="text-header-primary underline"
            onClick={handleAbout}
          >
            {button}
          </button>
          <p className="text-slate-50 ">
            My name is , Daniel Mpho Mankanda and I&apos;m a 28 year-old front end
            developer from the Far East Rand of Johannesburg.
          </p>
          {fullAboutMe && (
            <p className="text-slate-50 ">
              My journey as a developer and the passion for it that followed
              begins with the necessity to provide for my family.
            </p>
          )}
          {fullAboutMe && (
            <p className="text-slate-50 ">
              After a lot of passion pursuits, be they failed or delayed,
              front-end development was suggested to me by a close friend in the
              industry - given my affinity for problem solving (Boy, Oh boy have
              bug fixes put that affinity to the test).
            </p>
          )}
          {fullAboutMe && (
            <p className="text-slate-50 ">
              Having spent 3 years as an aspiring chemical engineer before
              dropping out, I learned the processes that go into{" "}
              <span className="text-color-blocker text-lg font-bold italic">
                s o l u t i o n i n g
              </span>{" "}
              using fundamentals of math and{" "}
              <span className="text-color-blocker text-lg font-bold italic">
                l o g i c
              </span>
              . These are skills I have been able to leverage to great effect as
              a developer.
            </p>
          )}
          <p className="text-slate-50 ">
            I started as a web developer in 2020 - building simple programs such
            as minesweeper & a calculator using Python. After 4 months of
            intensive learning and understanding the fundamental concepts of
            programming, I started learning HTML & CSS. I have since then
            hyperbolically increased my skillset by learning JavaScript &
            TypeScript. Using frameworks such as ReactJS, ExpressJS and cloud
            technologies I have since designed, developed & deployed fully
            functional, modern web apps for both production and personal
            purposes.
          </p>
          <p className="text-slate-50 ">
            For the full scope of my experience, please see my{" "}
            <Link to="/projects">
              <span className="underline uppercase text-color-blocker">
                projects
              </span>
            </Link>{" "}
            page
          </p>
          <p className="text-slate-50 ">
            Needless to say that I am unwavering in my pursuit to further
            improve myself professionally and personally. I hope to be working
            with/for an establishment that encourages that improvement and
            shares my passion for using software to change the world for the
            better - one programme at a time. If that sounds like you, I&apos;d love
            it if you reached out.
          </p>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  about: PropTypes.object,
};
