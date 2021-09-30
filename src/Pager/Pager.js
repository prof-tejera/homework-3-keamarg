import { Component } from 'react';
import Button from '../components/Button/Button'
import '../components/Button/Button.css';
import './Pager.css';

class Pager extends Component {
  render() {
    
    const clickHandler = (text) =>{
      console.log(`In App, ${text} clicked`);
    }
    const numberOfPages = 7;
    return(
      <>
      <div className="surroundingBox">
        <Button buttonStyling="Pager-button" buttonColor="Gray-button" text="<" handleClick={clickHandler} />
        {[...Array(numberOfPages)].map((item,i) => <Button buttonStyling="Pager-button" buttonColor="Gray-button" text={i+1} key={i} handleClick={clickHandler}/>)}
        <Button buttonStyling="Pager-button" text=">" handleClick={clickHandler} />
      </div>
      </>

    )
  }
}

export default Pager; 