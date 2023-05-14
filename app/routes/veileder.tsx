import { useState } from 'react';
import { Button } from '~/components/Button';
import StepBar from '~/components/StepBar';
import { Title } from '~/components/Title';

interface Question {
  question: string;
  answers: string[];
}

const questions: Question[] = [
  {
    question: 'Skal øllen være billigst mulig?',
    answers: ['Ja takk', 'Ikke så farlig'],
  },
  {
    question: 'Hvor mye penger har du?',
    answers: ['0-100', '100-200', '200-300', '300-400', '400-500', '500+'],
  },
  {
    question: 'Hvor mye tid har du?',
    answers: ['0-30', '30-60', '60-90', '90-120', '120+'],
  },
  { question: 'Vil du ha live musikk?', answers: ['Ja', 'Nei'] },
  { question: 'Vil du ha mat?', answers: ['Ja', 'Nei'] },
  { question: 'Vil du ha uteservering?', answers: ['Ja', 'Nei'] },
  { question: 'Vil du ha utsikt?', answers: ['Ja', 'Nei'] },
  { question: 'Vil du ha en rolig bar?', answers: ['Ja', 'Nei'] },
  { question: 'Vil du ha en bar med mange mennesker?', answers: ['Ja', 'Nei'] },
  { question: 'Vil du ha en bar med mange øltyper?', answers: ['Ja', 'Nei'] },
  { question: 'Skal den ligge i nærheten?', answers: ['Ja', 'Nei'] },
];

const Veileder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{
    [question: string]: number | undefined;
  }>({});

  const steps = questions.map((question) => question.question);
  const currentQuestion = questions[currentStep];

  const setStep = (step: number) => {
    if (step >= steps.length || step < 0) {
      return;
    }
    setCurrentStep(step);
  };

  return (
    <div className="w-full">
      <Title level="4">Veileder</Title>
      <StepBar
        currentStep={currentStep}
        steps={steps}
        setStep={setStep}
        className="mb-4 w-full"
      />
      <div className="mb-4">
        <Title level="5">{currentQuestion.question}</Title>
        <div
          className={`flex flex-row justify-around
        `}
        >
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={answer}
              color={
                answers[currentQuestion.question] === index ? 'green' : 'gray'
              }
              onClick={() => {
                setAnswers({ ...answers, [currentQuestion.question]: index });
                setStep(currentStep + 1);
              }}
            >
              {answer}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Veileder;
