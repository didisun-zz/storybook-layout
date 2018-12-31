"use strict";
import React from 'react'
import { css } from 'glamor'
import {rhythm} from '../../../typography.js'
import typography from '../../../typography.js'
import { Header } from './header.js';
import { DragDrop } from './dragDrop.js';
import { AnnoTabs } from './anno-tabs.js';
import { Row, Col } from 'react-flexbox-grid';

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


var aside = css({
    float: 'right'
      }
);



var footer = css({

      }
);



class AllScreen extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
        <div>
        <Header {...header}/>
        <Row {...container} typography={typography}>
            <Col  xs={4} {...nav} >
                <AnnoTabs />
            </Col  >
            <Col xs={3}></Col>
           
            <Col xs={4}>
                 <DragDrop {...aside}/>
            </Col>
           
        </Row>
        <footer {...footer}></footer>
      </div>
    );
  }
}

export {AllScreen}