"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';
import { Tab } from './tab';

var styles = css({
  overflow: 'hidden',
  width: '110%',
  marginRight: '0',
  padding: '0',
  listStyle: 'none',
});




class Tabs extends React.Component {
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

    const fakeProps = {buttonNames:["First","Secound","Third"]}
    return (
        <div {...styles}>
          {fakeProps.buttonNames.map((name,index)=>(
            <Tab name={name} 
              onClick={this.handleClick} 
              key={name} 
              active={this.state.activeButton==name}
              zIndex={fakeProps.buttonNames.length -index}
              />
          ))}
        </div>
    );
  }
}


export {Tabs}