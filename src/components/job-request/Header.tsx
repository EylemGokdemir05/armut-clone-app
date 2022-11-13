import { useHistory, useParams } from "react-router";
import closeIcon from "../../assets/close-icon.png";
import prevIcon from "../../assets/left-icon.png";
interface ParamsState {
  pageNumber: any;
}

const Header = ({ name, widthOfProgress, goPrevious }: { name: any; widthOfProgress: any; goPrevious: any }) => {
  const history = useHistory();
  const params = useParams<ParamsState>();
  const pageNumber = params.pageNumber;

  const handleClose = () => {
    history.push("/");
  };

  return (
    <div className="header">
      <p className="small lh-18">{widthOfProgress < 66 ? name : `%${widthOfProgress} TAMAMLANDI`}</p>
      <div className="close-icon" onClick={handleClose}>
        <img src={closeIcon}></img>
      </div>
      {pageNumber > 1 && (
        <div className="prev-icon" onClick={goPrevious}>
          <img src={prevIcon}></img>
        </div>
      )}
    </div>
  );
};

export default Header;
