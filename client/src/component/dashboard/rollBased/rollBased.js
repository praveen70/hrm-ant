import React from 'react';
import Home from "../home/home";
import Modals from './index';
import './rollBased.css'

class Rollbased extends React.Component{
  
  
  render(){
    return(
      <Home>
      <div className="wrapper" style={{position:"absolute"}}>
        <Modals />
      </div>
      </Home>
    )
  }
}


export default Rollbased;
