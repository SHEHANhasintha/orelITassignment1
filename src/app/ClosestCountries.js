

import React, { Component } from '../../node_modules/react';
import "./style.css"

class ClosestCountries extends Component {

      constructor(props) {
        super(props);
        this.state = {
              close: [],
              countryInput: '',
              message: []

        };
      }

    closeCountries(e){
        e.preventDefault();
        let closeData = this.state.close.map((data) => {
            if (data[1].trim() === this.state.countryInput.trim()){
                //let c = [data.borders,data.name]
                return data[0]
            }
            return undefined
        })
        closeData = closeData[0];
        let message = [];

        this.props.fullDataResponce.map((data) => {
            if (closeData.includes(data.cioc)){
                message.push(data.name)
            }
            return undefined
        })

        this.setState({ message : message})
    }

    countryChange = (e) => {
        this.setState({countryInput : e.target.value})
    }

    componentDidMount() {
        let closeData = this.props.fullDataResponce.map((data) => {
            let c = [data.borders,data.name]
            return c
          })

        this.setState({ 'close' : closeData })
        
    }


    displayMessage() {
        let ret = []
        for (let i = 0; i<this.state.message.length; i++ ){
            if(this.state.message[i] !== undefined){
                ret.push(<li className="list-group-item" key={i}>{this.state.message[i]}</li>)
            }
            
        }
        return (ret)
        
    }

  render() {
    return (
      <div className='container-fluid big-bg heightArrangeDistanceCal'>

        <h1 className="badgeDistance">what to know your Closest Countries?</h1>

        <form onSubmit={(e) => this.closeCountries(e)} >
          <div className="form-group">
            <label htmlFor="country1">Country name</label>
            <input type="text" onChange={(e) => {this.countryChange(e)}}  className="form-control" id="country" aria-describedby="country" placeholder="Enter country name" />
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

export default ClosestCountries;