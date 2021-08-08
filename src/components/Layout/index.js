import React from "react";
import { Helmet } from "react-helmet";
import { Div, Title, Subtitle } from "./styles";

export const Layout = ({ children, title, subtitle, show = true }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && show && <Title>{title}</Title>}
        {subtitle && show && <Subtitle>{subtitle}</Subtitle>}

        {children}
      </Div>
    </>
  );
};
