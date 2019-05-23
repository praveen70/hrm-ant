import React from "react";
import { Card } from "antd";
import { Query } from "react-apollo";
import { GET_All_EMPLOYEES } from "../../../queries/index";
import Spinner from "../../spinner/index";
import { map } from "async";
const { Meta } = Card;

const Birthday = () => {
  return (
    <Query query={GET_All_EMPLOYEES}>
      {({ data, loading, error }) => {
        if (loading)
          return (
            <div>
              loading..
            </div>
          );
        if (error) return <div>error</div>;
        //console.log("i am villan",data.getAllEmployee.firstName);
        {/* const array  = data.map(datass=>datass.getAllEmployee.firstname);
        console.log(array) */}
        let dobData =[]
        for (var mapData of data.getAllEmployee) {
          console.log("i am data", mapData.dob);
          let arrayData = mapData.dob;
          dobData.push(arrayData)
        }
        console.log(dobData)

        
         
        return (
          <Card
            hoverable
            title="Ramya"
            bordered={false}
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
          
         
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        );
     
      }}
    </Query>
  );
};

export default Birthday;
