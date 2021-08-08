import React, { useContext } from "react";
import { Button } from "../components/SubmitButton/styles";
import { Context } from "../Context";
import { Layout } from "../components/Layout";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Layout title="Cerrar sesión">
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </Layout>
  );
};
