import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return <button className="Default-button">{this.props.text}</button>;
  }
}

export default Button;
