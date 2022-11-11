import Values from "./Values";

const Question = ({ question }: { question: any }) => {
  const { typeId, label, values, placeHolder } = question;
  console.log("Question: ", question);
  console.log("label: ", label);
  console.log("values: ", values);
  console.log("placeHolder: ", placeHolder);
  // let typeId: any;
  // question.forEach((item: any) => {
  //   typeId = item.typeId;
  // });

  // console.log("typeId: ", typeId);

  return (
    <div className="question">
      <div className="question-label">
        <h1>{label}</h1>
      </div>
      <Values typeId={typeId} values={values} placeHolder={placeHolder}></Values>
    </div>
  );
};

export default Question;
