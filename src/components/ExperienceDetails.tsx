import { type Experience, ExperienceCardOpen } from "@/lib";

export const ExperienceDetails = ({
	experienceCardState,
	experience,
}: {
	experienceCardState: ExperienceCardOpen;
	experience: Experience;
}) => {
	const detailsMap: Record<ExperienceCardOpen, React.ReactNode> = {
		[ExperienceCardOpen.WAMLY]: (
			<div>
				<h2>Wamly</h2>
				<p>
					Wamly is a software company that provides software solutions to
					businesses.
				</p>
			</div>
		),
		[ExperienceCardOpen.ESIMPLIFIED]: <div>eSimplified</div>,
		[ExperienceCardOpen.OLDMUTUAL]: <div>Old Mutual</div>,
		[ExperienceCardOpen.URBANESOFTWARE]: <div>Urbane Software</div>,
		[ExperienceCardOpen.NONE]: null,
	};

	return detailsMap[experienceCardState];
};
