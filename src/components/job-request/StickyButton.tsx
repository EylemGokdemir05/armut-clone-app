import { useHistory } from "react-router";

const StickyButton = ({ pageNumber, state, isLastPage }: { pageNumber: any; state: any; isLastPage: any }) => {
  const history = useHistory();

  const handleClickContinue = () => {
    history.push(`/request/${Number(pageNumber) + 1}`, state);
  };

  const sendRequest = () => {
    history.push("/success");
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
