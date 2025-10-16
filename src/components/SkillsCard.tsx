import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface SkillsCardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const SkillsCard = forwardRef<HTMLDivElement, SkillsCardProps>(({className = '', children, ...rest}, ref) => {
    return (
        <div 
            className={`bg-color-blocker shadow-xl px-1 w-fit rounded-sm box-shadow ${className}`}
            {...rest}
            ref={ref}
        >
            {children}
        </div>
    )
})

SkillsCard.displayName = 'SkillsCard';