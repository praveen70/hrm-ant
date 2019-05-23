import React from "react";

import "./home.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Avatar,
  Badge,
  Popover,
  Tabs,
  Button
} from "antd";
import { Query } from "react-apollo";
import { GET_CURRENT_USER } from "../../../queries/index";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Spinner from "../../spinner/index";
import { Redirect } from "react-router-dom";
import Admin from "../span";
import Info from '../Info/index';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Employee from '../createEmployee/index';



const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends React.Component {
  state = {
    collapsed: false,
    redireact: false,
    isHidden: false
  };

  componentWillMount() {
    if (localStorage.getItem("token")) {
      console.log("call user");
    } else {
      this.setState({ redireact: true });
    }
  }
  onCollapse = collapsed => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };

  signout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && token.length > 10;
  };

  render() {
    // const isAuthenticated = this.isAuthenticated();

    console.log(this.props.match.url);
    if (this.state.redireact) {
      return <Redirect to={"/"} /> ;
    }

    const content = (
      <div>
        <p style={{ marginBottom: 0 }} onClick={event => this.signout(event)}>
          Signout
        </p>
      </div>
    );
    return (
      <Query query={GET_CURRENT_USER} refetchQueries={() => [ { query: GET_CURRENT_USER } ]}>
        {({ data, loading }) => {
        //  console.log("dtaaa", data.getCurrentUser)
          if (loading) return <Spinner />;
          // let userType = data.getCurrentUser.rollBased
          // console.log( "i am",userType)
          // if(data.getCurrentUser.rollBased && data.getCurrentUser.rollBased === 'admin') {

          if(data.getCurrentUser && data.getCurrentUser.rollBased && data.getCurrentUser.rollBased === 'admin'){
            return (
              <div>
                {/* { !isAuthenticated ? <Redirect to={{pathname:"/"}} />:( */}
                  {/* {user && user.length > 0 &&  user.map((item, index) => {
                     if(!item.rollBased === "user"){
                      return  <Route path="/createEmployee" component={Employee} />
                      ;
                 }else {
                     return (  */}
              
                 
                <Layout style={{ minHeight: "130vh" }}>
                  <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    breakpoint="lg"
                    width={220}
                  >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[""]} mode="inline">
                      <Link to="/home">
                        <img
                          className='image'
                          
                          src={require("../../image/logo.jpg")}
                          alt=""
                        />
                      </Link>
                      <span
                      className="span2"
                       
                      >
                        {!this.state.isHidden && <Admin />}
                        {/* {
                         this.state.show
                           ? <strong>ADMIN</strong>
                           : null
                       } */}
                      </span>
                      {/* <Menu.Item key="1">
                           <Link to="/defalutPage/index">
                           <Icon type="dashboard" />
                           <span>Dashboard</span>
       
                             </Link>
                         </Menu.Item> */}
                      <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                          </span>
                        }
                      >
                        <Menu.Item key="1">
                          <Link to="/defaultPage">
                            <Icon type="team" />
                            Employee
                          </Link>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub2"
                        title={
                          <span>
                            <Icon type="user" />
                            <span>Employee</span>
                          </span>
                        }
                      >
                        <Menu.Item key="2">
                          <Link to="/allEmployeeTable">
                            <Icon type="team" />
                            All Employee
                          </Link>
                        </Menu.Item>
  
                        <Menu.Item key="3">
                          <Link to="/createEmployee">
                            <Icon type="user-add" />
                            Add Employee
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <Link to="/rollBased">
                            <img
                            className='image2'
                              // style={{ width: 20 }}
                              src={require("../../image/rollbased.png")}
                              alt=""
                            />
                            Create Roll Based
                          </Link>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub3"
                        title={
                          <span>
                            <Icon type="team" />
                            <span>Team</span>
                          </span>
                        }
                      >
                        <Menu.Item key="5">Team 1</Menu.Item>
                        <Menu.Item key="6">Team 2</Menu.Item>
                      </SubMenu>
                      <Menu.Item key="7">
                        <Icon type="file" />
                        <span>File</span>
                      </Menu.Item>
                    </Menu>
                  </Sider>
                  <Layout>
                    <Header style={{ background: "#fff", padding: 0 }}>
                      {/* <Popovers style={{float:'right'}} /> */}
                      <div
                        className="key"
                        // style={{
                        //   float: "right",
                        //   paddingRight: "20px",
                        //   justifyContent: "space-between",
                        //   color: "rgba(0,0,0,.25)"
                        // }}
                      >
                        <Badge count={1}>
                          <Avatar shape="square" icon="user" />
                        </Badge>
  
                        <Popover content={content}>
                          {data && data.getCurrentUser && data.getCurrentUser.rollBased && data.getCurrentUser.rollBased}
                        </Popover>
                      </div>
                    </Header>
  
                    {/* <strong
                         style={{
                           paddingLeft: 1500,
                           position: "absolute",
                           paddingTop: 20,
                           color: "rgba(0,0,0,.25)"
                         }}
                       >
                         {/* <Icon type="user" style={{ color: 'rgba(0,0,0,.25)', paddingRight:10 }} /> */}
                    {/* <Avatar src="https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/39786171_1809476119162072_4401838722413232128_o.jpg?_nc_cat=100&_nc_ht=scontent.fblr5-1.fna&oh=2c6c942e960204d4df2f4351741cd3ea&oe=5CD54604" /> */}
  
                    {/* </strong>  */}
  
                    <Content style={{ margin: "0 16px" }}>
                      <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>
                         <a href={this.props.location.pathname}>{this.props.location.pathname}</a> 
                        </Breadcrumb.Item>
                        <Breadcrumb.Item />
                      </Breadcrumb>
  
                      <div
                        style={{
                          padding: 24,
                          background: "#fff",
                          height: "100%"
                        }}
                      >
                        {this.props.children}
                      </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                      HR ©2018 Created by Praveen MR{" "}
                      <a href="https://github.com/praveen70">
                        <Icon type="github" />
                      </a>
                    </Footer>
                  </Layout>
                </Layout>
  
  
              </div>
            );

          }else if(data.getCurrentUser && data.getCurrentUser.rollBased && data.getCurrentUser.rollBased === 'user'){
            return(
              <Layout style={{ minHeight: "130vh" }}>
              <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                breakpoint="lg"
                width={220}
              >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={[""]} mode="inline">
                  <Link to="/home">
                    <img
                      className='image'
                      
                      src={require("../../image/logo.jpg")}
                      alt=""
                    />
                  </Link>
                  <span
                  className="span2"
                   
                  >
                    {!this.state.isHidden && <Admin />}
                 
                  </span>
                
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                      </span>
                    }
                  >
                    <Menu.Item key="1">
                      <Link to="/defaultPage">
                        <Icon type="team" />
                        Employee
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                  {/* <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="user" />
                        <span>Employee</span>
                      </span>
                    }
                  >
                    <Menu.Item key="2">
                      <Link to="/allEmployeeTable">
                        <Icon type="team" />
                        All Employee
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                      <Link to="/createEmployee">
                        <Icon type="user-add" />
                        Add Employee
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to="/rollBased">
                        <img
                        className='image2'
                          // style={{ width: 20 }}
                          src={require("../../image/rollbased.png")}
                          alt=""
                        />
                        Create Roll Based
                      </Link>
                    </Menu.Item>
                  </SubMenu> */}
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="team" />
                        <span>Team</span>
                      </span>
                    }
                  >
                    <Menu.Item key="5">Team 1</Menu.Item>
                    <Menu.Item key="6">Team 2</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="7">
                    <Icon type="file" />
                    <span>File</span>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                <Header style={{ background: "#fff", padding: 0 }}>
                  {/* <Popovers style={{float:'right'}} /> */}
                  <div
                    className="key"
                    // style={{
                    //   float: "right",
                    //   paddingRight: "20px",
                    //   justifyContent: "space-between",
                    //   color: "rgba(0,0,0,.25)"
                    // }}
                  >
                    <Badge count={1}>
                      <Avatar shape="square" icon="user" />
                    </Badge>

                    <Popover content={content}>
                      {data &&
                        data.getCurrentUser &&
                        data.getCurrentUser.rollBased}
                    </Popover>
                  </div>
                </Header>

                {/* <strong
                     style={{
                       paddingLeft: 1500,
                       position: "absolute",
                       paddingTop: 20,
                       color: "rgba(0,0,0,.25)"
                     }}
                   >
                     {/* <Icon type="user" style={{ color: 'rgba(0,0,0,.25)', paddingRight:10 }} /> */}
                {/* <Avatar src="https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/39786171_1809476119162072_4401838722413232128_o.jpg?_nc_cat=100&_nc_ht=scontent.fblr5-1.fna&oh=2c6c942e960204d4df2f4351741cd3ea&oe=5CD54604" /> */}

                {/* </strong>  */}

                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>
                     <a href={this.props.location.pathname}>{this.props.location.pathname}</a> 
                    </Breadcrumb.Item>
                    <Breadcrumb.Item />
                  </Breadcrumb>

                  <div
                    style={{
                      padding: 24,
                      background: "#fff",
                      height: "100%"
                    }}
                  >
                    {this.props.children}
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  HR ©2018 Created by Praveen MR{" "}
                  <a href="https://github.com/praveen70">
                    <Icon type="github" />
                  </a>
                </Footer>
              </Layout>
            </Layout>
            )
          }
         

        }}
      </Query>
    );
  }
}

export default withRouter(Home);
