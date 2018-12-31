"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';
import logo from '../../../img/logo.png'

var styles = css({
 width: rhythm(10),
 cursor:'pointer',
 margin: '10px'
});






class Logo extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
        <a {...styles}>
        <img {...styles} src={logo}/>
        </a>
    );
  }
}

export {Logo}