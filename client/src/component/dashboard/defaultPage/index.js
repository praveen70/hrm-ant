import React from 'react';
import axios from 'axios';
import { Email, Item, Span, A, renderEmail } from 'react-html-email'


import Home from "../home/home";

class Allemployee extends React.Component {
    constructor(props){
        super()
        this.state={ 
            items:''
        }
    }
    // curl 'https://563127577928998:4M5csBAMHqHVSiLXZb8TxfUme5c@api.cloudinary.com/v1_1/doyawdeun/resources/image'

  
    // https://api.cloudinary.com/v1_1/doyawdeun/resources/samples

    // CLOUDINARY_URL=cloudinary://563127577928998:4M5csBAMHqHVSiLXZb8TxfUme5c@doyawdeun
    // https://api.cloudinary.com/v1_1/:doyawdeun/:action

    componentDidMount =( ) =>{
        axios.get(`https://api.cloudinary.com/v1_1/:doyawdeun/`)
        .then(function (response) {
            // handle success
            console.log(response.data);
           
          })

        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //         console.log("result",result)
        //       this.setState({
        //         isLoaded: true,
        //         items: result.data
        //       });
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {
        //       this.setState({
        //         isLoaded: true,
        //         error
        //       });
        //       console.log(this.state.items)
        //     }
            
        //   )
      }

    render(){
        console.log(this.state.items)
        return(
            <Home>
                <div>
                    <h1>Praveen</h1>
                    <image src={this.state.items}></image>
                   
    
                    
                </div>
            </Home>
        );
    }
}

export default Allemployee;