"use strict";
import React from 'react'
import { css } from 'glamor'
import dragicon from '../../../img/dragicon.png';

var styles = css({
 width: '10%',
 positio: 'absolute'
});


class DragIcon extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
        <div>
        <img {...styles} src={dragicon}/>
        </div>
    );
  }
}

export {DragIcon}