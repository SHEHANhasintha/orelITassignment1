

import React, { Component } from '../../node_modules/react';
import "./style.css"


class BetweenTimeZones extends Component {

      constructor(props) {
        super(props);
        this.state = {
              close: [],
              country1Input: '',
              country2Input: '',
              message: 'What country do you want search?',
              closeData : []

        };
      }

      asyncStateManagement(value){
        return(new Promise((resolve,reject) => {
            this.setState(value)
            resolve(true)
        }))
      }

    closeCountries(e){
        e.preventDefault();
        let closeData = this.state.close.map((data) => {
            let max = Math.max(this.state.country1Input, this.state.country2Input)
            let min = Math.min(this.state.country1Input, this.state.country2Input)

            if ((Math.max(data[1],max) === max) && (Math.min(data[1],min) === min)){
                return data[0].trim()
            }
            
            return null
        })

        let filtered = [];
        for (let i = 0; i<closeData.length; i++){
            if (closeData[i] !== undefined){
                filtered.push(closeData[i])
            }
            
        }
        this.setState({ closeData : filtered })

    }

    countryZone1Change = (e) => {
        let okValue = e.target.value.replace(":", ".");
            okValue = parseFloat(okValue)
        this.asyncStateManagement({country1Input : okValue})
        
    }

    countryZone2Change = (e) => {
        let okValue = e.target.value.replace(":", ".");
            okValue = parseFloat(okValue)
        this.asyncStateManagement({country2Input : okValue})
        
    }

    componentDidMount() {

        let closeData = []
        this.props.fullDataResponce.map((data) => {
             (data.timezones.map((td) => {
                let hold = td.replace(':','.')
                hold = parseFloat(hold.replace('UTC',''))
                let c = [data.name,hold]
                closeData.push(c)
                return null
            }))

            return undefined
            
          })

        this.setState({ close : closeData })
        
    }

    displayMessage() {
        let ret = []
        for (let i = 0; i<this.state.close.length; i++ ){
            if(this.state.closeData[i] !== undefined){
                ret.push(<li className="list-group-item" key={i}>{this.state.closeData[i]}</li>)
            }
            
        }
        return (ret)
        
    }

  render() {
    return (
      <div className='container-fluid big-bg heightArrangeDistanceCal'>

        <h1 className="badgeDistance">Countries between Time Zones</h1>

        <form onSubmit={(e) => this.closeCountries(e)} >
          <div className="form-group">
            <label htmlFor="country1">Country zone1</label>            
            <div className="input-group input-group-lg fontSize" style={{margin:'0px 0px 10px 0px'}}>
                <span className="input-group-addon fontSize" id="sizing-addon1" >UTC</span>
                <input type="text" onChange={(e) => {this.countryZone1Change(e)}} className="form-control fontSize" placeholder="timeZone 1" aria-describedby="sizing-addon1"/>
            </div>

            <small id="emailHelp" className="form-text text-muted">Put the country zone where you are from. Afghanistan - ex: UTC+04:30</small>
          </div>
          <label htmlFor="basic-url">Country zone2</label>
            <div className="input-group input-group-lg fontSize" style={{margin:'0px 0px 10px 0px'}}>
                <span className="input-group-addon fontSize" id="sizing-addon1">UTC</span>
                <input type="text" onChange={(e) => {this.countryZone2Change(e)}} className="form-control fontSize" placeholder="timeZone 2" aria-describedby="sizing-addon1"/>
            </div>

            
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>



        <ul className="list-group small my-custom-scrollbar my-custom-scrollbar-primary scrollbar scrollbar-primary">
            {this.displayMessage()}
        </ul>

      </div>
    );
  }
}

export default BetweenTimeZones;