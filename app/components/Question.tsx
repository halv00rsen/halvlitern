import { useState } from "react";
import { Button } from "./Button";
import { Title } from "./Title";

interface Alternative {
  text: string;
  correct: boolean;
}

interface Props {
  question: string;
  alternatives: Alternative[];
}

export const Question = ({ alternatives, question }: Props) => {
  const [chosenAlternatives, setChosenAlternative] = useState<Alternative[]>(
    []
  );

  const [isAnswered, setIsAnswered] = useState(false);

  const isMultipleChoice =
    alternatives.filter((alternative) => alternative.correct).length > 1;

  const toggleAlternative = (alternative: Alternative) => {
    if (isMultipleChoice) {
      if (chosenAlternatives.includes(alternative)) {
        setChosenAlternative(
          chosenAlternatives.filter((a) => a !== alternative)
        );
      } else {
        setChosenAlternative([...chosenAlternatives, alternative]);
      }
    } else {
      setChosenAlternative([alternative]);
    }
  };

  return (
    <div className='grid gap-8 grid-cols-1'>
      <Title level='4'>{question}</Title>
      <div className='grid gap-4 grid-cols-2'>
        {alternatives.map((alternative) => (
          <Button
            key={alternative.text}
            onClick={() => toggleAlternative(alternative)}
            color={chosenAlternatives.includes(alternative) ? "green" : "gray"}
            disabled={isAnswered}
          >
            {alternative.text}
          </Button>
        ))}
      </div>
      <Button
        disabled={chosenAlternatives.length === 0 || isAnswered}
        onClick={() => setIsAnswered(true)}
      >
        Svar
      </Button>
      {isAnswered && (
        <>
          {chosenAlternatives.every((alternative) => alternative.correct) ? (
            <div className='text-green-500'>Riktig!</div>
          ) : (
            <div className='text-red-500'>Feil!</div>
          )}
          <Button color='blue'>Neste</Button>
        </>
      )}
    </div>
  );
};
