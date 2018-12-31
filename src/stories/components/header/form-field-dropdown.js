import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';



    const FormFieldDrop = (props) =>
    {   
        var stylesInput = css({
            textDecorations: 'none',
            color: 'black',
            border:'solid 3px black',
            backgroundColor: 'white',
            padding: rhythm(6),
            borderRadius: rhythm(0.4),
            fontSize: rhythm(1),
            minWidth: rhythm(6),
            });
            
            var stylesP = css({
                color: 'black',
                fontFamily: 'Avenir Next',
                marginBottom: rhythm(-0.03),
                paddingLeft: rhythm(0.2),
                marginBottom:rhythm(0.2),
                ' b': {
                fontWeight: '620',
                }
                });
                
 
     if (props.options) {      
        return(
            <div>
            <p {...stylesP}>{props.formInstructions }:</p>
                <select
                 {...stylesInput}
                  name={props.name}
                  value={props.value}
                  onChange={props.handleChange}
                  >
                  <option value="none" disabled>{props.placeholder}</option>
                  {props.options.map(option => {
                    return (
                      <option
                        key={option}
                        value={option}
                        label={option}>{option}
                      </option>
                    );
                  })}
                </select>
          </div>    
          );     }
          else 
          { return (<div>nothing</div>)}
   
  }


export {FormFieldDrop}