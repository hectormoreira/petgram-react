import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCard";
import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => (
    <>
    <GlobalStyle/>
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2}/>
    </>
);

export default App;
