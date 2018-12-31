import React from 'react'
import { css } from 'glamor'
import {rhythm} from '../../../typography.js'
import { FormFieldDrop } from './form-field-dropdown';
import { FormFieldArea } from './form-field-area';
import { FormFieldButton } from './FormButton.js';
import { Row, Col } from 'react-flexbox-grid';


var styleAll = css({
    fontFamily: 'Avenir Next',
    margin: rhythm(2),
    padding: rhythm(2),
    ' h2+p, h2': {
        textAlign: 'center' 
    }
});

var styleButtons = css({
    position :'absolute',
    right: 0,
    " button" :{
        marginLeft: rhythm(1)
    }
});

var styleH = css({
    fontWeight: '500'
    }
);

var styleHead = css({
    position :'relative',
    marginBottom: rhythm(3),

    }
);

var styleBody = css({
    position :'relative',
    }
);




class FormArea extends React.Component {
 
       
  render() {
    return (
        <div {...styleAll}>
        <div {...styleHead}>
        <h2 {...styleH}></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <div {...styleButtons}>
        <FormFieldButton text={'clear'}/>
        <FormFieldButton text={'sumbit'}/>
        </div>
        </div>
        <div {...styleBody}>
        <Row>
        <Col xs={4}>
        <FormFieldArea placeholder={'something'} formInstructions={'choose whatever'} />
        </Col>
        </Row>
        <Row>
        <Col xs={4}>
        <FormFieldArea placeholder={'something'} formInstructions={'choose whatever'} />
        </Col><Col xs={4}>
        <FormFieldArea placeholder={'something'} formInstructions={'choose whatever'} />
        </Col><Col xs={4}>
        <FormFieldArea placeholder={'something'} formInstructions={'choose whatever'} />
        </Col>
        </Row>
        <Row>
        <Col xs={4}>
        <FormFieldDrop formInstructions={'choose a number'} name ={'name'} value ={'value'} placeholder={'color'} options={['green','blue','red']} /> 
        </Col>   <Col xs={4}>
        <FormFieldDrop formInstructions={'choose a number'} name ={'name'} value ={'value'} placeholder={'number'} options={['1','2','3','4','5']} /> 
        </Col>
        </Row>

        </div>
        </div>
    );
  }
}

export {FormArea}