import React from 'react';
import cl from "./Button.module.css"

const Button = (props) => {
    const {className} = props
    return (
        <button {...props} className={`${className} ${cl.Button}`}></button>
    );
};

export default Button;
