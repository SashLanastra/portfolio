import img1 from "@/assets/company_1.svg";
import img2 from "@/assets/company_2.svg";
import img3 from "@/assets/company_3.svg";
import img4 from "@/assets/company_4.svg";
import { type Experience, ExperienceCardOpen } from "./index";

export const experienceData: Experience[] = [
	{
		id: 1,
		title: "Wamly",
		position: "Senior Frontend Developer",
		company: "Wamly",
		src: img4,
		alt: "Wamly badge",
		date: "April 2025 - Present",
		width: 60,
		modalType: ExperienceCardOpen.WAMLY,
		companyDescription:
			"Wamly is a software company that provides software solutions to businesses.",
	},
	{
		id: 2,
		title: "eSimplified",
		position: "Full Stack Developer",
		company: "eSimplified",
		src: img1,
		alt: "eSimplified badge",
		date: "October 2023 - April 2025",
		width: 50,
		modalType: ExperienceCardOpen.ESIMPLIFIED,
		companyDescription:
			"eSimplified is a software company that provides software solutions to businesses.",
	},
	{
		id: 3,
		title: "Old Mutual",
		position: "Full Stack Developer",
		company: "Old Mutual",
		src: img2,
		alt: "Old Mutual badge",
		date: "July 2022 - October 2023",
		width: 50,
		modalType: ExperienceCardOpen.OLDMUTUAL,
		companyDescription:
			"Old Mutual is a financial services company that provides insurance and investment solutions to businesses.",
	},
	{
		id: 4,
		title: "Urbane Software",
		position: "Frontend Developer",
		company: "Urbane Software",
		src: img3,
		alt: "Urbane Software badge",
		date: "May 2020 - June 2022",
		width: 60,
		modalType: ExperienceCardOpen.URBANESOFTWARE,
		companyDescription:
			"Urbane Software is a software company that provides software solutions to businesses.",
	},
];

export const greetings = [
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
