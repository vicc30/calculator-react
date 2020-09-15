import React from 'react';
import Button from './components/Button';

class App extends React.Component  {

  constructor(props){
    super(props);

    this.state = {
      current: '',
      previous: [],
    }
  }
  render(){
    return (
      <div className="App">
        <input className="result" type="text" value={this.state.current}></input>
        <Button />
      </div>
    );
  }

}

export default App;
