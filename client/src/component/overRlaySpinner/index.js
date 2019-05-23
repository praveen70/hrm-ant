import React from 'react';
import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader'
import './overRlaySpinner.css'

const Overlay = () =>(
    <OverlayLoader 
              color={'red'} // default is white
              loader="ScaleLoader" // check below for more loaders
              text="Loading... Please wait!" 
              active={true} 
              backgroundColor={'black'} // default is black
              opacity=".4" // default is .9  
              >
              
 </OverlayLoader>
 );
 export default Overlay;
