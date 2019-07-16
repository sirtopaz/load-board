import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Table, Label, Icon } from 'semantic-ui-react';

import { formatCurrency } from './utils';
import './LoadGrid.scss';

class LoadGrid extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  handleStatusClick = evt => {
    this.props.onSelect(evt.target.dataset.itemId);
  };

  renderRows() {
    const { idList, items } = this.props;

    const content = idList.map(id => {
      const item = items[id];
      const { origin, destination, status, value, equipment, locked } = item;

      const statusIcon = locked ? 'lock' : 'edit';

      return (
        <Table.Row key={`item_${item.id}`}>
          <Table.Cell singleLine>
            <Header as="h3">
              <span className="trip__origin">{origin} </span>
              <span>
                <Icon name="arrow right" />
              </span>
              <span className="visually-hidden"> To </span>
              <span className="trip__destination">{destination}</span>
            </Header>
          </Table.Cell>
          <Table.Cell textAlign="right" className="load-grid__value">
            {formatCurrency(value)}
          </Table.Cell>
          <Table.Cell textAlign="center">
            <Label circular size="large">
              {equipment}
            </Label>
          </Table.Cell>
          <Table.Cell>
            <div>{status}</div>
          </Table.Cell>
          <Table.Cell textAlign="center">
            <Icon
              className="clickable"
              data-item-id={item.id}
              name={statusIcon}
              float="right"
              disabled={locked}
              onClick={this.handleStatusClick}
            />
          </Table.Cell>
        </Table.Row>
      );
    });

    return <Table.Body>{content}</Table.Body>;
  }

  render() {
    return (
      <Table className="load-grid" celled padded unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Origin / Destination</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Value</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Equiptment</Table.HeaderCell>
            <Table.HeaderCell colSpan={2}>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {this.renderRows()}
      </Table>
    );
  }
}

LoadGrid.propTypes = {
  idList: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onMount: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['table', 'card'])
};

export default LoadGrid;
