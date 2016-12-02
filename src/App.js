import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Field from './Field';
import store from 'store2'

class App extends Component {

  componentDidMount(){
    store.set('somevar','somevalue');
    // window.localStorage.setItem('somevar','somevalue');
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
        {this.props.children}
      </Grid>
    );
  }
}

export default App;
