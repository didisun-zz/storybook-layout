import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';

var stylesInput = css({
textDecorations: 'none',
color: 'black',
border:'solid 3px black',
backgroundColor: 'white',
padding: rhythm(0.2),
borderRadius: rhythm(1),
marginTop: rhythm(0.5),
fontSize: rhythm(1.05),
fontFamily: 'Avenir Next',
paddingRight: rhythm(1.2),
paddingLeft: rhythm(1.2),
fontWeight: '500',
cursor: 'pointer',
textTransform: 'uppercase',
':hover': {
    backgroundColor: 'black',
    color: 'white'
},
':active': {
    backgroundColor: 'black',
    color: 'white'
}
});



class FormFieldButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
        <button type="text" {...stylesInput}>{this.props.text}</button>
        );
  }
}

export {FormFieldButton}
