const StickyButton = ({
  handleClickContinue,
  sendRequest,
  isLastPage,
}: {
  handleClickContinue: any;
  sendRequest: any;
  isLastPage: any;
}) => {
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
