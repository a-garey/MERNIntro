import React, { useState} from 'react';

const BoxDisplay = props => {

    return (
        <div>
           <h3>Your Box</h3>
           <p>
               { props.box }
           </p>

        
            
        </div>
    )
}

export default BoxDisplay;
