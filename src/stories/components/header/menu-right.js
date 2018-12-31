"use strict";
import React from 'react'
import { css } from 'glamor'
import {typography} from '../../../typography.js'
import { Logo } from './logo.js';
import { MenuLink } from './menu-link.js';
import { LogLink } from './log-link.js';



var styles = css({
   listStyle: 'none',
   verticalAlign: 'middle',
  display: 'flex',
  alignItems: 'center',
    }
);



class MenuRight extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {active: null}
  }
  
handleClick() {
console.log('active');
this.setState(state => ({
    active: !state.active
  }));
}

  render() {
    return (
      <div {...styles} typography={typography}>
      <div onMouseEnter={this.handleClick}
      onMouseLeave={this.handleClick}
      >
       <MenuLink active={this.state.active} /> 
       </div>
       <LogLink />
       <Logo />
      </div>
    );
  }
}

export {MenuRight}