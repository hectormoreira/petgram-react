import React, { useContext } from "react";
import { UserForm } from "../components/UserForm";
import { Context } from "../Context";

import { useRegisterMutation } from "../container/RegisterMutation";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <Register activateAuth={activateAuth} />
      <Login activateAuth={activateAuth} />
    </>
  );
};

const Register = ({ activateAuth }) => {
  const { register, loading, error } = useRegisterMutation();
  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    register({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };
  const errorMsg = error && "El usuario ya existe o hay algún error";

  return (
    <UserForm
      disabled={loading}
      error={errorMsg}
      onSubmit={onSubmit}
      title="Registrarse"
    />
  );
};

const Login = ({ activateAuth }) => {
  const { login, loading, error } = useLoginMutation();
  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    login({ variables }).then(({ data }) => {
      activateAuth(data.login);
    });
  };
  const errorMsg =
    error && "La contraseña no es correcta o el usuario no existe";

  return (
    <UserForm
      disabled={loading}
      error={errorMsg}
      onSubmit={onSubmit}
      title="Iniciar sesión"
    />
  );
};
