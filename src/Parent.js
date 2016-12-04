import React, { Component } from 'react';

class Parent extends Component {
  render() {
    return (
      <div>
        <div>
        Pai
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Parent;
