import React from 'react';

export const SubmitButton = ({ stepNo, onNextStep, onBackStep, buttonText = "Next", showBackButton = true }) => {
  return (
    <div className="submit-button-container">
      {showBackButton && (
        <button type="button" onClick={onBackStep} className="back-button">
          Go Back
        </button>
      )}
      <button type="button" onClick={onNextStep} className="next-button">
        {buttonText}
      </button>
    </div>
  );
};
