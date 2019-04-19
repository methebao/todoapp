import React from "react";
import Helmet from "react-helmet";

import Site from "./layout/Site";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

const Layout = () => {
  return (
    <Site>
      <Helmet
        title="Todo-React"
        meta={[
          {
            name: "description",
            content: "This todo project for react-training at Sun*"
          },
          { name: "keywords", content: "React, Todo react, sun*" }
        ]}
        script={[
          { src: "https://use.fontawesome.com/releases/v5.8.1/js/all.js" }
        ]}
        link={[
          {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          }
        ]}
      />
      <Header />
      <Content>
        <Router />
      </Content>
      <Footer />
    </Site>
  );
};

export default Layout;
