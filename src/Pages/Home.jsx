import React, { useEffect } from 'react'
import { Title } from '../components/Title'
import { SkillsCard } from '../components/SkillsCard'

export const Home = ({ home }) => {
    const greetings = ['Hello', 'Sawubona', 'Dumelang', 'Thobela', 'Hallo', 'Ndaa', 'Yha', 'Lotjhani', 'Bonjour', `Kon'nichiwa`, 'Moni', 'Ahoj', 'Hola', 'Ola', 'Privet']

    

    useEffect(() => {
        document.title = `| Home`
    },[])



    return (
        <section ref={home} className='pt-32 sm:pt-44 min-h-screen bg-bg-primary flex flex-col items-center gap-8'>
            <div
                className='flex items-center mb-8'
            >
                <div className='relative flex justify-center greeting'>
                    {greetings.map((greeting, index) => {
                        return (
                            <div
                                key={index}
                                className='absolute origin-center opacity-0 text-3xl'
                                style={{ animationDelay: `${index * 6000}ms` }}
                            >
                                {greeting}
                            </div>
                        )
                    })}
                </div>
            </div>
            <h1 className='text-xl sm:text-2xl'>My name is <span className='font-bold'>Daniel</span> and I'm a </h1>
            <span className='text-color-blocker underline text-3xl sm:text-4xl'>Front-End Developer</span>
            <Title>Technical Skills</Title>
            <div className='flex flex-col items-center sm:grid sm:grid-cols-2 sm:place-content-center lg:grid lg:grid-cols-3 sm:place-items-start sm:max-w-screen-xl sm:gap-10  gap-8 mb-8 px-6'>
                <div className='flex flex-col items-center w-full sm:max-w-sm gap-2'>
                    <h4
                        className='text-xl underline font-bold text-primary'
                    >Programming Languages</h4>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <SkillsCard>TypeScript</SkillsCard>
                        <SkillsCard>JavaScript</SkillsCard>
                        <SkillsCard>HTML, CSS, TailwindCSS & SCSS</SkillsCard>
                        <SkillsCard>Python</SkillsCard>
                        <SkillsCard>MySQL</SkillsCard>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full sm:max-w-md gap-2'>
                    <h4
                        className='text-xl underline font-bold text-primary'
                    >Programming Skills</h4>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <SkillsCard>Single Page Apps</SkillsCard>
                        <SkillsCard>State Management</SkillsCard>
                        <SkillsCard>REST API</SkillsCard>
                        <SkillsCard>Responsive Design</SkillsCard>
                        <SkillsCard>PWA</SkillsCard>
                        <SkillsCard>Object Oriented Programming</SkillsCard>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full sm:max-w-md gap-2'>
                    <h4
                        className='text-xl underline font-bold text-primary'
                    >Primary Frameworks</h4>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <SkillsCard>React(Vite/NextJS)</SkillsCard>
                        <SkillsCard>ExpressJS</SkillsCard>
                        <SkillsCard>Django</SkillsCard>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full sm:max-w-md gap-2'>
                    <h4
                        className='text-xl underline font-bold text-primary'
                    >Spoken Languages</h4>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <SkillsCard>English(fluent)</SkillsCard>
                        <SkillsCard>Zulu(Proficient)</SkillsCard>
                        <SkillsCard>Sepedi(Average)</SkillsCard>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full sm:max-w-md gap-2'>
                    <h4
                        className='text-xl underline font-bold text-primary'
                    >Tech Stack</h4>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <SkillsCard>Git & GitHub</SkillsCard>
                        <SkillsCard>Figma & AdobeXD</SkillsCard>
                        <SkillsCard>Windows</SkillsCard>
                        <SkillsCard>MacOS</SkillsCard>
                        <SkillsCard>Blender</SkillsCard>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full sm:max-w-md gap-2'>
                    <h4
                        className='text-xl underline font-bold text-primary'
                    >Soft Skills</h4>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <SkillsCard>Problem Solving</SkillsCard>
                        <SkillsCard>Effective Communication</SkillsCard>
                        <SkillsCard>Good Leadership</SkillsCard>
                        <SkillsCard>Good Comprehension</SkillsCard>
                        <SkillsCard>Creative Thinking</SkillsCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
