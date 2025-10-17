import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import linkedinLogo from "../assets/linkedin.svg";
import logo from "../assets/logo3.svg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const MainLayout = () => {
	const [responsiveNav, setResponsiveNav] = useState(false);

	return (
		<div
			className="relative flex flex-col max-w-screen min-h-screen"
			id={responsiveNav ? "scroll-disable" : ""}
		>
			<header className="w-full fixed top-0 flex justify-between lg:justify-around lg:items-center sm:shadow-none shadow-lg z-10 backdrop-blur-3xl px-4">
				<Link to="">
					<img src={logo} alt="" className="sm:hidden lg:block" width={150} />
				</Link>
				<Header
					responsiveNav={responsiveNav}
					setResponsiveNav={setResponsiveNav}
				/>
				<a
					href="https://www.linkedin.com/in/daniel-mankanda-b394681b2/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={linkedinLogo}
						alt="LinkedIn Logo"
						className="hidden lg:block"
					/>
				</a>
			</header>
			<main className="w-full grow-1">
				<Outlet />
				<Footer />
			</main>
		</div>
	);
};
