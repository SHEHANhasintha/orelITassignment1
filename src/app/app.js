

import React, { Component} from '../../node_modules/react';
import axios from '../../node_modules/axios'

const getFetched = () => {
  return(new Promise(async(resolve,reject) => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      resolve(res.data)
    })
    .catch((err) => {
      console.log('no responce fetched')
      reject(false)
    })

  }))

}

const getLocations = (reqData) => {
    return(new Promise(async(resolve,reject) => {

      let positionData;

      positionData = reqData.map((data) => {
        let c = [data.latlng,data.cioc]
        return c
      })

      resolve(positionData)


    }))
  }

class App extends Component {

      constructor(props) {
        super(props);
        this.state = {
              fullDataResponce: [],
              locations: [],
              country1Input: '',
              country2Input: '',
              distanceBetween: 'From where to where?'
        };
      }


    country1Change = (e) => {
      this.setState({country1Input : e.target.value})
    }

    country2Change = (e) => {
      this.setState({country2Input : e.target.value})
    }

    distanceCalculator = (e) => {
      e.preventDefault()

      let lat1,lon1,lat2,lon2 = '';
      this.state.locations.map((data) => {
        if(data[1] !== null){
          if ( data[1].trim() === this.state.country1Input.trim()){
            lat1 = data[0][0]
            lon1 = data[0][1]
          }
        }

        if(data[1] !== null){
          if ( data[1].trim() === this.state.country2Input.trim()){
            lat2 = data[0][0]
            lon2 = data[0][1]
          }
        }
        return null
      })

      if ((lat1 !== '') && (lon1 !== '') && (lat2 !== '') && (lon2 !== '')){
        var R = 6371; // Radius of the earth in km
        var dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
        var dLon = (lon2-lon1) * (Math.PI/180); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        this.setState({distanceBetween : d.toFixed(2) + 'KM'});
        return d;
      }else{
        console.log('invalid input')
        return false
      }
    }

  




    componentDidMount() {
        getFetched('https://restcountries.eu/rest/v2/all')
        .then((res) => {
          this.setState({fullDataResponce : res})
        }).then(() => {
          //making the data global
          this.props.dataResponceHandle(this.state.fullDataResponce);
          //this is where you I get the locations and store in the location dataStructure
          getLocations(this.state.fullDataResponce).then((fetchedData) => {
            this.setState({'locations' : fetchedData})
          })

        })
        
    }

  render() {
    return (
      <div className='container-fluid big-bg heightArrangeDistanceCal'>

        <h1 className="badgeDistance">{this.state.distanceBetween}</h1>

        <form onSubmit={(e) => this.distanceCalculator(e)} >
          <div className="form-group">
            <label htmlFor="country1">Country 1</label>
            <input type="text" onChange={(e) => this.country1Change(e)} className="form-control" id="country1" aria-describedby="country1" placeholder="Enter Latitude" />
            <small id="emailHelp" className="form-text text-muted">Put the country where you go from. ex: AFG, for Afghanistan</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Country 2</label>
            <input type="text" onChange={(e) => this.country2Change(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Longitude" />
            <small id="emailHelp" className="form-text text-muted">Put the country where you are going to. ex: CHN. for China</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>


      </div>
    );
  }
}

export default App;