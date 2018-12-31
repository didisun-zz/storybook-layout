"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';


const DropDownMenu = (props) =>
{

    var styles = css({
        disply: props.active? 'none' : 'block',
        width: rhythm(6),
        height: rhythm(3),
        color: 'white',
        backgroundColor: 'black'
    });

if (props.active ) {

    return (
        <div>
                <div {...stylesItem}>Item 1</div>
                <div {...stylesItem}>Item 2</div>
                <div {...stylesItem}>Item 3</div>
                <div {...stylesItem}>Item 4</div>
        </div>
    );}
else {
    return (null)
}

  }


export {DropDownMenu}