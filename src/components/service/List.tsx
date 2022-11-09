import services from "../../data/services.json";
import ListItem from "./ListItem";

const List = () => {
  console.log(services);
  const List = services.map((service) => {
    return <ListItem service={service} key={service.serviceId}></ListItem>;
  });
  return (
    <div className="service-list medium l-22">
      <div className="title list-item">
        <p>servisler</p>
      </div>
      <div className="list">{List}</div>
    </div>
  );
};

export default List;
