import React from 'react';
import Text from '../text/text'
import "./style.css"

const Button = ({ name, type, variant }) => {
    return (
        <button className={`btn btn-${variant}`} type={type}>
            <Text content={name} type="btn"/>
        </button>
    );
};

export default Button;