import { Question } from "~/components/Question";

const Veileder = () => {
  return (
    <div>
      <Question
        question='Hva er ditt favoritt øl?'
        alternatives={[
          { text: "Pils", correct: true },

          { text: "IPA", correct: true },

          { text: "Porter", correct: true },

          { text: "Hveteøl", correct: true },
        ]}
      />
    </div>
  );
};

export default Veileder;
