import { forwardRef } from 'react'
import PropTypes from "prop-types";

export const Title = forwardRef(({ className, children, ...rest }, ref) => {
    return (
        <div className='relative w-fit'>
            <div className='absolute left-4 top-2 rounded-md bg-color-blocker w-full h-12 sm:left-6 sm:top-3 sm:h-14'></div>
            <div
                className={`bg-slate-900 text-slate-50 p-2 text-2xl sm:text-4xl rounded-md relative ${className}`}
                {...rest}
                ref={ref}
            >
                
                {children}
            </div>
            
        </div>

    )
})

Title.displayName = 'Title';
Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
};
