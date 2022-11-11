import { useLocation, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import PriceDetail from "./PriceDetail";
import DiscountBanner from "./DiscountBanner";
import Question from "./question/Question";
import StickyButton from "./StickyButton";
import { checkIsLastPage, calculateWidthOfProgress } from "../../helpers/page";

interface ParamsState {
  pageNumber: any;
}
interface LocationState {
  service: any;
  questions: any;
}

const JobRequest = () => {
  const history = useHistory();
  const params = useParams<ParamsState>();
  const pageNumber = params.pageNumber;
  const location = useLocation<LocationState>();
  const { state } = location;
  const service = state.service;
  const { name, price, discountRateText } = service;
  const [answers, setAnswers] = useState([]);

  if (!state) {
    history.goBack();
  }

  console.log(pageNumber);
  console.log("questions: ", state.questions);
  const question = state.questions.filter((question: any) => question.pageNumber == pageNumber)[0];
  console.log("question last: ", question);

  const widthOfProgress = calculateWidthOfProgress(pageNumber, state.questions.length);

  console.log("job answers: ", answers);

  const isLastPage = checkIsLastPage(pageNumber, state.questions.length);

  useEffect(() => {
    console.log("JobRequest useEffect!!!");
  });

  return (
    <>
      <div className="job-request">
        <Header name={name} state={state} widthOfProgress={widthOfProgress} />
        <ProgressBar widthOfProgress={widthOfProgress} />
        <PriceDetail price={price} />
        {discountRateText && pageNumber == 1 && <DiscountBanner discountRateText={discountRateText} />}
        <Question question={question} />
      </div>
      <StickyButton
        pageNumber={pageNumber}
        state={state}
        isLastPage={isLastPage}
        answers={answers}
        setAnswers={setAnswers}
        question={question}
      />
    </>
  );
};

export default JobRequest;
