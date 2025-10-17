import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import type { ActionModalProps } from "./ActionModal.types";
import "./ActionModal.scss";

export const ActionModal = ({
	trigger,
	title,
	description,
	children,
	footerNode,
	id,
	logo,
}: ActionModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="action-modal__content">
				<div className="action-modal__container">
					<DialogHeader>
						<DialogTitle className="action-modal__title">
							{title}
							<img src={logo} alt={title} className="action-modal__logo" />
						</DialogTitle>
						<DialogDescription className="action-modal__description">
							{description}
						</DialogDescription>
					</DialogHeader>
					{children}
					{footerNode && <DialogFooter>{footerNode}</DialogFooter>}
				</div>
			</DialogContent>
		</Dialog>
	);
};
