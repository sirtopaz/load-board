import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { STATUS_TYPES, EQUIPTMENT_TYPES } from './constants';

class LoadCard extends Component {
  handleStatusChange = value => {
    const { onChange } = this.props;

    onChange({ status: value });
  };

  render() {
    const { item } = this.props;
    const { origin, destination, status, value } = item;

    return (
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src="/images/avatar/large/steve.jpg" />
          <Card.Header>
            <span>{origin}</span> to <span>{destination}</span>
          </Card.Header>
          <Card.Meta> </Card.Meta>
          <Card.Description> </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>status: {status}</div>
        </Card.Content>
      </Card>
    );
  }
}

const ITEM_PROP_TYPE = PropTypes.shape({
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropType.number.isRequired,
  equipment: PropTypes.oneOf(EQUIPTMENT_TYPES).isRequired,
  locked: PropTypes.bool,
  status: PropTypes.oneOf(STATUS_TYPES).isRequired
});

LoadCard.propTypes = {
  id: PropTypes.string.isRequired,
  item: ITEM_PROP_TYPE.isRequired,
  onChange: PropTypes.func.isRequired,
  updatedAt: PropTypes.number
};

export default LoadCard;
