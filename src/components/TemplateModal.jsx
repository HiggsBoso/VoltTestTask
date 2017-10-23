import React from 'react';
import { Button, Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TemplateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      showModal: false
    });
  }
  open() {
    this.setState({
      showModal: true
    })
  }
  handleConfirm = () => {
    this.props.onConfirm();
  }

  render () {
    let { title, path } = this.props;
    return (
      <div>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default TemplateModal;


//
// <Link className="btn btn-default" onClick={this.handleConfirm} to={path}>OK</Link>
// <Link className="btn btn-default" to={path}>Close</Link>
