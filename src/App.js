import React from 'react';
import Button from './components/Button';
import "./styles/style.css";

class App extends React.Component  {

  constructor(props){
    super(props);

    this.state = {
      current: '0',
      previous: [],
    }
  }

  reset = () => {
    this.setState({result: '0'});
  }

  addToCurrent = (symbol) => {
    if(["/", "X", "+", "-"].indexOf(symbol) > - 1){
      let {previous} = this.state;
      previous.push(this.state.current + symbol);
      this.setState({previous});
    } else{
      this.setState({current: this.state.current + symbol});
    }
  }

  render(){

    const buttons = [
      {symbol: 'C', cols: 3, action: this.reset},
      {symbol: '/', cols: 1, action: this.addToCurrent},
      {symbol: '7', cols: 1, action: this.addToCurrent},
      {symbol: '8', cols: 1, action: this.addToCurrent},
      {symbol: '9', cols: 1, action: this.addToCurrent},
      {symbol: 'X', cols: 1, action: this.addToCurrent},
      {symbol: '4', cols: 1, action: this.addToCurrent},
      {symbol: '5', cols: 1, action: this.addToCurrent},
      {symbol: '6', cols: 1, action: this.addToCurrent},
      {symbol: '-', cols: 1, action: this.addToCurrent},
      {symbol: '1', cols: 1, action: this.addToCurrent},
      {symbol: '2', cols: 1, action: this.addToCurrent},
      {symbol: '3', cols: 1, action: this.addToCurrent},
      {symbol: '+', cols: 1, action: this.addToCurrent},
      {symbol: '0', cols: 2, action: this.addToCurrent},
      {symbol: '.', cols: 1, action: this.addToCurrent},
      {symbol: '=', cols: 1, action: this.addToCurrent},
    ];

    return (
      <div className="App">
        {this.state.previous.length > 0 ? 
          <div className="floaty-last">{this.state.previous[this.state.previous.length -1]}</div>
          : <div className="floaty-last"></div>
          }
        <input className="result" type="text" value={this.state.current}></input>

        {buttons.map((btn, i) => {
          return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />
        })}
      </div>
    );
  }

}

export default App;
