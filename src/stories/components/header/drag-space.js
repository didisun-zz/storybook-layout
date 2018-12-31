"use strict";
import React from 'react'
import { css, backdrop } from 'glamor'
import { rhythm } from '../../../typography';
import dragicon from '../../../img/dragicon.png';


var styles = css({
 background: '-webkit-radial-gradient(rgb(221, 221, 221) 0, rgb(221, 221, 221) 15%, rgba(0,0,0,0) 16%, rgba(0,0,0,0) 100%), -webkit-radial-gradient(rgb(221, 221, 221) 0, rgb(221, 221, 221) 15%, rgba(0,0,0,0) 16%, rgba(0,0,0,0) 100%)',
 background: '-moz-radial-gradient(rgb(221, 221, 221) 0, rgb(221, 221, 221) 15%, rgba(0,0,0,0) 16%, rgba(0,0,0,0) 100%), -moz-radial-gradient(rgb(221, 221, 221) 0, rgb(221, 221, 221) 15%, rgba(0,0,0,0) 16%, rgba(0,0,0,0) 100%)',
 background: 'radial-gradient(rgb(221, 221, 221) 0, rgb(221, 221, 221) 15%, rgba(0,0,0,0) 16%, rgba(0,0,0,0) 100%), radial-gradient(rgb(221, 221, 221) 0, rgb(221, 221, 221) 15%, rgba(0,0,0,0) 16%, rgba(0,0,0,0) 100%)',
 backgroundPosition: '0 0, 30px 30px',
 boxSizing: 'content-box',
 backgroundSize: '20px 20px',
 height: rhythm(28),
 width: rhythm(22),
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
   textAlign : 'center',
   position: 'relative'

});

var stylesH1 = css({
  fontSize: rhythm(1.7),
  top: rhythm(1),
  float: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: rhythm(1.5),
    verticalAlign: 'middle'
    
 });


 

class DragSpace extends React.Component {

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <div>
      <div {...styles}>
      <h1 {...stylesH1}>Drag and Drop Here</h1>
      <img src={dragicon}/>
        </div> 
        </div> 
         );
  }
}

export {DragSpace}