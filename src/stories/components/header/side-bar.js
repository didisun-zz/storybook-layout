"use strict";
import React from 'react'
import { css } from 'glamor'
import {rhythm} from '../../../typography.js'
import {typography} from '../../../typography.js'
import { Tabs } from './tabs.js';
import { AnnoTabs } from './anno-tabs.js';

var styles = css({

      }
);

var stylesTabs = css({
        marginTop: rhythm(2),
        marginLeft:  rhythm(2),
      }
);


class SideBar extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div {...styles} typography={typography}>
       <Tabs/>
       <div {...stylesTabs} >
       <AnnoTabs />
       </div>
      </div>
    );
  }
}

export {SideBar}