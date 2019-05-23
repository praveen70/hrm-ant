import React from "react";
import Home from "../home/home";
import "./employeeEducationaInformation.css";
import { withRouter } from "react-router";
import {
  Form,
  Select,
  Input,
  Button,
  Radio,
  Icon,
  DatePicker,
  Row,
  Col
} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class Educationinformation extends React.Component {
  state = {
      sslc:'',
      puc:'',
    course:'',
    coursetype:'',
    insitution:'',
    location:'',
    date:""

  }
  inputChange=event=>{
    const{name, value} = event.target;
    console.log(name,value);
    this.setState({[name]:value});
  }
  onChange = (date, dateString) => {
   //console.log(date);
    for(var dates of date){
      
      this.setState({date:dates._d});
    }

  };
  handleChangePage = () => {
    console.log("handleChangePage::");
    this.props.history.push("/documents");
  };
  handleChangePreviousPage = () => {
    console.log("handleChangePage::");
    this.props.history.push("/employeeProfessionalInfo");
  };
  render() {
    const{sslc,puc, course, coursetype, insitution, location} = this.state;
    //console.log("===>>>>>",this.state.date)
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
          <strong>Education Information</strong>
        </h1> */}
        <Form className="Tag" style={{marginTop:100}}>
         
            <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
                <FormItem label="Sslc" {...formItemLayout}>
                  <Input type="text" placeholder="sslc"  style={{ width: 400 }} name='sslc' value={sslc} onChange={event=>this.inputChange(event)} />
                </FormItem>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <FormItem label="puc" {...formItemLayout}>
                  <Input type="text" placeholder="puc"  style={{ width: 400 }} name='puc' value={puc} onChange={event=>this.inputChange(event)} />
                </FormItem>
              </Col>
              <Col xl={{ span: 5, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <FormItem label="Course" {...formItemLayout}>
                  <Input type="text" placeholder="Course"  style={{ width: 400 }} name='course' value={course} onChange={event=>this.inputChange(event)} />
                </FormItem>
              </Col>
              <Col lg={6} md={12} sm={24}>
                <FormItem label="Course Type" {...formItemLayout}>
                  <Input type="text" placeholder="1Coursetype"  style={{ width: 400 }} name='coursetype' value={coursetype} onChange={event=>this.inputChange(event)} />
                </FormItem>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <FormItem label="Institution" {...formItemLayout}>
                  <Input type="text" placeholder="Institution"  style={{ width: 400 }} name='insitution' value={insitution} onChange={event=>this.inputChange(event)} />
                </FormItem>
              </Col>
              <Col   xl={{ span: 5, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <FormItem label="Location" {...formItemLayout}>
                  <Input type="text" placeholder="Location"  style={{ width: 400 }} name='location'  value={location} onChange={event=>this.inputChange(event)} />
                </FormItem>
              </Col>
              <Col lg={6} md={12} sm={24}>
                <FormItem label="Year Of Passing" {...formItemLayout}>
                  <RangePicker onChange={this.onChange}  style={{ width: 400 }} />
                </FormItem>
              </Col>
            </Row>
          

          {/* <Button
                type="primary"
                htmlType="submit"
                className="prviousButton"
                onClick={event => this.handleChangePreviousPage(event)}
              >
                <Icon type="left" theme="outlined" />
                Previous
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="buttonTag"
                onClick={event => this.handleChangePage(event)}
              >
                <Icon type="right" theme="outlined" />
                Next
              </Button> */}
        </Form>
      </div>
    );
  }
}

export default withRouter(Educationinformation);
