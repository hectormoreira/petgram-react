import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";
import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => (
    <>
    <GlobalStyle/>
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCard/>
    </>
);

export default App;
