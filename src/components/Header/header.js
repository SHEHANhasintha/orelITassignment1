import React, {Component} from 'react';
import Search from './Search/search.js';
import LanguageSwitch from './Language_switch/language-switch.js';

class Header extends Component {
  render() {
    return (
      <header className='header clearfix'>
       <Search />
       <LanguageSwitch />
      </header>
    )
  }
}

export default Header;
