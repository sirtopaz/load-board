import React, { Component, Fragment } from "react";

import { LoadBoard } from "../../feature/load";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="app-header">HEADER</header>
        <section className="app-content">
          <LoadBoard />
        </section>
        <footer className="app-footer">Copyright &copy;2019</footer>
      </Fragment>
    );
  }
}

export default App;
