import React from "react";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Router } from "@reach/router";
import { Detail } from "./pages/Detail";
import {Navbar} from './components/NavBar';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path='/detail/:detailId' />
      </Router>
      <Navbar/>
    </>
  );
};

export default App;
