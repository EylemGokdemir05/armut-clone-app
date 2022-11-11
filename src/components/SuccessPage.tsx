import successIcon from "../assets/success-icon.png";
import { useLocation } from "react-router";

interface LocationState {
  answers: any;
}

const SuccessPage = () => {
  //   const location = useLocation<LocationState>();
  //   console.log("location: ", location);
  //   //   declare const answers: any;
  //   //   answers = location.state;
  //   const { answers } = location.state;
  //   //const answers: { answers: undefined | null | {} | { type: unknown } } = location.state;
  //   console.log(answers);

  return (
    <div className="success-page">
      <div className="image-text-section">
        <img src={successIcon}></img>
        <h1>Talebini Aldık!</h1>
      </div>
    </div>
  );
};

export default SuccessPage;
