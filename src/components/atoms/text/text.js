import React from 'react';
import "./style.css"

const Text = ({ content, type}) => {
    return (
        <p className={`text-${type}`}>
            {content}
        </p>
    );
};

export default Text;