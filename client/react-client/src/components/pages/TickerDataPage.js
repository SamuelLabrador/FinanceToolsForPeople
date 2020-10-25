import { Component } from 'react';
import { ModelsTickerHistoryQuery, ModelsTickerHistory, DataApi } from 'ftfp_api';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


class TickerDataPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      symbol: 'AAPL',
      resolution: '5',
      from: '1572651390',
      to: '1572910590',
      tickerHistory: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callback = this.callback.bind(this);
  }
  
  handleSubmit(event) {
    console.log(this.state);
    var data = {
      'body': new ModelsTickerHistoryQuery(
          this.state.symbol, 
          this.state.resolution, 
          this.state.from, 
          this.state.to
        )
    };

    var api = new DataApi();
      
    api.getTickerHistory(data, this.callback);
  }

  callback(error, data, response) {
    var rawHistory = response.body
    console.log(rawHistory);
    var history = []
    for(var i = 0; i < rawHistory.close.length; i++) {
      history.unshift({
        x: i,
        y: rawHistory.close[i]
      })
    }
    console.log(history);
    this.setState({tickerHistory: history});
  }

  render() {
    return (<div>
      <h1>Ticker Data Page</h1>
      
      SYMBOL
      <input type="text" value={this.state.symbol}
        onChange={(e) => this.setState({"symbol": e.target.value})}></input>
      
      RESOLUTION 
      <input type="text" value={this.state.resolution}
        onChange={(e) => this.setState({"resolution": e.target.value})}></input>

      FROM
      <input type="text" value={this.state.from}
        onChange={(e) => this.setState({"from": e.target.value})}></input>

      TO
      <input type="text" value={this.state.to} 
        onChange={(e) => this.setState({"to": e.target.value})}></input>

      <button onClick={this.handleSubmit}>Submit</button>

      <XYPlot
        width={1000}
        height={500}>
        <HorizontalGridLines />
        <LineSeries
          data={this.state.tickerHistory}/>
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>)
  }
}

export default TickerDataPage;