
"use strict";
import React from 'react'
import { css } from 'glamor'
import { rhythm } from '../../../typography';


        
const MenuLink = (props) => {
   
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
        position: 'relative',
        border: 'solid 3px black'

            });
        
        
        var stylesDropDiv = css({
            position: 'fixed',
             });

             var stylesItem = css({
                textAlign: 'center',
                margin: 'auto',
                disply: props.active? 'none' : 'block',
                color: 'black',
                padding: rhythm(1.3),
                cursor: 'pointer',
                backgroundColor: 'white',
                ':hover':{
                    backgroundColor: 'orange'
                }
            });

            var arrow = css({
                disply: 'block',
                transform:'rotate(90deg)',
            });

            


if (props.active ) {

    return (
        <div
 {...styles}>
        <a {...stylesA}>
        Menu <span>⌃</span>
        </a>
        <div {...stylesDropDiv}>
            <div {...stylesDrop} >               
                    <div {...stylesItem}>Item 1</div>
                    <div {...stylesItem}>Item 2</div>
                    <div {...stylesItem}>Item 3</div>
                    <div {...stylesItem}>Item 4</div>
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
           <span {...arrow}>   Menu ⌃</span>
           </a>
  </div>  );

}


}

export {MenuLink}
