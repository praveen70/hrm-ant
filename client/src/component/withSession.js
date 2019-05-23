import React from 'react';

import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from '../queries/index';
import Home from '../component/dashboard/home/home';

const withSession = Component => props => (
    <Query query={GET_CURRENT_USER} >
        {({ data, loading }) =>{
            // console.log(":data from with session:", data.getCurrentUser  );
            // let user = data.getCurrentUser  ;
            if(loading) return null;
            return(
                <div>
                    <Component  {...props} session={data}  /> 
                    {/* {
                        user && user.length && user.map((item, index) => {
                            if(!item.rollBased === "user"){
                                 return false;
                            }else {
                                return ( <Home />)
                            }
                                
                    })} */}

                </div>



                
            )
        }}


    </Query>
)

export default withSession;