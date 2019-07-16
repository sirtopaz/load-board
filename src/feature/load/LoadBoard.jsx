import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import LoadCard from './LoadCardContainer';
import './LoadBoard.scss';

class LoadBoard extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  renderCards() {
    const { idList } = this.props;

    return (
      <Card.Group className="load-board" centered>
        {idList.map(id => {
          return <LoadCard key={`key_${id}`} id={id} />;
        })}
      </Card.Group>
    );
  }

  render() {
    // TODO get this done

    return this.renderCards();
  }
}

LoadBoard.propTypes = {
  idList: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  onMount: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['table', 'card'])
};

export default LoadBoard;
