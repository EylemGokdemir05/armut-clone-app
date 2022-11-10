import { useLocation, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import PriceDetail from "./PriceDetail";
import DiscountBanner from "./DiscountBanner";
import Question from "./question/Question";

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

  if (!state) {
    history.goBack();
  }
  console.log(pageNumber);
  console.log("questions: ", state.questions);
  const question = state.questions.filter((question: any) => question.pageNumber == pageNumber)[0];
  console.log(question);

  return (
    <div className="job-request">
      <Header name={name} state={state} />
      <ProgressBar />
      <PriceDetail price={price} />
      {discountRateText && <DiscountBanner discountRateText={discountRateText} />}
      <Question question={question} />
    </div>
  );
};

export default JobRequest;
