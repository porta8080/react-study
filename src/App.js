import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Field from './Field';

class App extends Component {

  componentDidMount(){
    console.log(this.refs.name.say('Houve um erro'))
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col lg={12}>
            <Field ref="name" label="Nome">
              <span className="text-muted">Conteúdo do filho de Field</span>
            </Field>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
