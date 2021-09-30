import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';

class MediaButtons extends Component {
  render() {
    const clickHandler = (text) =>{
      console.log(`In App, ${text} clicked`);
    }
    return (
      <Panel backgroundColor="blue">
        <Button text="Rewind" onClick={() => {}} handleClick={clickHandler}/>
        <Button text="Fast Forward" onClick={() => {}} handleClick={clickHandler}/>
        <Button text="Play" onClick={() => {}} color="green" size="large" handleClick={clickHandler}/>
        <Button text="Stop" onClick={() => {}} color="red" size="large" handleClick={clickHandler}/>
      </Panel>
    );
  }
}

export default MediaButtons;
