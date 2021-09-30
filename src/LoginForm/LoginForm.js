import { Component } from 'react';
import './LoginForm.css';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Panel from '../components/Panel/Panel'
class LoginForm extends Component {
 
  render() {

    // I created the loggedIn functionality in an attempt to switch colors on one button, but after trying a few different things, I believe I would probably need to use state in order to change the DOM reactively. I guess I could just change the color of the element by using some sort of addClass()/removeClass() functionality, but without being sure, I do not think that is what we were supposed to do. Instead I opted for two different buttons, that pass each their prop to the Button component, but I left in the "loggedIn" code to show you what I mean.

    let loggedIn=false;
    const clickHandler = (text) =>{
      loggedIn=!loggedIn;
      console.log(`In App, ${text} clicked ${loggedIn}`);
    }
    const changeHandler = (text) =>{
      console.log(`In App, ${text} clicked ${loggedIn}`);
    }
    return (
    <>
      <Panel>
        <Input id="username" placeholder="username" handleChange={changeHandler} handleClick={clickHandler} skinke="dsd"></Input>
        <br/>
        <Input id="password" placeholder="password" type="password" handleChange={changeHandler} handleClick={clickHandler}></Input>
        <br/>
        <Button text='Login' buttonStyling="Login-button" buttonColor='Green-button' loggedIn={loggedIn} handleChange={changeHandler} handleClick={clickHandler}> 
        </Button>
        <Button text='Logout' buttonStyling="Login-button" buttonColor='Red-button' loggedIn={loggedIn} handleChange={changeHandler} handleClick={clickHandler}> 
        </Button>
        <p>Not registrered? <span>Create an account</span></p>
      </Panel>
    </>
    )
  }
}

export default LoginForm;
