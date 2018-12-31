"use strict";
import React from 'react'
import { css } from 'glamor'
import {rhythm} from '../../../typography.js'
import typography from '../../../typography.js'
import { Header } from './header.js';
import { DragDrop } from './dragDrop.js';
import { AnnoTabs } from './anno-tabs.js';
import { Row, Col } from 'react-flexbox-grid';
import { FormArea } from './FormArea.js';
import { Header2 } from './header2.js';

var container = css({
    });


var header = css({

      }
);

var nav = css({
paddingTop: rhythm(4),
marginLeft: rhythm(2),
      }
);


var content = css({
marginRight: rhythm(6),
marginLeft: rhythm(6)

      }
);



var footer = css({

      }
);



class AllScreen2 extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
        <div>
        <Header2 {...header}/>
        <div {...content}>
        <FormArea />
        </div>
        <footer {...footer}></footer>
      </div>
    );
  }
}

export {AllScreen2}