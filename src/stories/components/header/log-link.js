"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';
import logo from '../../../img/logo.png'

var styles = css({
textDecorations: 'none',
color: 'white',
cursor:'pointer',
margin: '0 20px',
color: '#FCBC5C'
});


class LogLink extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
        <a {...styles}>
        Login
        </a>
    );
  }
}

export {LogLink}