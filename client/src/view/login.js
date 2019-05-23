import React from 'react';
import Login from '../component/login/login'
import  { Redirect } from 'react-router-dom';
import Employee from '../component/dashboard/createEmployee/index'

class Logins extends React.Component{
    isAuthenticated = () => {
        const token = localStorage.getItem("token");
        return token && token.length > 10;
          }
          handleSucessfulLogin =() =>{
              this.setState();
          }
    render(){
        const isAuthenticated = this.isAuthenticated();

        return(
            <div>
                 { isAuthenticated ? <Redirect to={{pathname: '/home'}} /> : (
                     <Login onSucessfulLogin={this.handleSucessfulLogin()}/>
                     
                 )}
                
            </div>

        )
    }
}

export default Logins;