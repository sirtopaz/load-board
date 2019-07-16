import React, { Component } from 'react';
import { Card, Label, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { STATUS_TYPES, EQUIPTMENT_TYPES } from './constants';
import { formatPrice } from './utils';
import './LoadCard.scss';

class LoadCard extends Component {
  handleStatusChange = value => {
    const { onChange } = this.props;

    onChange({ status: value });
  };

  render() {
    const { item } = this.props;
    const { origin, destination, status, value, equipment } = item;

    return (
      <Card className="load-card">
        <Card.Content>
          <Label circular size="large" floating>
            {equipment}
          </Label>
          <Card.Header className="load-card__trip">
            <span className="trip__origin">{origin}</span>
            <span> to </span>
            <span className="trip__destination"> {destination}</span>
          </Card.Header>
          <Divider />
          <Card.Meta className="load-card__price">{formatPrice(value)}</Card.Meta>
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
  value: PropTypes.number.isRequired,
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
