

import React, { Component,useContext,useEffect } from '../../node_modules/react';
import axios from '../../node_modules/axios'
import css from './style.css';
//import Header from './../headerSections/HomePageHeader.js';
//import './404.css';
//import Footer from './../footer/Footer'


const getLocations = () => {
    //e.preventDefault();
    //callback function would be to call toggleAuth
    return(new Promise(async(resolve,reject) => {
      /*axios
        .get("/auth/local",thita)
        .then((res) => {
          console.log(res);
          if (res.status == 200){
            cb(true)
            //window.location = "./app"
            props.history.push("./app")
          }
        })
        .catch((err) => console.log(err))
      //await resolve(cb());*/

        console.log(this.props)

        let positionData;

      axios.get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
          positionData = res.data.map((data) => {
            let c = [data.latlng,data.cioc]
            return c
          })
        }).then(() => {
          resolve(positionData)
        })
      .catch(function (error) {
        console.log(error);
        reject(false)
      })
      .then(function () {
        console.log("connection successful")
        reject(true)
      });





    }))
  }

class App extends Component {

      constructor(props) {
        super(props);
        this.state = {
              locations: [],
              country1Input: '',
              country2Input: '',
              distanceBetween: 'From where to where?'
        };
      }


    country1Change = (e) => {
      this.setState({country1Input : e.target.value})
      console.log(this.state.country1Input)
    }

    country2Change = (e) => {
      this.setState({country2Input : e.target.value})
      console.log(this.state.country2Input)
    }

    distanceCalculator = (e) => {
      e.preventDefault()
      //console.log(this.state.country1Input,this.state.country2Input)

      let lat1,lon1,lat2,lon2 = '';
      this.state.locations.map((data) => {
        //if (data[1])
        //console.log(data[1])
        if(data[1] !== null){
          if ( data[1].trim() === this.state.country1Input.trim()){
            console.log(data[1],'ddddd')
            lat1 = data[0][0]
            lon1 = data[0][1]
          }
        }

        if(data[1] !== null){
          if ( data[1].trim() === this.state.country2Input.trim()){
            console.log(data[1],'ddddd')
            lat2 = data[0][0]
            lon2 = data[0][1]
          }
        }
      })

      //if 
      console.log(lat1,lon1,lat2,lon2)

      if ((lat1 !== '') && (lon1 !== '') && (lat2 !== '') && (lon2 !== '')){
        console.log("nothing at all");
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
        console.log(d)
        this.setState({distanceBetween : d.toFixed(2) + 'KM'});
        return d;
      }else{
        console.log('kkkkk')
        return false
      }

      //lat1,lon1,lat2,lon2
        /*var R = 6371; // Radius of the earth in km
        var dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
        var dLon = (lon2-lon1) * (Math.PI/180); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        console.log(d)
        return d;*/



    }

  




    componentDidMount() {
        //this.saySomething("component did mount");

        let values = [1,2,3,4]; 

        /*let newValues = values.map((v) => {
          return [v *v, v*v*v,v+1] ;
        }).reduce((a, c) => {
        
          return a.concat(c); 
        });*/ 

        
        //console.log(newValues); 
        console.log(this.state.message)

        //created an array datastructure to store data
        let positionData;
        //position data calculations
        getLocations().then((fetchedData) => {
          this.state.locations = fetchedData;
          console.log(fetchedData)
        }).then(() => {
          console.log(this.state.locations)
        })

        



        
    }

  render() {
    return (
      <div className='container-fluid big-bg'>

        <h1 className="badgeDistance">{this.state.distanceBetween}</h1>

        <form onSubmit={(e) => this.distanceCalculator(e)}>
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
          {/*<div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>*/}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>





      {
        () => {
          console.log("dfdf")
        }
      }
      {/*<span>fdjhfdjfhdj jhj </span>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>*/}

      </div>
    );
  }
}

export default App;