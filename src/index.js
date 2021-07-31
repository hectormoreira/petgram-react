import React from "react";
import ReactDOM from "react-dom";
import {ApolloProvider} from "@apollo/client";
import Context from "./Context";
import { App } from "./App";
import client from './config/apollo'

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
