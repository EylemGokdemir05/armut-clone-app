import { Link } from "react-router-dom";
import questions399 from "../../data/399-questions.json";
import questions262 from "../../data/262-questions.json";

const ListItem = ({ service }: { service: any }) => {
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

  return (
    <Link
      to={{
        pathname: `/request/1`,
        state: { service, questions },
      }}
    >
      <div className="list-item">
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default ListItem;
