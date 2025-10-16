import { forwardRef } from "react";
import PropTypes from "prop-types";


export const FormInput = forwardRef(({className, ...rest}, ref) => {
    return (
        <input
            className={`rounded-sm focus:outline-hidden px-2 py-2 w-full mb-6 ${className}`}
            {...rest}
            ref={ref}
        />
    );
});

FormInput.displayName = 'FormInput';

// Define prop types for the component.
FormInput.propTypes = {
    className: PropTypes.string,
    // PropTypes for the rest of the possible props.
    // You can add more specific prop types as needed.
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    // Additional props like style and id
    style: PropTypes.object,
    id: PropTypes.string,
};

// Define default props for the component.
FormInput.defaultProps = {
    className: "",
    type: "text",
    value: "",
    onChange: null,
    placeholder: "",
    name: "",
    disabled: false,
    style: {},
    id: "",
};