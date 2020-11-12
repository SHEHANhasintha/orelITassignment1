

import React, { Component } from '../../node_modules/react';
import "./style.css"


class SearchCountry extends Component {

      constructor(props) {
        super(props);
        this.state = {
              close: [],
              countryInput: '',
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
            if (data[0].trim().toLowerCase().indexOf(this.state.countryInput.trim().toLocaleLowerCase()) > -1){                
                return data[0].trim()
            }
            return undefined
        })

        
        let filtered = [];
        for (let i = 0; i<closeData.length; i++){
            if (closeData[i] !== undefined){
                filtered.push(closeData[i])
            }
            
        }

        this.setState({ closeData : filtered })

    }

    countryChange = (e) => {
        this.asyncStateManagement({countryInput : e.target.value})
        .then(() => {this.closeCountries(e)})
        
    }

    componentDidMount() {
        let closeData = this.props.fullDataResponce.map((data) => {
            let c = [data.name]
            return c
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

        <h1 className="badgeDistance">{this.state.message}</h1>

        <form onSubmit={(e) => this.closeCountries(e)} >
          <div className="form-group">
            <label htmlFor="country1">Country name</label>
            <input type="text" onChange={(e) => {this.countryChange(e)}}  className="form-control form-control-sm ml-3 w-75" id="country" aria-describedby="country" placeholder="Enter country name" />
            <small id="emailHelp" className="form-text text-muted">Put the country name where you are from. ex: Afghanistan</small>
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

export default SearchCountry;