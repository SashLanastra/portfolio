import type { Dispatch, SetStateAction } from "react";
import type { ExperienceCardOpen } from "@/lib";
import { experienceData } from "@/lib/const";
import { ActionModal } from "./ActionModal/ActionModal";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceDetails } from "./ExperienceDetails";

export const ExperienceDetailsModals = ({
	experienceCardState,
	setExperienceCardState,
}: {
	experienceCardState: ExperienceCardOpen;
	setExperienceCardState: Dispatch<SetStateAction<ExperienceCardOpen>>;
}): React.ReactNode => {
	return (
		<>
			{experienceData.map((experience) => (
				<ActionModal
					key={experience.id}
					trigger={
						<ExperienceCard
							src={experience.src}
							alt={experience.alt}
							date={experience.date}
							company={experience.company}
							position={experience.position}
							width={experience.width}
							onClick={() => setExperienceCardState(experience.modalType)}
						/>
					}
					logo={experience.src}
					title={experience.title}
					description={experience.position}
				>
					<ExperienceDetails
						experienceCardState={experienceCardState}
						experience={experience}
					/>
				</ActionModal>
			))}
		</>
	);
};
