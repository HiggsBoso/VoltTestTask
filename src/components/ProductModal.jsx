import React from 'react';
import { Button, Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProductModal extends React.Component {
  handleSubmit = () => {
    let refs = this.refs;
    let { product } = this.props;
    let obj = {
      name: refs.name.value,
      price: refs.price.value
    };
    if (product) {
      obj.id = product.id;
    }

    this.props.onSubmit(obj);
  }
  render() {
    let { pathBack } = this.props;
    let { product } = this.props;
    if(!product) {
      product = {};
    }
    return (
      <div>
        <Modal.Body>
          <Grid>
            <Row>
              <Col xs={1}>Name</Col>
              <Col xs={2}>
                <input ref="name" defaultValue={product.name}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>Price</Col>
              <Col xs={2}>
                <input ref="price" defaultValue={product.price}></input>
              </Col>
            </Row>
          </Grid>
        </Modal.Body>
      <Modal.Footer>
        <Link className="btn btn-default" onClick={this.handleSubmit} to={pathBack}>Confirm</Link>
        <Link className="btn btn-default" to={pathBack}>Close</Link>
      </Modal.Footer>
      </div>
    );
  }
}

export default ProductModal;
