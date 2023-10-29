import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo3.svg'


export const Header = ({ home, projects, about, contact, responsiveNav, setResponsiveNav }) => {

    const menuRef = useRef(null)

    useEffect(() => {
        let handleMenu = (e) => {
            if (!menuRef.current?.contains(e.target)) {
                setResponsiveNav(false)
            }
        }
        document.addEventListener('click', handleMenu);

        return () => {
            document.removeEventListener('click', handleMenu)
        }
    }, [])


    const activeStyle = {
        backgroundColor: '#000000be',
        borderRadius: '5px',
        color: '#ffffffe1',
        border: '0.5px solid #FF5C00'
    }

    const resNavActive = {
        borderRadius: '5px',
        border: '0.5px solid #FF5C00'
    }

    const handleNav = () => {
        setResponsiveNav(!responsiveNav)
    }

    const menuButton = !responsiveNav ? 'Menu' : 'Close'

    return (
        <>
            <nav
                className='hidden sm:flex justify-center w-fit mx-auto rounded-md'
                
            >
                <ul className='flex gap-12 px-4 py-8 rounded-md w-fit text-slate-900'>
                    <NavLink
                        to=''
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >
                        <li className='flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest'
                        >
                            <div className='group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100'>
                                <div className='flex items-center relative'>
                                    {'home'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                                <div className='flex items-center absolute bottom-0 left-0'>
                                    {'home'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink
                        to='projects'
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >
                        <li className='flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest'
                        >
                            <div className='group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100'>
                                <div className='flex items-center relative'>
                                    {'projects'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                                <div className='flex items-center absolute bottom-0 left-0'>
                                    {'projects'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink
                        to='about'
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >
                        <li className='flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest'
                        >
                            <div className='group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100'>
                                <div className='flex items-center relative'>
                                    {'about'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                                <div className='flex items-center absolute bottom-0 left-0'>
                                    {'about'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink
                        to='contact'
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >
                        <li className='flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest'
                        >
                            <div className='group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100'>
                                <div className='flex items-center relative'>
                                    {'contact'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                                <div className='flex items-center absolute bottom-0 left-0'>
                                    {'contact'.split('').map((letter, i) => (
                                        <div
                                            key={i}
                                            className='origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100'
                                            style={{ transitionDelay: `${i * 75}ms` }}
                                        >{letter}</div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </NavLink>
                </ul>
            </nav>
            {responsiveNav && <div className='absolute top-0 left-0 bg-black-50 w-full min-h-screen'></div>}
            <nav ref={menuRef} className='nav sm:hidden absolute right-0 flex items-center w-fit' id={responsiveNav ? 'nav-open' : ''}>
                <button 
                    onClick={handleNav} 
                    className='absolute -left-12 top-9 bg-slate-50 rounded-sm px-1'
                    id={!responsiveNav ? 'btn-gradient' : ''}
                >
                    {menuButton}
                </button>
                <ul
                    className='flex flex-col w-fit bg-black-75 backdrop-blur-lg min-h-screen py-20'

                >
                    <NavLink
                        to=''
                        style={({ isActive }) => isActive ? resNavActive : null}
                    >
                        <li
                            className='w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary'
                            onClick={handleNav}
                        >Home</li>
                    </NavLink>
                    <NavLink
                        to='projects'
                        style={({ isActive }) => isActive ? resNavActive : null}
                    >
                        <li
                            className='w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary'
                            onClick={handleNav}
                        >Projects</li>
                    </NavLink>
                    <NavLink
                        to='about'
                        style={({ isActive }) => isActive ? resNavActive : null}
                    >
                        <li
                            className='w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary'
                            onClick={handleNav}
                        >About</li>
                    </NavLink>
                    <NavLink
                        to='contact'
                        style={({ isActive }) => isActive ? resNavActive : null}
                    >
                        <li
                            className='w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary'
                            onClick={handleNav}
                        >Contact</li>
                    </NavLink>
                </ul>
            </nav>


        </>
    )
}
