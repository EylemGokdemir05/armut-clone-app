import { useLocation, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import PriceDetail from "./PriceDetail";
import DiscountBanner from "./DiscountBanner";
import Question from "./question/Question";
import StickyButton from "./StickyButton";
import { addAnswer, takeAnswerValue, validateAnswer } from "../../helpers/answer";
import { checkIsLastPage, calculateWidthOfProgress } from "../../helpers/page";

interface ParamsState {
  pageNumber: any;
}
interface LocationState {
  service: any;
  questions: any;
}

type QAType = {
  question: any;
  answer: any;
};

const JobRequest = () => {
  const history = useHistory();
  const params = useParams<ParamsState>();
  const pageNumber = params.pageNumber;
  const location = useLocation<LocationState>();
  const { state } = location;

  let [answers, setAnswers] = useState([]);
  const [validate, setValidate] = useState({ isValid: false, message: "" });
  let answer;

  let [isContinueButton, setIsContinueButton] = useState(true);

  if (!state) {
    history.goBack();
  }

  const { service, questions } = state;
  const { name, price, discountRateText } = service;

  const question = questions.filter((question: any) => question.pageNumber == pageNumber)[0];

  const { typeId, label, required } = question;

  const widthOfProgress = calculateWidthOfProgress(pageNumber, state.questions.length);

  const isLastPage = checkIsLastPage(pageNumber, state.questions.length);

  useEffect(() => {
    if (validate.isValid) {
      answer = takeAnswerValue(typeId);
      if (isContinueButton) {
        addAnswer(setAnswers, label, answer);
        history.push(`/request/${Number(pageNumber) + 1}`, state);
      } else {
        history.push("/success", { answers });
      }
    }
  }, [validate]);

  const validationProcess = () => {
    answer = takeAnswerValue(typeId);
    const { isValid, message } = validateAnswer(answer, required);
    setValidate({ ...validate, isValid });
  };

  const handleClickContinue = () => {
    setIsContinueButton(true);
    validationProcess();
  };

  const goPrevious = () => {
    answers.pop();
    setValidate({ isValid: false, message: "" });
    history.push(`/request/${Number(pageNumber) - 1}`, state);
  };

  const sendRequest = () => {
    setIsContinueButton(false);
    validationProcess();
  };

  return (
    <>
      <div className="job-request">
        <Header name={name} goPrevious={goPrevious} widthOfProgress={widthOfProgress} />
        <ProgressBar widthOfProgress={widthOfProgress} />
        <PriceDetail price={price} />
        {discountRateText && pageNumber == 1 && <DiscountBanner discountRateText={discountRateText} />}
        <Question question={question} validate={validate} />
      </div>
      <StickyButton handleClickContinue={handleClickContinue} sendRequest={sendRequest} isLastPage={isLastPage} />
    </>
  );
};

export default JobRequest;
