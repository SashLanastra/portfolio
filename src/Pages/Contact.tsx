import emailjs from "@emailjs/browser";
import {
	type ChangeEvent,
	type FormEvent,
	type RefObject,
	useEffect,
	useRef,
	useState,
} from "react";
import { FormInput } from "../components/FormInput";
import { Title } from "../components/Title";

interface ContactProps {
	contact?: RefObject<HTMLElement>;
}

export const Contact = ({ contact }: ContactProps) => {
	const [formInfo, setFormInfo] = useState({
		userName: "",
		userEmail: "",
		message: "",
	});
	const [contactInfoTab, setContactInfoTab] = useState(true);
	const [contactFormTab, setContactFormTab] = useState(false);

	const form = useRef<HTMLFormElement>(null);

	useEffect(() => {
		document.title = "| Contact Me";
	}, []);

	const handleContactInfoTab = () => {
		setContactInfoTab(true);
		setContactFormTab(false);
	};

	const handleContactFormTab = () => {
		setContactInfoTab(false);
		setContactFormTab(true);
	};
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormInfo((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) return;

		emailjs
			.sendForm(
				"service_ggi930a",
				"template_9ppnaid",
				form.current,
				"9Z71Uj0bhOpgP_pql",
			)
			.then(
				(result) => {
					console.log(result.text);
					window.location.reload();
					alert("Message Sent!");

					formInfo.userName = "";
					formInfo.userEmail = "";
					formInfo.message = "";
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	return (
		<section
			ref={contact}
			className="w-full flex flex-col gap-8 lg:gap-14 items-center pb-8 pt-28 lg:pt-44 min-h-screen px-4"
		>
			<Title>Contact Me</Title>
			<div className="w-full flex flex-col items-center">
				<div className="flex justify-center gap-4">
					<button
						className={`text-slate-50 font-semibold px-4 py-2 rounded-t-md hover:bg-slate-500 focus:bg-black-75 border-b-0 ${
							contactInfoTab
								? "bg-black-75 border-x-2 border-t-2 border-color-blocker"
								: "bg-black-25"
						}`}
						onClick={handleContactInfoTab}
						type="button"
					>
						Direct Contact
					</button>
					<button
						className={`text-slate-50 font-semibold px-4 py-2 rounded-t-md hover:bg-slate-500 focus:bg-black-75 border-b-0 ${
							contactFormTab
								? "bg-black-75 border-x-2 border-t-2 border-color-blocker"
								: "bg-black-25"
						}`}
						onClick={handleContactFormTab}
						type="button"
					>
						Contact Form
					</button>
				</div>

				{contactInfoTab && (
					<div className="flex flex-col rounded-lg py-6 px-6 gap-8 items-center w-full max-w-sm lg:max-w-xl bg-black-75 text-slate-200">
						<a
							href="tel:+27813853172"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						>
							<button
								className="bg-secondary rounded-lg px-4 py-4 w-full flex items-center justify-center gap-6"
								type="button"
							>
								Call Me
								<img
									src="https://img.icons8.com/doodle/48/ringer-volume--v1.png"
									alt="phone"
									className="w-10 h-10"
								/>
							</button>
						</a>

						<a
							href="mailto:mphomankanda95@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						>
							<button
								className="bg-red-700 rounded-lg px-4 py-4 w-full flex items-center justify-center gap-6"
								type="button"
							>
								Email Me
								<img
									src="https://img.icons8.com/matisse/100/email.png"
									alt="email"
									className="w-10 h-10"
								/>
							</button>
						</a>
						<a
							href="https://www.linkedin.com/in/daniel-mankanda-b394681b2"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						>
							<button
								className="bg-blue-500 rounded-lg px-4 py-4 w-full flex items-center justify-center gap-6"
								type="button"
							>
								Visit My LinkedIn
								<img
									src="https://img.icons8.com/doodle/48/linkedin--v2.png"
									alt="linkedin"
									className="w-10 h-10"
								/>
							</button>
						</a>

						<a
							href="https://api.whatsapp.com/send?phone=27813853172"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						>
							<button
								className="bg-green-600 rounded-lg px-4 py-4 w-full flex items-center justify-center gap-6"
								type="button"
							>
								WhatsApp Me
								<img
									src="https://img.icons8.com/doodle/48/whatsapp.png"
									alt="whatsapp"
									className="w-10 h-10"
								/>
							</button>
						</a>
					</div>
				)}

				{contactFormTab && (
					<div className="flex flex-col rounded-lg p-4 gap-4 w-full items-center max-w-xl bg-black-75">
						<div className="flex flex-col sm:flex-row w-full px-4 text-slate-200">
							{/* <div className="flex flex-col items-center sm:border-r sm:border-slate-400 sm:w-1/3">
                <p className="sm:text-lg">Contact Number</p>
                <p className="text-md">+27 813853172</p>
              </div>
              <div className="flex flex-col items-center sm:w-2/3">
                <p className="sm:text-lg">Email</p>
                <p className="">danielmpho.dev@gmail.com</p>
              </div> */}
						</div>
						<form className="w-full px-4" onSubmit={sendEmail} ref={form}>
							<FormInput
								type="text"
								placeholder="Enter Your Name . . ."
								name="userName"
								value={formInfo.userName}
								onChange={handleChange}
							/>
							<FormInput
								type="email"
								placeholder="Enter Your Email . . ."
								name="userEmail"
								value={formInfo.userEmail}
								onChange={handleChange}
							/>
							<textarea
								name="message"
								rows={10}
								placeholder="Write A Message . . ."
								className="w-full rounded-sm p-2 focus:outline-hidden"
								value={formInfo.message}
								onChange={handleChange}
							/>
							<button
								className="bg-primary text-slate-50 font-semibold px-4 py-2 rounded-md hover:bg-slate-500 focus:bg-slate-400 mt-2"
								type="submit"
							>
								Send
							</button>
						</form>
					</div>
				)}
			</div>
		</section>
	);
};
