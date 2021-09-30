import { Component } from 'react';
import './Button.css';

class Button extends Component {
  


  render() {
    const {text, handleClick, buttonColor, buttonStyling} = this.props;

    return <button 
            className={`${buttonStyling} ${buttonColor}`} 
            onMouseOver={()=>(console.log(this.props.text, "button was moused over."))}
            onClick={()=>{console.log(this.props.text, "button was clicked.");
            handleClick(text)}}>
            {this.props.text} 
          </button>;
  }
}

export default Button;


