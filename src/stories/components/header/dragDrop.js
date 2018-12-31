"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';
import { DragIcon } from './drag-icon';
import { DragSpace } from './drag-space'


 var divStyle = css ({
   position: 'absolute',
   textAlign: 'center',
   width: '100%',
   paddingTop: rhythm(2)

 });

var stylesSpace = css({
 });

class DragDrop extends React.Component {

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <div {...divStyle}>
        <DragSpace/>
    </div>    );
  }
}

export {DragDrop}