import React, {Component} from 'react';

class LanguageSwitch extends Component {
  constructor(props) {
    super();
    this.state = {
      menuClosed: false
    }
  }
  toggleDropDown(e) {
    e.preventDefault();
    this.setState({
      menuClosed: !this.state.menuClosed
    });
  };

  render() {
    let menu = (
      <div>
        <ul className='dropdown-menu-react'>
          <li>
            <a href="">EN</a>
          </li>
          <li>
            <a href="">DE</a>
          </li>
        </ul>
      </div>
    );
    return (
      <div className='language-switch-container'>
        <ul className='menu-left'>
          <li>
            <a href="#">for landlords</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#" onClick={(e) => this.toggleDropDown(e)}>EN</a>
            {this.state.menuClosed
              ? menu
              : null}
          </li>
        </ul>
      </div>
    );
  }
}

export default LanguageSwitch;
