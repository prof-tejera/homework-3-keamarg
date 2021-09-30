import { Component } from 'react';
import "./Input.css"

class Input extends Component {

  render() {
    const {placeholder, type, name, handleChange,handleClick,id,...rest}=this.props;
    return <input 
            className="Default-input" 
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            onChange={(e)=>{console.log(e.target.value);
            handleChange(id)}}
            onClick={()=>{console.log(id, "was clicked.");
            handleClick(id)}}
            {...rest}
          />;
  }
}

export default Input;
