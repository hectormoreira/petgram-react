import React, { useContext } from "react";
import { Button } from "../components/SubmitButton/styles";
import { Context } from "../Context";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </>
  );
};
