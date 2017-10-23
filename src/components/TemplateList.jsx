import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class TemplateList extends React.Component {
  render () {
    var {items} = this.props;
    const ComponentType = this.props.componentType;

    var renderItems = () => {
      if (items.length === 0) {
        return (
          <Grid>
            <Row>
              <Col lg={4}> No items! </Col>
            </Row>
          </Grid>
        );
      }

      return items.map((item, index) => {
        return <ComponentType key={item.id} numInList={index + 1} {...item}/>
      });
    };

    return (
      <div>
        {renderItems()}
      </div>
    );
  }
}

export default TemplateList;
