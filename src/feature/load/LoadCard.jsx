import React, { Component } from 'react';
import { Card, Label, Divider, Icon, Dropdown, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { STATUS_TYPES, EQUIPTMENT_TYPES, STATUS_OPTIONS } from './constants';
import { formatCurrency } from './utils';
import './LoadCard.scss';

class LoadCard extends Component {
  handleStatusChange = (evt, data) => {
    const { onChange } = this.props;

    onChange({ status: data.value });
  };

  render() {
    const { item } = this.props;
    const { origin, destination, status, value, equipment, locked } = item;

    return (
      <Card className="load-card">
        <Card.Content>
          <Card.Header className="load-card__trip">
            <span className="trip__origin">{origin}</span>
            <span> to </span>
            <span className="trip__destination"> {destination}</span>
          </Card.Header>
          <Divider />
          <Card.Meta className="load-card__details">
            <div className="details__value">{formatCurrency(value)}</div>
            <Label className="details__equiptment" circular size="massive">
              {equipment}
            </Label>
          </Card.Meta>
          <Card.Description> </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="load-card__status">
            <span> Status: </span>
            <Menu compact>
              <Dropdown
                className="clickable"
                options={STATUS_OPTIONS}
                simple
                item
                value={status}
                onChange={this.handleStatusChange}
                disabled={locked}
              />
            </Menu>{' '}
            {locked ? <Icon name="lock" /> : null}
          </div>
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
