import services from "../../data/services.json";
import ListItem from "./ListItem";

const List = () => {
  const List = services.map((service) => {
    console.log("list service: ", service);
    return <ListItem service={service} key={service.serviceId}></ListItem>;
  });

  return (
    <div className="home-page">
      <div className="service-list medium lh-22">
        <div className="title list-item">
          <p>servisler</p>
        </div>
        {List}
      </div>
    </div>
  );
};

export default List;
