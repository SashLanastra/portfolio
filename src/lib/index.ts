export enum ExperienceCardOpen {
	WAMLY = "WAMLY",
	ESIMPLIFIED = "ESIMPLIFIED",
	OLDMUTUAL = "OLDMUTUAL",
	URBANESOFTWARE = "URBANESOFTWARE",
    NONE = "NONE",
}

export interface Experience {
	id: number;
	title: string;
	position: string;
	company: string;
	src: string;
	alt: string;
	date: string;
	width: number;
	modalType: ExperienceCardOpen;
    companyDescription: string;
}