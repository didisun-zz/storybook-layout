"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';

const Tab = (props) =>
 {
  var styles = css({
    zIndex: props.active? '100' : props.zIndex,
    position: 'relative',
    margin: '0 4px',
    padding: '10px 20px',
    border: '1px solid black',
    background: 'white',
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: '15',
    boxShadow: '2px 2px 2px rgba(0,0,0,.4)',
    borderRadius: '9px 5px 0 0' ,
     borderBottom:'0 solid white' ,
     borderLeft: '4px solid black',
     marginLeft: rhythm(-0.02),
    '&:active': {
      backgroundColor: 'white',
      outline:'none !important',
      color: '#000',
    
    },
    '&:focus':{
      outline:0
    }
  });
  
   
  var stylesDiv = css({
    position: 'absolute',
    height: rhythm(2.4),
    width: rhythm(1.3),
    right: rhythm(-0.9),
    bottom: 0,
    background: 'white',
    display: 'inline-block',
   cursor: 'pointer',
   transform: 'skew(30deg)',
   borderRadius: '0 7px 0 0' ,
   borderRight: '4px solid black',
   });

   var line = css({
    zIndex: '1',
    width:  '135%',
    height: rhythm(0.30),
    bottom: 0,
  left: rhythm(0),
  position: 'absolute',
  backgroundColor: props.active? 'none' : 'black',
   });




  
   
  
  return (
    <span onClick={()=>props.onClick(props.name)}>
     <button {...styles}>
     { props.name }<div {...stylesDiv}/>
     <div {...line}/>
     </button>
     </span>
    );
  }


export {Tab}