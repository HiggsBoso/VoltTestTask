import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    var {id, numInList, name, price} = this.props;
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={1}>{numInList}</Col>
            <Col lg={2}>{name}</Col>
            <Col lg={2}>{price}</Col>
            <Col lg={1}><Link to={`/products/edit/${id}`}>edit</Link></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Product;
