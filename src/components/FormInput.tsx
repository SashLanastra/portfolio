import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
	({ className = "", ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<input
				className={`rounded-sm focus:outline-hidden px-2 py-2 w-full mb-6 ${className}`}
				{...rest}
				ref={ref}
			/>
		);
	},
);

FormInput.displayName = "FormInput";
