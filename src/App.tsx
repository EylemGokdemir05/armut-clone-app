import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobRequest from "./components/job-request/JobRequest";
import ServiceList from "./components/service/List";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ServiceList} />
        <Route path="/request/:pageNumber" component={JobRequest}></Route>
      </Switch>
    </Router>
  );
}

export default App;
