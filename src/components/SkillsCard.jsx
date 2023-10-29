import { forwardRef } from "react";


export const SkillsCard = forwardRef(({className, children, ...rest}, ref) => {
    return (
        <div 
            className={`bg-color-blocker shadow-xl px-1 w-fit rounded box-shadow ${className}`}
            {...rest}
            ref={ref}
        >
            {children}
        </div>
    )
})