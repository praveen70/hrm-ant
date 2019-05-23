import React from 'react';
import { Modal, Button, Input , Form, Select, message, Icon } from 'antd';
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../../queries/index";
import Spinner from '../../spinner/index';

const Option = Select.Option;

class Modals extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      email:'',
      password:'',
      rollBased:'',
      usernameError:'',
      // ModalText: 'Content of the modal',
      // visible: false,
     confirmLoading: false,
    }
  }

  fieldChange=(event)=>{
    const { name, value } = event.target;
    // console.log(name, value)
    this.setState({ [name]:value })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e, signupUser) => {
      this.validate()
      e.preventDefault();
      signupUser().then(data => {
        this.setState({

      confirmLoading: true,
    });
    
    message.success("Sucessfully Created Roll Type")

     console.log("i am from handle submit",data);

   })
   .catch(function (error) {
     console.log(error.message);
     message.error(error.message)
     // .then(() => message.error(error.message));

   });
      this.setState({
        visible: false,
      });


    }


    validate =() =>{
      const { username, email, password, rollBased } = this.state;
      if(!username){
        
        return false;
      }
      if(!email){
          return false;
        }
        if(!password){
            return false;
          }
          if(!rollBased){
              return false;
            }
      }




  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

 handleChange=(value)=>{
  console.log(`selected ${value}`);
  this.setState({ rollBased: value})
}

 handleBlur=()=>{
  console.log('blur');
}

 handleFocus=()=>{
  console.log('focus');
}

  render() {
    let { username, email, password , rollBased } = this.state;
    // console.log("i am dropdown", this.state.userType)

    const fieldLabels = {
      name1: "Username",
      name2: "Email",
      name3: "Password",
      name4: "Roll Based",

    }
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div className="wrapper">
          <div  style={{    textAlign:"-moz-initial"}}>
        <p><stong style={{fontFamily: '"Segoe UI Emoji', color:"##fa8c16", fontSize:"18px"}} >You Can Create Here Roll Based Employee
       
        </stong></p>
        {/* <Icon style={{paddingLeft:"100px"}} type="down-circle" /> */}
        <div>
       
      
        <img  src="https://img.icons8.com/office/48/000000/sort-down.png"></img>
                </div>
        </div>
      <Button type="primary" className="modals" onClick={this.showModal}  >
        Create Roll Based Employee
        </Button>
        <Mutation  mutation={SIGNUP_USER} variables={{username, email, password,rollBased }}>
        {(signupUser, { data,  loading, error }) => {
          if (loading) {
            return <div><Spinner /></div>;
          }

        return(
          <div>
            <Form onSubmit={event => this.handleSubmit(event, signupUser)}>

        <Modal
        
         title="Create Roll Based Employee"
         visible={this.state.visible}
         onOk={e=>this.handleOk(e, signupUser)}
         onCancel={this.handleCancel}
         disabled={ loading || this.validate()}
         >


          <Form.Item label={fieldLabels.name1}>
            <Input type="text"
            name="username"
            value={username}
            onChange={event => this.fieldChange(event)}
           placeholder="Username" />
          </Form.Item>
          <Form.Item label={fieldLabels.name2}>
            <Input type="email"
            name="email"
            value={email}
              onChange={event => this.fieldChange(event)}
             placeholder="Email" />
          </Form.Item>
          <Form.Item label={fieldLabels.name3}>
            <Input type="password"
            name="password"
            value={password}
              onChange={event => this.fieldChange(event)}
             placeholder="Password" />
             <span style={{color:'red'}}>{this.state.usernameError}</span>
          </Form.Item>
          <Form.Item label={fieldLabels.name4}>
          <Select
          defaultValue="NONE"
            showSearch
            style={{ width: 470 }}
            placeholder="Select a Roll Type"
            optionFilterProp="children"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="admin">Admin</Option>
            <Option value="user">user</Option>

          </Select>
          </Form.Item>

         

        </Modal>
       
        </Form>

      
        
        </div>
      );
    }}
          </Mutation>


      </div>
    );
  }
}

export default Modals;
