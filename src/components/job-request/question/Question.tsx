import Values from "./Values";

const Question = ({ question }: { question: any }) => {
  const { typeId, label, values } = question;
  let text;
  switch (typeId) {
    case 5:
      text = "type 5";
      break;
    case 6:
      text = "type 6";
      break;
    case 8:
      text = "type 8";
      break;
    default:
      text = "default text";
  }
  return (
    <div className="question">
      <div className="question-label">
        <h1>{label}</h1>
      </div>
      <Values values={values}></Values>
      <div className="sticky-button-section">
        <button className="button">
          <label className="large lh-20">DEVAM</label>
        </button>
      </div>
    </div>
  );
};

export default Question;
