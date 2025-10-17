import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "projects", element: <Projects /> },
			{ path: "about", element: <About /> },
			{ path: "contact", element: <Contact /> },
		],
	},
]);
