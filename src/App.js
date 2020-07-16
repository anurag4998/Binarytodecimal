import React from 'react';
import './App.css';
import './components/inputtextbox'
import Textbox from './components/inputtextbox';
import Outputbox from './components/output';

import Header from './components/header';

class App extends React.Component {
  state = {
    enteredbinary: ""
  }

  enteredBinary = (binary) => {

    const b = parseInt(binary, 2);
    this.setState({ enteredbinary: b });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Textbox handlebinary={this.enteredBinary} />
        <Outputbox decimal={this.state.enteredbinary} />
      </div>

    )
  }



}


export default App;
