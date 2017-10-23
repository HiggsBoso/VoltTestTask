import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ListHeader extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={1}><h4>{this.props.title}</h4></Col>
            <Col lg={2}><Link className="btn btn-default" to={this.props.path}>Create</Link></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ListHeader;
