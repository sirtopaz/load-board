import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import { LoadBoard, LoadGrid, LoadModal } from '../../feature/load';
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

  handleItemClick = (evt, data) => {
    this.setState({
      view: data.name,
      selectedLoadId: null
    });
  };

  handleModalClose = () => {
    this.setState({ selectedLoadId: null });
  };

  renderToolbar() {
    const { view } = this.state;

    return (
      <div className="content__toolbar">
        <Menu icon compact>
          <Menu.Item name="grid" active={view === 'grid'} onClick={this.handleItemClick}>
            <Icon name="columns" />
          </Menu.Item>
          <Menu.Item name="board" active={view === 'board'} onClick={this.handleItemClick}>
            <Icon name="grid layout" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }

  renderModal() {
    const { selectedLoadId } = this.state;

    if (!selectedLoadId) {
      return null;
    }

    return <LoadModal id={selectedLoadId} onClose={this.handleModalClose} />;
  }

  render() {
    return (
      <Fragment>
        <header className="app__header">Welcome to Your Load Board</header>
        <section className="app__content">
          {this.renderModal()}
          {this.renderToolbar()}
          {this.state.view === 'grid' ? <LoadGrid onSelect={this.handleSelect} /> : <LoadBoard />}
        </section>
        <footer className="app__footer">Copyright &copy;2019 Sean Gervais</footer>
      </Fragment>
    );
  }
}

export default App;
