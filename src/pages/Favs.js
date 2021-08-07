import React from "react";
import { FavsWithQuery } from "../container/FavsWithQuery";
import { Layout } from "../components/Layout";

export default () => {
  return (
    <Layout title="Tus favoritos" subtitle="Aquí puedes encontrar tus favoritos">
      <FavsWithQuery />
    </Layout>
  );
};

