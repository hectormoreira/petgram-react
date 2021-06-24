import React from "react";
import { UserForm } from "../components/UserForm";
import Context from "../Context";

export const NotRegisterUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <UserForm title="Registrarse" />
          <UserForm title="Iniciar Sesión" />
        </>
      );
    }}
  </Context.Consumer>
);
