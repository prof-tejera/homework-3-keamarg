import { Component } from 'react';
import "./Label.css"

class Label extends Component {

  render() {
    return <label 
            htmlFor={`${this.props.text}`}>
              {this.props.text}
            </label>
  }
}

export default Label;
