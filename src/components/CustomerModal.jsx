import React from 'react';
import { Button, Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomerModal extends React.Component {
  handleSubmit = () => {
    let refs = this.refs;
    let { customer } = this.props;
    let obj = {
      name: refs.name.value,
      address: refs.address.value,
      phone: refs.phone.value
    };
    if (customer) {
      obj.id = customer.id;
    }
    this.props.onSubmit(obj);
  }
  render() {
    let { pathBack } = this.props;
    let { customer } = this.props;
    if(!customer) {
      customer = {};
    }
    return (
      <div>
        <Modal.Body>
          <Grid>
            <Row>
              <Col xs={1}>Name</Col>
              <Col xs={2}>
                <input ref="name" defaultValue={customer.name}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>Address</Col>
              <Col xs={2}>
                <input ref="address" defaultValue={customer.address}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>Phone</Col>
              <Col xs={2}>
                <input ref="phone" defaultValue={customer.phone}></input>
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

export default CustomerModal;
