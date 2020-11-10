import React, {Component} from 'react';
import logo from './homelike.jpg';
class Search extends Component {
  citiesUrl = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cd' +
      'ddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  cities = [];
  filteredCitiesArray = [];
  constructor() {
    super()
    this.state = {
      searchText: '',
      searchResult: [],
      showResults: false
    };
    fetch(this.citiesUrl, {method: 'get'}).then((response) => response.json()).then(data => {
      this.cities = data.map((city, index) => {
        return data[index].city
      });
      console.log(this.cities)
    })
      .catch(function (err) {
        console.log('Well , that didn\'t go well!! ');
      });
  };
  search(type) {
    let searchItem = type.target.value;
    this.setState({searchText: searchItem});
    this.setState({showResults: true});
    this.setState({
      searchResult: this.filterCities(searchItem)
    });
  }
  filterCities(myCity) {
    if (myCity == '') {
      return this.filteredCitiesArray = [];
    }
    return this.filteredCitiesArray = this
      .cities
      .filter((element) => {
        return (element.includes(myCity));
      });
  }
  render() {
    const listItems = this
      .filteredCitiesArray
      .map((city) => <li key={city}>
        <a href="">{city}</a>
      </li>);
    const results = (
      <div>{listItems}</div>
    );
    return (
      <div>
        <a href="" className='logo'>
          <img src={logo} alt=""/>
        </a>
        <div className='search-input'>
          <input
            value={this.state.searchText}
            type="text"
            onChange={(type) => this.search(type)}
            placeholder='Which city are you interested in?'/>
          <ul className='search-result-menu '>{this.state.showResults
              ? results
              : null}</ul>

        </div>
      </div>

    );
  }
}

export default Search;
