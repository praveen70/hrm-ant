import React from 'react';
import { Alert} from 'antd';


class Notification extends React.Component{

    
    render(){
        
        return(
            <div>
                <Alert message="Please Logout" type="warning" />
            </div>

        );
    }
}

export default Notification;