import React, { forwardRef } from 'react'

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
