import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Companies from "./components/Companies/Companies";
import DetailsCompany from "./components/Companies/DetailsCompany/DetailsCompany";


const App = () => {
  
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/empresas" exact component={Companies}/>
          <Route path="/empresas/:nombre_empresa" component={DetailsCompany}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
