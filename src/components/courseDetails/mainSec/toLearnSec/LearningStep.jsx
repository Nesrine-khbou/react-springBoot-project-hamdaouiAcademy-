import React from 'react';

const LearningStep = ({ description }) => {
    return (
        <div className="learning-step">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <p>{description}</p>
        </div>
    );
};

export default LearningStep;
