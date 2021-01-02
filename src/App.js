import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Shop from "./components/Pages/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Pages/Checkout";
import Profile from "./components/Pages/Profile";

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
          <Route path="/checkOut" exact component={Checkout} />
          <Route path="/Profile" exact component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
