// src/components/Button/Button.js
import React from 'react';
import './Button.css';

const Button = ({ type = 'button', onClick, children, variant = 'primary' }) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`button button-${variant}`}
        >
            {children}
        </button>
    );
};

export default Button;