import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return <div className="mainPanel">{this.props.children}</div>;
  }
}

export default Panel;
