import { useHistory } from "react-router-dom";
import questions399 from "../../data/399-questions.json";
import questions262 from "../../data/262-questions.json";

const ListItem = ({ service }: { service: any }) => {
  const history = useHistory();
  const { name, serviceId } = service;
  let questions: any;

  switch (serviceId) {
    case 399:
      questions = questions399;
      break;
    case 262:
      questions = questions262;
      break;
    default:
      questions = [];
  }

  const handleClickService = () => {
    history.push("/request/1", { service, questions });
  };

  return (
    <div className="list-item" onClick={handleClickService}>
      <p>{name}</p>
    </div>
  );
};

export default ListItem;
