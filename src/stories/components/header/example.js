"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';


        
const MenuLink = (props) => {
    console.log("adiiii")
    var styles = css({
        cursor:'pointer',
        margin: '0 20px',
        display:'inline-block',
        height: '100%',
        width: '100%'
        });
        
        var stylesA = css({
            textDecorations: 'none',
            color: 'white',
        
            
            });
        
        var stylesDrop = css({
        marginTop: rhythm(2),
        position: 'relative',
        
            });
        
        
        var stylesDropDiv = css({
            marginTop: rhythm(2),
            position: 'absolute',
             });

             var stylesItem = css({
                disply: props.active? 'none' : 'block',
                width: rhythm(6),
                height: rhythm(3),
                color: 'white',
                cursor: 'pointer',
                backgroundColor: 'black',
                ':hover':{
                    backgroundColor: 'orange'
                }
            });
debugger;
if (props.active ) {
    return (
        <div
 {...styles}>
        <a {...stylesA}>
        Menu
        </a>
        <div {...stylesDropDiv}>
            <div 
            {...stylesDrop} active={this.state.active} >     
                    <div>
                        <div {...stylesItem}>Item 1</div>
                        <div {...stylesItem}>Item 2</div>
                        <div {...stylesItem}>Item 3</div>
                        <div {...stylesItem}>Item 4</div>
                     </div>
             </div>
        </div>
        </div>  
          );
}
else {
  return (
    <div
    {...styles}>
           <a {...stylesA}>
           Menu1dfdsfg
           </a>
  </div>  );

}


}

export {MenuLink}


