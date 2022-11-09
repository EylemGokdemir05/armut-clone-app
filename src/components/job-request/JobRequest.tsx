import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import PriceDetail from "./PriceDetail";
import DiscountBanner from "./DiscountBanner";

interface LocationState {
  service: any;
  questions: any;
}

const JobRequest = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { state } = location;

  if (!state) {
    history.goBack();
  }
  const service = state.service;
  const { name, price, discountRateText } = service;
  return (
    <div className="job-request">
      <Header name={name} state={state} />
      <ProgressBar />
      <PriceDetail price={price} />
      {discountRateText && <DiscountBanner discountRateText={discountRateText} />}
    </div>
  );
};

export default JobRequest;
