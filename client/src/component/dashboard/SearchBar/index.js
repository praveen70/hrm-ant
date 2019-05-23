import React from "react";
import {
    GET_All_EMPLOYEES,

  

  } from "../../../queries/index";
import {  Query } from "react-apollo";

import { Input } from 'antd';

const Search = Input.Search;

const SearchBar =()=>{
    return (
    <Query query={GET_All_EMPLOYEES}>
    {({ data, loading }) => {
        console.log("From serach box",data.getAllEmployee)
            if (loading) return <div>loading</div>;
            return(
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                    />
            {  data.getAllEmployee.map( ( category, index )=> {
              
              return (
                <div style={{ marginBottom: '30px' }} kye={index}>
                 
                  <div><h1 style={{paddingLeft:50}}>{ category.firstName }</h1></div>
                  

                </div>
              )
            }) }







          </div>
          
          )
   
}}
  </Query>
  )

};

export default SearchBar;