

import React, { Component} from '../../node_modules/react';
import axios from '../../node_modules/axios'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, locationData }  from  "../actions"

/*const getFetched = () => {
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

}*/

const getLocations = (reqData) => {
    return(new Promise(async(resolve,reject) => {

      let positionData;
      console.log(reqData)
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
        this.props.requestApiData()
        //console.log()
        this.state = {
              fullDataResponce: [],
              locations: [],
              country1Input: '',
              country2Input: '',
              distanceBetween: 'From where to where?',
              newGuy: []
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
      
     console.log(this.state.locations,"i dont know any more")

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

  

    setupData(data) {
      if (data.length > 0) {
        console.log(data,"what the")
        //this.setState({ fullDataResponce : data })
        this.state.fullDataResponce = data;
        getLocations(data).then((fetchedData) => {
          this.state.locations = fetchedData
          this.props.dataResponceHandle(data)
        })
        
        return(
             <h1> Loaded.. </h1>
        )
      }else{
        console.log(data,"hhhhhh")
        return(
          <h1>Loading...</h1>
        )
      }
      
    }


    componentDidMount() {
        /*getFetched('https://restcountries.eu/rest/v2/all')
        .then((res) => {
          this.setState({fullDataResponce : res})
        }).then(() => {
          //making the data global
          this.props.dataResponceHandle(this.state.fullDataResponce);
          //this is where you I get the locations and store in the location dataStructure
          getLocations(this.state.fullDataResponce).then((fetchedData) => {
            this.setState({'locations' : fetchedData})
          })

        })*/
        

       /*this.setState({ fullDataResponce : this.props.data })
       this.props.dataResponceHandle(this.props.data)
        console.log(this.props,"kpop")
       getLocations(this.props.data).then((fetchedData) => {
        this.setState({'locations' : fetchedData})
        
      })*/
      //this.props.locationData()

      //this.setupData(this.props.data)
      // this.setState({ 'locations' : fullDataResponce })
        
        
    }

  render() {
    console.log(this.props,"kpopjhhj")
    //this.setupData(this.props.data)


    
    //const { results = [] } = this.props.data;
    return (
      <div className='container-fluid big-bg heightArrangeDistanceCal'>

        {/*this.setupData(this.props.data)*/}

        {this.setupData(this.props.data)}        

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

const mapStateToProps = state => ({ 
  data : state.data,
  locationData : state.data,
});

const mapDispatchToProps = disatch => 
  bindActionCreators({  locationData: locationData,
    requestApiData: requestApiData, }, disatch)


/*const mapDispatchToProps = {
  locationData: locationData,
  requestApiData: requestApiData,
};*/

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


export default App;
