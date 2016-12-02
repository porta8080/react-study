import React, { Component } from 'react';
import store from 'store2'

class About extends Component {
  componentDidMount(){
    alert(store.get('somevar'));
  }

  render() {
    return (
      <div>
        About page
        {this.props.children}
      </div>
    );
  }
}

export default About;
