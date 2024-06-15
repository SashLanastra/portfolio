import { forwardRef } from 'react'
import PropTypes from "prop-types";

export const ProjectCard = forwardRef(({ className, children, ...rest }, ref) => {
    return (
        <div 
            className={`flex flex-col items-center gap-2 px-3 py-2 bg-black-75 max-w-xl rounded-md ${className}`}
            {...rest}
            ref={ref}
        >
            {children}
        </div>
    )
})

ProjectCard.displayName = 'ProjectCard';
ProjectCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
};
