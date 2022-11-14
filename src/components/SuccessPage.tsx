import successIcon from "../assets/success-icon.png";

const SuccessPage = () => {
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
