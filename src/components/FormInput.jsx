import { forwardRef } from "react";


export const FormInput = forwardRef(({className, ...rest}, ref) => {
    return (
        <input
            className={`rounded focus:outline-none px-2 py-2 w-full mb-6 ${className}`}
            {...rest}
            ref={ref}
        />
    )
})