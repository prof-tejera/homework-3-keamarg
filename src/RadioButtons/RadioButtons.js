import { Component } from 'react';
import Input from '../components/Input/Input'
import Label from '../components/Label/Label'
import './RadioButtons.css';

class RadioButtons extends Component {
  render() {
    const arr =["Apple","Pear","Orange"];

    const clickHandler = (id) =>{
      console.log(`In App, ${id} clicked`);
    }

    return (
      <>
        {arr.map((item,i)=>
        <div key={i} className="radio-group">
          <Input id={item} type="radio" name="radio-buttons" handleClick={clickHandler} />
          <Label htmlFor={item} text={item} />
        </div>
        )}
      </>
    )
  } 
}

export default RadioButtons;
