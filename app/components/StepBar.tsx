import React from 'react';

interface Props {
  currentStep: number;
  steps: string[];
  setStep: (step: number) => void;
  className?: string;
}

const StepBar = ({ currentStep, steps, setStep, className = '' }: Props) => {
  return (
    <div
      className={`
      relative flex w-full flex-row justify-between
      before:absolute before:left-0 before:top-1/2 before:-z-10 before:h-3 before:w-full before:-translate-y-1/2
      before:transform before:bg-slate-300 before:content-['']
      ${className}`}
    >
      <div
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        className="absolute left-0 top-1/2 -z-10 h-3 w-0
          -translate-y-1/2 transform bg-green-300
          transition-all duration-500 ease-in-out"
      ></div>
      {steps.map((step, index) => (
        <React.Fragment key={`${step}-${index}`}>
          <button
            className={`flex h-9 w-9
              items-center justify-center rounded-full font-mono
              ${
                currentStep >= index
                  ? 'transition-all delay-[350ms]'
                  : 'transition-none'
              }
              ${
                currentStep >= index
                  ? 'bg-green-300'
                  : 'cursor-not-allowed bg-slate-300'
              }`}
            onClick={() => setStep(index)}
          >
            {index + 1}
          </button>
          {index !== steps.length - 1 && (
            <div
              className={`h-2  ${
                currentStep > index ? 'bg-green-300' : 'bg-slate-300'
              }
          `}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepBar;
