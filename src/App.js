<<<<<<< HEAD
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Shop from './components/Pages/Shop/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
=======
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> 3f947dea5786794df3e18c8269857a692732ba97

function App() {
  return (
    <>
<<<<<<< HEAD
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact />
        <Route path='/login' exact component={Login}/>
        <Route path='/Register' exact component={Register}/>
        <Route path='/Shop' exact component={Shop}></Route>
      </Switch>
    </Router>
      
=======
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </Router>
>>>>>>> 3f947dea5786794df3e18c8269857a692732ba97
    </>
  );
}

export default App;
