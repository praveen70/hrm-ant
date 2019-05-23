import React from "react";
import { Query } from "react-apollo";
import { Popover, Badge, Avatar } from "antd";
import { GET_CURRENT_USER } from "../../../queries/index";
import Spinner from "../../spinner/index";

class Popovers extends React.Component {
    
  signout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    const content = (
      <div>
        <p style={{ marginBottom: 0 }} onClick={event => this.signout(event)}>
          Signout
        </p>
      </div>
    );
    return (
      <Query query={GET_CURRENT_USER}>
        {({ data, loading }) => {
          if (loading) return <Spinner />;
          //   console.log("i am popover",data.getCurrentUser.rollBased)
          return (
            <div style={{float:"right"}}> 
              <Badge count={1}>
                <Avatar shape="square" icon="user" />
              </Badge>
              <Popover content={content} style={{ float: "right" }}>
                {data && data.getCurrentUser && data.getCurrentUser.rollBased}
              </Popover>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Popovers;
