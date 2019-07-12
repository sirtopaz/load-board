import React, { Component, Fragment } from "react";

import { LoadBoard } from "./load";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Fragment>
      <header className="app-header">HEADER</header>
      <section>
        <LoadBoard />
      </section>
      <footer className="app-footer">Copyright 2019</footer>
    </Fragment>
  );
}

export default App;
