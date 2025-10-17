import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
	responsiveNav: boolean;
	setResponsiveNav: (value: boolean) => void;
}

export const Header = ({ responsiveNav, setResponsiveNav }: HeaderProps) => {
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMenu = (e: MouseEvent) => {
			if (!menuRef.current?.contains(e.target as Node)) {
				setResponsiveNav(false);
			}
		};
		document.addEventListener("click", handleMenu);

		return () => {
			document.removeEventListener("click", handleMenu);
		};
	}, [setResponsiveNav]);

	const activeStyle = {
		background: "rgba(255, 255, 255, 0.005)",
		borderRadius: "10px",
		color: "#fff",
		border: "0.5px solid rgba(255, 255, 255, 0.5)",
		boxShadow:
			"inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
	};

	const resNavActive = {
		background: "rgba(255, 255, 255, 0.05)",
		backdropFilter: "brightness(0.95) blur(6px)",
		borderRadius: "5px",
		color: "#fff",
		border: "0.5px solid rgba(255, 255, 255, 0.5)",
		boxShadow:
			"inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
	};

	const handleNav = () => {
		setResponsiveNav(!responsiveNav);
	};

	const menuButton = !responsiveNav ? "Menu" : "Close";

	return (
		<>
			<nav className="hidden sm:flex justify-center w-fit mx-auto rounded-md">
				<ul className="flex gap-12 px-4 py-8 rounded-md w-fit text-slate-900">
					<NavLink
						to=""
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<li className="flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest">
							<div className="group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100">
								<div className="flex items-center relative">
									{"home".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
								<div className="flex items-center absolute bottom-0 left-0">
									{"home".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
							</div>
						</li>
					</NavLink>
					<NavLink
						to="projects"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<li className="flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest">
							<div className="group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100">
								<div className="flex items-center relative">
									{"projects".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
								<div className="flex items-center absolute bottom-0 left-0">
									{"projects".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
							</div>
						</li>
					</NavLink>
					<NavLink
						to="about"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<li className="flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest">
							<div className="group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100">
								<div className="flex items-center relative">
									{"about".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
								<div className="flex items-center absolute bottom-0 left-0">
									{"about".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
							</div>
						</li>
					</NavLink>
					<NavLink
						to="contact"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<li className="flex items-center px-4 py-2 rounded-md  cursor-pointer tracking-widest">
							<div className="group w-full h-full relative cursor-pointer transition ease-in-out duration-500 hover:scale-100">
								<div className="flex items-center relative">
									{"contact".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
								<div className="flex items-center absolute bottom-0 left-0">
									{"contact".split("").map((letter, i) => (
										<div
											key={letter}
											className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100 text-slate-50"
											style={{ transitionDelay: `${i * 75}ms` }}
										>
											{letter}
										</div>
									))}
								</div>
							</div>
						</li>
					</NavLink>
				</ul>
			</nav>
			{responsiveNav && (
				<div className="absolute top-0 left-0 bg-black-50 w-full min-h-screen"></div>
			)}
			<nav
				ref={menuRef}
				className="nav sm:hidden absolute right-0 flex items-center w-fit"
				id={responsiveNav ? "nav-open" : ""}
			>
				<button
					onClick={handleNav}
					className="absolute -left-12 top-7 bg-slate-50 rounded-xs px-1 text-black"
					id={!responsiveNav ? "btn-gradient" : ""}
					type="button"
				>
					{menuButton}
				</button>
				<ul className="flex flex-col w-fit bg-black-75 backdrop-blur-lg min-h-screen py-20">
					<NavLink
						to=""
						style={({ isActive }) => (isActive ? resNavActive : undefined)}
						className="w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary"
						onClick={handleNav}
					>
						Home
					</NavLink>
					<NavLink
						to="projects"
						style={({ isActive }) => (isActive ? resNavActive : undefined)}
						className="w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary"
						onClick={handleNav}
					>
						Projects
					</NavLink>
					<NavLink
						to="about"
						style={({ isActive }) => (isActive ? resNavActive : undefined)}
						className="w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary"
						onClick={handleNav}
					>
						About
					</NavLink>
					<NavLink
						to="contact"
						style={({ isActive }) => (isActive ? resNavActive : undefined)}
						className="w-full py-4 text-slate-50 px-20 hover:bg-secondary focus:bg-secondary"
						onClick={handleNav}
					>
						Contact
					</NavLink>
				</ul>
			</nav>
		</>
	);
};
