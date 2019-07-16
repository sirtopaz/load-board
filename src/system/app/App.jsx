import React, { Component, Fragment } from 'react';

import { LoadBoard } from '../../feature/load';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="app__header">Load Board</header>
        <section className="app__content">
          <LoadBoard />
        </section>
        <footer className="app__footer">Copyright &copy;2019 Sean Gervais</footer>
      </Fragment>
    );
  }
}

export default App;
