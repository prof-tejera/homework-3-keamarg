import { Component } from 'react';
import "./Input.css"

class Input extends Component {

  render() {
    const {placeholder, type, name, handleClick,id}=this.props;

    return <input 
            className="Default-input" 
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            onClick={()=>{console.log(id, "was clicked.");
            handleClick(id)}}
          />;
  }
}

export default Input;
