import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";
import { GlobalStyle } from "./GlobalStyles";

const App = () => (
    <>
    <GlobalStyle/>
    <ListOfCategories />
    <ListOfPhotoCard/>
    </>
);

export default App;
