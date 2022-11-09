import { useLocation } from "react-router-dom";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import PriceDetail from "./PriceDetail";
import DiscountBanner from "./DiscountBanner";

interface LocationState {
  service: any;
  questions: any;
}

const JobRequest = () => {
  const location = useLocation<LocationState>();
  const { state } = location;
  const service = state.service;
  const questions = state.questions;
  //   const { service, questions } = state;
  const { name, price, discountRateText } = service;
  return (
    <div className="job-request">
      <Header name={name} />
      <ProgressBar />
      <PriceDetail price={price} />
      {discountRateText && <DiscountBanner discountRateText={discountRateText} />}
    </div>
  );
};

export default JobRequest;
