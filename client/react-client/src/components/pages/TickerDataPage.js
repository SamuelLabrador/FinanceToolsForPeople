import { Component } from 'react';
import { ModelsTickerHistoryQuery, ModelsTickerHistory, DataApi } from 'ftfp_api';

class TickerDataPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      symbol: 'AAPL',
      resolution: '5',
      from: '1572651390',
      to: '1572910590'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(event) {
    console.log(this.state);
    var data = {
      'body': new ModelsTickerHistoryQuery(this.state.symbol, this.state.resolution, this.state.from, this.state.to)
    };

    var api = new DataApi();
    function callback(error, data, response) {
      var history = response.body
      console.log(history)
    }
    api.getTickerHistory(data, callback)
  }

  render() {
    return (<div>
      <h1>Ticker Data Page</h1>
      SYMBOL
      <input type="text" value={this.state.symbol} readOnly></input>
      RESOLUTION
      <input type="text" value={this.state.resolution} readOnly></input>

      FROM
      <input type="text" value={this.state.from} readOnly></input>

      TO
      <input type="text" value={this.state.to} readOnly></input>

      <button onClick={this.handleSubmit}>Submit</button>
    </div>)
  }
}

export default TickerDataPage;