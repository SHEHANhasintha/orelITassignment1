

import React, { Component } from '../../node_modules/react';
import App from './app';
import './style.css';
import ClosestCountries from './ClosestCountries';
import SearchCountry from './SearchCountry';
import BetweenTimeZones from './TimeZones';

import { Provider } from '../../node_modules/react-redux';
import store from "../storage";

class MainCarry extends Component {

      constructor(props) {
        super(props);
        this.state = {
              fullDataResponce: [],
              location : true,
              Country : false,
              hasMounted: 'distanceApp'
        };
      }



    componentDidMount() {
    }

    dataResponceHandle = (dataRes) => {
        this.setState({fullDataResponce : dataRes})
    }

    appSelection = (add) => {
        this.setState({ hasMounted : add })
    }

    turn() {

        switch(this.state.hasMounted) {
            case 'distanceApp':
                return <App fullDataResponce={this.state.fullDataResponce} dataResponceHandle={this.dataResponceHandle}/>;
            case 'countryZones':
                return <ClosestCountries fullDataResponce={this.state.fullDataResponce} dataResponceHandle={this.dataResponceHandle}/>;
            case 'SearchCountry':
                return <SearchCountry fullDataResponce={this.state.fullDataResponce} dataResponceHandle={this.dataResponceHandle}/>;
            case 'BetweenTimeZones':
                return <BetweenTimeZones fullDataResponce={this.state.fullDataResponce} dataResponceHandle={this.dataResponceHandle}/>;
            default:
                return <App fullDataResponce={this.state.fullDataResponce} dataResponceHandle={this.dataResponceHandle}/>;
          }

      }

  render() {

    return (
        <Provider store={store}>
        <React.StrictMode>
      <div className='container-fluid big-bg'>
            <div className='container-fluid big-bg heightArrange'>
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" onClick={() => this.appSelection('distanceApp')} className="btn btn-default">Location Distances</button>
                    <button type="button" onClick={() => this.appSelection('countryZones')} className="btn btn-default">Country Zones</button>
                    <button type="button" onClick={() => this.appSelection('SearchCountry')} className="btn btn-default">Search Country</button>
                    <button type="button" onClick={() => this.appSelection('BetweenTimeZones')} className="btn btn-default">Countries Between Time Zones</button>
                </div>
            </div>
            {this.turn()}

      </div>
      </React.StrictMode>
      </Provider>
    );
  }
}

export default MainCarry;