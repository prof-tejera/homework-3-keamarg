import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';

class MediaButtons extends Component {
  render() {
    return (
      <Panel backgroundColor="blue">
        <Button text="Rewind" onClick={() => {}} />
        <Button text="Fast Forward" onClick={() => {}} />
        <Button text="Play" onClick={() => {}} color="green" size="large" />
        <Button text="Stop" onClick={() => {}} color="red" size="large" />
      </Panel>
    );
  }
}

export default MediaButtons;
