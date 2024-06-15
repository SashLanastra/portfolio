import { forwardRef } from "react";
import PropTypes from "prop-types";


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

SkillsCard.displayName = 'SkillsCard';
SkillsCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
};