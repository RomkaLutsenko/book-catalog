import React from 'react';
import cl from "./Button.module.css"

const Button = ({children, ...props}) => {
    const {className} = props
    return (
        <button {...props} className={`${className} ${cl.Button}`}>
            {children}
        </button>
    );
};

export default Button;
