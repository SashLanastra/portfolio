import { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../Pages/Home'
import { Projects } from '../Pages/Projects'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import logo from '../assets/logo3.svg'
import linkedinLogo from '../assets/linkedin.svg'
import { Footer } from '../components/Footer'




export const MainLayout = () => {
    const [responsiveNav, setResponsiveNav] = useState(false)
    const [projectModal, setProjectModal] = useState(false)

    const home = useRef(null)
    const projects = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)
    return (
        <div className='relative flex flex-col max-w-screen' id={responsiveNav ? 'scroll-disable' : ''}>
            <header className='w-full fixed top-0 flex justify-between lg:justify-around lg:items-center sm:shadow-none shadow-lg z-10 backdrop-blur-3xl px-4'>
                <Link to=''>
                    <img src={logo} alt="" className='sm:hidden lg:block' width={150}/>
                </Link>
                <Header
                    home={home}
                    projects={projects}
                    about={about}
                    contact={contact}
                    responsiveNav={responsiveNav}
                    setResponsiveNav={setResponsiveNav}
                />
                <a href="https://www.linkedin.com/in/daniel-mankanda-b394681b2/" target='_blank' rel='noreferrer'>
                    <img src={linkedinLogo} alt="LinkedIn Logo" className='hidden lg:block' />
                </a>
            </header>
            <main className='w-full'>
                <Outlet>
                    <Home
                        home={home}
                        projectModal={projectModal}
                        setProjectModal={setProjectModal}
                    />
                    <Projects
                        projects={projects}
                    />
                    <About
                        about={about}
                    />
                    <Contact
                        contact={contact}
                    />
                </Outlet>
                <Footer/>
            </main>
        </div>
    )
}
