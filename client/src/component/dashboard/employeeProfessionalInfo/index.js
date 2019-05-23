import React from "react";
import { withRouter } from "react-router";
import Home from "../home/home";
import {
  Form,
  Select,
  Input,
  Button,
  Radio,
  Icon,
  DatePicker,
  Tabs,
  Row,
  Col
} from "antd";

import "./employeeProfessionalInfo.css";
import { StickyContainer, Sticky } from "react-sticky";
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class Professionalinformation extends React.Component {

  // state={
  //   title:'',
  //   employeeid:'',
  //   department:'',
  //   supervisor:'',
  //   companyemail:'',
  //   startDate:'',
  //   skills:'',
  //   previousCompany:'',
  //   worklocation:'',
  //   worknumber:'',
  //   salary:''
  // }



  inputChange=event=>{
    const{name, value} = event.target
    console.log(name, value);
    this.setState({[name]:value})
  }

  handleChangePage = () => {
    console.log("handleChangePage::");
    this.props.history.push("/employeeEducationInformation");
  };

  handleChangePreviousPage = () => {
    console.log("handleChangePage::");
    this.props.history.push("/createEmployee");
  };
  onChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({startDate:date._d})
  };
  render() {
    //console.log('i am data::::=>>>>>',this.props.orgs)
    const{ title, employeeid, department, supervisor, companyemail,startDate, previousCompany, worklocation, worknumber, salary } = this.props.orgs;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <div>
        {/* <h1>
          <strong>Professional Information</strong>
        </h1> */}
        <Form className="bodyTag" style={{marginTop:100}}>
          <Row  gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <FormItem label="Title" {...formItemLayout}>
                <Input placeholder="Title" style={{ width: 380 }} 
                  name='title'
                  value={title}
                  onChange={event=>this.inputChange(event)}
                />
              </FormItem>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <FormItem label="PreviousCompany" {...formItemLayout}>
                <Input
                  placeholder="Previouscompanyname"
                  value={previousCompany}
                  style={{ width: 380 }}
                  name='previousCompany'
                  onChange={event=>this.inputChange(event)}
                />
              </FormItem>
            </Col>

            <Col xl={{ span: 5, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <FormItem label="Employee Id" {...formItemLayout}>
                <Input
                  type="text"
                  name='employeeid'
                  value={employeeid}
                  onChange={event=>this.inputChange(event)}
                  placeholder="Employeeid"
                  style={{ width: 400 }}
                />
              </FormItem>
            </Col>
            <Col lg={6} md={12} sm={24}>
              <FormItem label="Supervisor" {...formItemLayout}>
                <Input
                  type="text"
                  value={supervisor}
                  name='supervisor'
                  onChange={event=>this.inputChange(event)}
                  placeholder="Supervisor"
                  style={{ width: 380 }}
                />
              </FormItem>
            </Col>

            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <FormItem label="Department" {...formItemLayout}>
                <Input
                  type="text"
                  name='department'
                  value={department}
                  onChange={event=>this.inputChange(event)}
                  placeholder="Department"
                  style={{ width: 380 }}
                />
              </FormItem>
            </Col>

            <Col xl={{ span: 5, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <FormItem label="Work Location" {...formItemLayout}>
                <Input
                  type="text"
                  name='worklocation'
                  onChange={event=>this.inputChange(event)}
                  placeholder="Work Location"
                  style={{ width: 400 }}
                />
              </FormItem>
            </Col>
            <Col lg={6} md={12} sm={24}>
              <FormItem label="Company Email" {...formItemLayout}>
                <Input
                  type="email"
                  name='companyemail'
                  value={companyemail}
                  onChange={event=>this.inputChange(event)}
                  placeholder="Email"
                  style={{ width: 380 }}
                />
              </FormItem>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <FormItem label="Work Number" {...formItemLayout}>
                <Input
                  type="text"
                  name='worknumber'
                  onChange={event=>this.inputChange(event)}
                  placeholder="Worknumber"
                  style={{ width: 380 }}
                />
              </FormItem>
            </Col>
            <Col xl={{ span: 5, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <FormItem label="Start Date" {...formItemLayout}>
                <DatePicker onChange={this.onChange} style={{ width: 400 }} />
              </FormItem>
            </Col>
            <Col lg={6} md={12} sm={24}>
              <FormItem label="Salary" {...formItemLayout}>
                <Input type="text" placeholder="$" style={{ width: 380 }} 
                   name='salary'
                  onChange={event=>this.inputChange(event)}
                />
              </FormItem>
            </Col>
            <Col  xl={{ span: 6, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <FormItem label="Skills" {...formItemLayout}>
                <textarea type="text" style={{ width: 380, height:90 }} 
                   name='skills'
                  onChange={event=>this.inputChange(event)}
                />
              </FormItem>
            </Col>
           
          </Row>

          <FormItem />
        </Form>
      </div>
    );
  }
}

export default withRouter(Professionalinformation);
