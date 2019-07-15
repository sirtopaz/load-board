import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

import { STATUS_TYPES, EQUIPTMENT_TYPES } from "./constants";

class LoadCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/steve.jpg"
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

LoadCard.propTypes = {
  id: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropType.number.isRequired,
  equipment: PropTypes.oneOf(EQUIPTMENT_TYPES).isRequired,
  locked: PropTypes.bool,
  status: PropTypes.oneOf(STATUS_TYPES).isRequired
};

export default LoadCard;
