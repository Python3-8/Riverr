import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/home" component={MainPage} />
        <Redirect from="/" to="/home" exact />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
