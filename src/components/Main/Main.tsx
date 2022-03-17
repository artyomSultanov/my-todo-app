import React from "react";
import Header from "./Header";
import Body from "./Body";
import './Main.sass'

const Main = () => {
  return (
    <section className="tasks">
      <Header />
      <Body />
    </section>
  );
};

export default Main;
