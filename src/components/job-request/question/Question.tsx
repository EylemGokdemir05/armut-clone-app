import Values from "./Values";

const Question = ({ question, validate }: { question: any; validate: any }) => {
  const { typeId, label, values, placeHolder } = question;

  return (
    <div className="question">
      <div className="question-label">
        <h1>{label}</h1>
      </div>
      <Values values={values} typeId={typeId} placeHolder={placeHolder} validate={validate}></Values>
    </div>
  );
};

export default Question;
