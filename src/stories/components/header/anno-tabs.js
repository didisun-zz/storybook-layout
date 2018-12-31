"use strict";
import React from 'react'
import { css } from 'glamor'
import { AnnoTab } from './anno-tab';
import { rhythm } from '../../../typography';

var styles = css({
  width: rhythm(12),
  height: '100%',
  paddingRight:rhythm(1)
});


class AnnoTabs extends React.Component {
  // click and make it orange
constructor (props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state = {activeButton: null}
}
 
  handleClick(name) {
    console.log( name);
    let activeButton = name;
    this.setState({activeButton})
    
  }

  //on click make false active.
  //on click make  active false
  // prev.state = false 



  render() {

    const fakeProps = {buttonNames:["Tal","Adi","Daud","Chuffman","Maria"],
    shortCut:["1","2","3","4","5"]}
    return (
        <div {...styles}>
          {fakeProps.buttonNames.map(name=>(
            <AnnoTab name={name} onClick={this.handleClick} key={name} active={this.state.activeButton==name}/>
          ))}
        </div>
    );
  }
}

export {AnnoTabs}