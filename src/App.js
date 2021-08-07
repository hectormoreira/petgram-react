import React, { useContext, Suspense } from "react";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Redirect, Router } from "@reach/router";
import { Detail } from "./pages/Detail";
// import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { Navbar } from "./components/NavBar";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div/>}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}

        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <Navbar />
    </Suspense>
  );
};
