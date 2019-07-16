import React, { Component, Fragment } from 'react';

import { LoadBoard, LoadGrid } from '../../feature/load';
import './App.scss';

// TODO show modal

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'grid',
      selectedLoadId: null
    };
  }

  handleSelect = selectedLoadId => {
    this.setState({ selectedLoadId });
  };

  renderToolbar() {
    return <div className="content__toolbar">COMING SOON {this.state.selectedLoadId}</div>;
  }

  render() {
    return (
      <Fragment>
        <header className="app__header">Load Board</header>
        <section className="app__content">
          {this.renderToolbar()}

          {this.state.view === 'grid' ? <LoadGrid onSelect={this.handleSelect} /> : <LoadBoard />}
        </section>
        <footer className="app__footer">Copyright &copy;2019 Sean Gervais</footer>
      </Fragment>
    );
  }
}

export default App;
