"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';


const AnnoTab = (props) =>
 {
  var styles = css({
    width: rhythm(12),
    height:rhythm(2),
    cursor:'pointer',
    backgroundColor: props.active? 'orange' : 'black',
    color: 'white',
    position: 'relative',
    borderRadius: '3px',
    textAlign: 'center',
    padding: '1px',
    display: 'block',
    marginBottom:rhythm(0.2),
    ' span': {
        color: 'gray',
        position: 'absolute',
    }
   });
   
  
  return (
     <button onClick={()=>props.onClick(props.name)} {...styles}>
     { props.name }<span>{ props.shortCut }</span>
     </button>
    );
  }


export {AnnoTab}