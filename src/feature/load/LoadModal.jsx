import React, { Component } from 'react';
import { Modal, Label, Icon, Dropdown, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { STATUS_TYPES, EQUIPTMENT_TYPES, STATUS_OPTIONS } from './constants';
import { formatCurrency } from './utils';
import './LoadModal.scss';

class LoadModal extends Component {
  handleStatusChange = (evt, data) => {
    const { onChange } = this.props;

    onChange({ status: data.value });
  };

  renderStatus() {
    const { status, locked } = this.props.item;

    return (
      <div className="details__status">
        <span> Status: </span>
        <Menu className="clickable" compact disabled={locked}>
          <Dropdown options={STATUS_OPTIONS} simple item value={status} onChange={this.handleStatusChange} />
        </Menu>
        {locked ? <Icon name="lock" /> : null}
      </div>
    );
  }

  render() {
    const { item, onClose } = this.props;
    const { origin, destination, value, equipment } = item;

    return (
      <Modal className="load-modal" onClose={onClose} size="tiny" open closeOnEscape closeOnDimmerClick>
        <Modal.Header className="load-modal__trip">
          <div className="trip__details">
            <span className="trip__origin">{origin}</span>
            <span>
              <Icon name="arrow right" />
            </span>
            <span className="visually-hidden"> To </span>
            <span className="trip__destination"> {destination}</span>
          </div>
          <Label className="trip__equiptment" circular size="massive">
            {equipment}
          </Label>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="load-modal__details">
              <div className="details__value">{formatCurrency(value)}</div>
              {this.renderStatus()}
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
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

LoadModal.propTypes = {
  id: PropTypes.string.isRequired,
  item: ITEM_PROP_TYPE.isRequired,
  onChange: PropTypes.func.isRequired,
  updatedAt: PropTypes.number
};

export default LoadModal;
