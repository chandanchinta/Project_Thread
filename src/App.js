import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Shop from "./components/Pages/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Shop" exact component={Shop} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
