import type { ReactNode } from "react";

export type ActionModalProps = {
	children: ReactNode;
	trigger: ReactNode;
	title: string;
	description: string;
	footerNode?: ReactNode;
	id?: string;
	logo?: string;
};
