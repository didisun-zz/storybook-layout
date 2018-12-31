import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';

var stylesInput = css({
textDecorations: 'none',
color: 'black',
border:'solid 3px black',
backgroundColor: 'white',
padding: rhythm(0.4),
borderRadius: rhythm(0.4),
minWidth: rhythm(10)
});

var stylesP = css({
    color: 'black',
    fontFamily: 'Avenir Next',
    marginBottom: rhythm(-0.03),
    paddingLeft: rhythm(0.2),
    ' b': {
    fontWeight: '620',
    }
    });


class FormFieldArea extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
        <div>
        <p {...stylesP}>{ this.props.formInstructions }:</p>
        <input type="text" placeholder={this.props.placeholder} {...stylesInput}></input>
        </div>
        );
  }
}

export {FormFieldArea}