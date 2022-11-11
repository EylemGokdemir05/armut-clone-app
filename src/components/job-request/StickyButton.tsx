import { useHistory } from "react-router";
import { addAnswer, takeAnswerValue } from "../../helpers/answer";

const StickyButton = ({
  pageNumber,
  state,
  isLastPage,
  answers,
  setAnswers,
  question,
}: {
  pageNumber: any;
  state: any;
  isLastPage: any;
  answers: any;
  setAnswers: any;
  question: any;
}) => {
  const history = useHistory();
  const { typeId, label } = question;

  const handleClickContinue = () => {
    const answer = takeAnswerValue(typeId);
    addAnswer(setAnswers, answer, label);
    history.push(`/request/${Number(pageNumber) + 1}`, state);
  };

  const sendRequest = () => {
    const answer = takeAnswerValue(typeId);
    answers = [...answers, { question: label, answer }];
    history.push("/success", { answers });
  };

  return (
    <div className="sticky-button-section">
      {!isLastPage && (
        <button className="button" onClick={handleClickContinue}>
          <label className="large lh-20">DEVAM</label>
        </button>
      )}
      {isLastPage && (
        <button className="button" onClick={sendRequest}>
          <label className="large lh-20">TALEP GÖNDER</label>
        </button>
      )}
    </div>
  );
};

export default StickyButton;
