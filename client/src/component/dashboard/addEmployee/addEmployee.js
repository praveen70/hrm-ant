import React from "react";
import { withRouter } from "react-router";
import Home from "../home/home";
import { Row, Col, Form, Icon, Input, Button, Switch } from "antd";
import { Steps } from "antd";

const Step = Steps.Step;
const FormItem = Form.Item;

class Addemployee extends React.Component {
  state = {
    firstname: "",
    middilenae: "",
    lastname: "",
    gender: "",
    email: "",
    mobilenumber: "",
    address: "",
    state: ""
  };
  onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
  };
  render() {
    return (
      <div>
        <Steps>
          <Step
            status="finish"
            title="Personal Information"
            icon={<Icon type="user" />}
          />
          <Step
            status="finish"
            title="Employee Job"
            icon={<Icon type="solution" />}
          />
          <Step
            status="process"
            title="Previous Company Detiels"
            icon={<Icon type="loading" />}
          />
          <Step
            status="wait"
            title="Citizenship / Passport"
            icon={<Icon type="smile-o" />}
          />
        </Steps>
        <Row type="flex" justify="start">
          <Col span={10}>
            <Form>
              <h6>Epmloyee Information</h6>
              <FormItem>
                <Input
                  className="addForm"
                  name="firstname"
                  placeholder="FirstName"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <Input
                  name="middilname"
                  placeholder="middilname"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <Input name="lastname" placeholder="lastname" />
              </FormItem>
              <FormItem>
                <span>Gender</span>
                <Switch defaultChecked onChange={this.onChange} />
                Male
                <Switch onChange={this.onChange} />
                Female
              </FormItem>
              <FormItem>
                <Input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <Input
                  name="mobilenumber"
                  placeholder="mobilenumber"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <Input
                  name="address"
                  placeholder="address"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <Input
                  name="state"
                  placeholder="state"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Addemployee);
