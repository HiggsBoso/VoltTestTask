import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class Customer extends React.Component {
  render() {
    var {id, name, numInList, address, phone} = this.props;
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={1}>{numInList}</Col>
            <Col lg={2}>{name}</Col>
            <Col lg={2}>{address}</Col>
            <Col lg={2}>{phone}</Col>
            <Col lg={1}><Link to={`/customers/edit/${id}`}>edit</Link></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Customer;
