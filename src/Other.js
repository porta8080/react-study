import React, { Component } from 'react';

class Other extends Component {
  render() {
    return (
      <div>
        Other
        {this.props.children}
      </div>
    );
  }
}

export default Other;
