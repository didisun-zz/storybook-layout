import React from 'react'
import { FormFieldDrop } from './form-field-dropdown';



class SelectExample extends React.Component {
 
         

  render() {
    return (
        <FormFieldDrop formInstructions={'choose a number:'} name ={'name'} value ={'value'} options={['one','two','three']} /> 
    );
  }
}

export {SelectExample}