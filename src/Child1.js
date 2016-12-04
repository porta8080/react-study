import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Child2 extends Component {

  componentWillMount(){
    if(this.props.params.someid){
      hashHistory.push('/child1');
    }
  }

  getId(){
    return this.propos.params.someid || null;
  }

  render() {
    return (
      <div>
        <div>
        Filho 1
        { this.getId.bind(this) }
        </div>
      </div>
    );
  }
}

export default Child2;
