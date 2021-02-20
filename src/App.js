import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
