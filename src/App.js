import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Game/>
      </div>
    );
  }
}

class Game extends React.Component {
    render(){
        return(
            <div className="container">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Play Nine</h1>
                </header>
                <div className="row">
                    <Stars/>
                    <Button/>
                    <Answer/>
                </div>
            </div>
        );
    }
}

class Stars extends React.Component {
    render(){
        return(
            <div className="col-5">
                 <i className="fa fa-star "></i>
            </div>
        );
    }
}

class Button extends React.Component {
    render(){
        return(
            <div className="col-2">
                <button>=</button>
            </div>
        );
    }
}

class Answer extends React.Component {
    render(){
        return(
            <div className="col-5">
                <i className="fa-address-card" >Address</i>
            </div>
        );
    }
}

export default App;
