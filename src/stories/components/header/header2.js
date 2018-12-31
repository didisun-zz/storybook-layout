"use strict";
import React from 'react'
import { css } from 'glamor'
import {Tabs} from './tabs.js'
import {rhythm} from '../../../typography.js'
import {typography} from '../../../typography.js'
import { MenuRight } from './menu-right'
import { relative } from 'path';

var styles = css({
    background:'black',
    height:rhythm(6),
    position: 'relative',
    margin: 0,
    padding: rhythm(1),
    fontFamily: 'Avenir Next',
    fontWeight: '500'
    }
);

var tabsStyles = css({
  pading:rhythm(1),
  position: 'absolute',
  bottom: 0,
  left: 0,

}
  
);

var stylesH = css({
    color: 'white',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'bottom',
    marginLeft: rhythm(1.5),
    paddingBottom: rhythm(0.7)
    }
  );

  var stylesT = css({
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'bottom'

    
    }
  );


  


var rightStyles = css({
  pading:rhythm(1),
  position: 'absolute',
  verticalAlign: 'middle',
    right: rhythm(1),

  }
);




class Header2 extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div {...styles} typography={typography}>
        <div {...tabsStyles}>
        <div {...stylesT}>
        <Tabs />
        </div>
        <span {...stylesH}>headline</span>
        </div>
        <div {...rightStyles}>
        <MenuRight />
        </div>
      </div>
    );
  }
}

export {Header2}