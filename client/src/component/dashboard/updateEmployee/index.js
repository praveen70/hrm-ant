import React from 'react';
import {
	Form,
	Icon,
	Input,
	Button,
	Col,
	Row,
	Card,
	Select,
	Upload,
	Radio,
	DatePicker,
	notification,
	message
} from 'antd';
import { Query, Mutation } from 'react-apollo';

import Home from '../home/home';
import { withRouter } from 'react-router';
import Spinner from '../../spinner/index';
import { GET_EMPLOYEE, UPDATE_EMPLOYE_BY_ID } from '../../../queries/index';
import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

class Updateemployee extends React.Component {
	state = {};

	inputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	yearOfPassing = (date, dateString) => {
		this.setState({ yearofPassing: dateString });
	};
	startDate = (date, dateString) => {
		console.log(dateString);
		this.setState({ startDate: dateString });
	};
	stateChange = (value) => {
		this.setState({ state: value });
	};
	yearOfPassing = (date, dateString) => {
		this.setState({ yearofPassing: dateString });
	};

	onChange = (date, dateString) => {
		this.setState({ dob: dateString });
	};

	handleSubmit = async (event, updateMutation) => {
		event.preventDefault();
		console.log(this.props.id);
		console.log(this.props.match.params._id);
		console.log('update');
		console.log(this.state);
		const res = await updateMutation({
			variables: {
				_id: this.props.match.params._id,
				...this.state
			}
		});
		message.success('Sucessfully Updated Employee');
		console.log('res', res);
		this.props.history.push('/allEmployeeTable');
	};

	handleChange = (value) => {
		console.log(`selected ${value}`);
		this.setState({ maritalStatus: value });
	};

	render() {
		//  const { firstName, middileName, lastName,dob,gender,email,maritalStatus,mobileNumber,address,secondAddress,state,title,empId,department,supervisor,emailProfessional,skills,previousCompanyName,workLocation,workNumber,salary,institution,course,courseType,location,sslc,startDate,yearofPassing,puc } = this.state;
		let { _id } = this.props.match.params;

		const fieldLabels = {
			name: 'Firstname',
			name3: 'Middilename',
			owner: 'Lastname',
			approver: 'Gender',
			name4: 'DOB',
			name5: 'Marital Status',
			name2: 'Title',
			name6: 'Previous Company',
			type: 'empId',
			name7: 'Supervisor',
			name8: 'Department',
			name9: 'Work Location',
			name10: 'Company Email',
			name11: 'Work Number',
			name12: 'Start Date',
			name13: 'Salary',
			name14: 'Mobile Number',
			name15: 'Email',
			name16: 'Address',
			name17: 'Address2',
			name18: 'State',
			name19: 'Skills',
			name20: 'Sslc',
			name21: 'Puc',
			name22: 'Course',
			name23: 'Coursetype',
			name24: 'Institution',
			name25: 'Location',
			name26: 'Year Of Passing'
		};
		return (
			<Query query={GET_EMPLOYEE} variables={{ _id: _id }}>
				{({ data, loading, error }) => {
					if (loading) return <Spinner />;

					return (
						<Mutation mutation={UPDATE_EMPLOYE_BY_ID} variables={{ _id: _id }}>
							{(updateEmployee, { _id, isLoading, error }) => {
								if (isLoading) return <Spinner />;
								return (
									<Home>
										{/* <div> */}
										<Form
											layout="vertical"
											hideRequiredMark
											onSubmit={(event) => this.handleSubmit(event, updateEmployee)}
										>
											<Card title="Personal Information" bordered={false}>
												<Row gutter={16}>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.name}>
															<Input
																name="firstName"
																onChange={(event) => this.inputChange(event)}
																style={{ width: '100%' }}
																placeholder="Firstaname"
																defaultValue={data.getEmployee.firstName}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name3}>
															<Input
																name="middileName"
																placeholder="Middilename"
																style={{ width: '100%' }}
																defaultValue={data.getEmployee.middileName}
																onChange={(event) => this.inputChange(event)}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 8, offset: 2 }}
														lg={{ span: 10 }}
														md={{ span: 24 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.owner}>
															<Input
																style={{ width: '100%' }}
																name="lastName"
																placeholder="Lastname"
																defaultValue={data.getEmployee.lastName}
																onChange={(event) => this.inputChange(event)}
															/>
														</Form.Item>
													</Col>
												</Row>
												<Row gutter={16}>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.approver}>
															<RadioGroup
																name="gender"
																style={{ width: '100%' }}
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.gender}
															>
																<Radio value="male">Male</Radio>
																<Radio value="female">Female</Radio>
																<Radio value="others">Others</Radio>
															</RadioGroup>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name4}>
															<DatePicker
																defaultValue={moment(`${data.getEmployee.dob}`)}
																onChange={this.onChange}
																style={{ width: '100%' }}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 8, offset: 2 }}
														lg={{ span: 10 }}
														md={{ span: 24 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name5}>
															<Select
																placeholder="Marital Status"
																onChange={this.handleChange}
																defaultValue={data.getEmployee.maritalStatus}
																style={{ width: '100%' }}
																name="maritalstatus"
															>
																<Option value="single">Single</Option>
																<Option value="married">Married</Option>
																<Option value="widowed">Widowed</Option>
																<Option value="divroced">Divroced</Option>
															</Select>
														</Form.Item>
													</Col>
												</Row>
												<Row gutter={16}>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.name14}>
															<Input
																onChange={(event) => this.inputChange(event)}
																name="mobileNumber"
																style={{ width: '100%' }}
																placeholder="Mobilenumber"
																defaultValue={data.getEmployee.mobileNumber}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name15}>
															<Input
																name="email"
																placeholder="Email"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.email}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 8, offset: 2 }}
														lg={{ span: 10 }}
														md={{ span: 24 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name16}>
															<Input
																name="address"
																placeholder="Address"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.address}
															/>
														</Form.Item>
													</Col>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.name17}>
															<Input
																onChange={(event) => this.inputChange(event)}
																name="secondAddress"
																style={{ width: '100%' }}
																placeholder="Address2"
																defaultValue={data.getEmployee.secondAddress}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name18}>
															<Select
																defaultValue={data.getEmployee.state}
																onChange={this.stateChange}
																name="state"
																style={{ width: '100%' }}
															>
																<Option value="Karnataka">Karnataka</Option>
																<Option value="Kerala">Kerala</Option>
																<Option value="Tamilnadu">Tamilnadu</Option>
																<Option value="Andhrapradesh">Andhrapradesh</Option>
															</Select>
														</Form.Item>
													</Col>
												</Row>
											</Card>
											<Card title="Professional Information" bordered={false}>
												<Row gutter={16}>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.name2}>
															<Input
																name="title"
																placeholder="Title"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.title}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name6}>
															<Input
																name="previousCompanyName"
																placeholder="Previous Company"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.previousCompanyName}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 8, offset: 2 }}
														lg={{ span: 10 }}
														md={{ span: 24 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.type}>
															<Input
																name="empId"
																placeholder="empId"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.empId}
															/>
														</Form.Item>
													</Col>
												</Row>
												<Row gutter={16}>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.name7}>
															<Input
																name="supervisor"
																placeholder="Supervisor"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.supervisor}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name8}>
															<Input
																name="department"
																placeholder="Department"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.department}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 8, offset: 2 }}
														lg={{ span: 10 }}
														md={{ span: 24 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name9}>
															<Input
																name="workLocation"
																placeholder="Work Location"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.workLocation}
															/>
														</Form.Item>
													</Col>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.name10}>
															<Input
																name="emailProfessional"
																placeholder=" Company Email"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.emailProfessional}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name11}>
															<Input
																name="workNumber"
																placeholder=" Work Number"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.workNumber}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 8, offset: 2 }}
														lg={{ span: 10 }}
														md={{ span: 24 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name12}>
															<DatePicker
																onChange={this.startDate}
																style={{ width: '100%' }}
																defaultValue={moment(`${data.getEmployee.startDate}`)}
															/>
														</Form.Item>
													</Col>
													<Col lg={6} md={12} sm={24}>
														<Form.Item label={fieldLabels.name13}>
															<Input
																name="salary"
																placeholder="Salary"
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.salary}
															/>
														</Form.Item>
													</Col>
													<Col
														xl={{ span: 6, offset: 2 }}
														lg={{ span: 8 }}
														md={{ span: 12 }}
														sm={24}
													>
														<Form.Item label={fieldLabels.name19}>
															<Input
																name="skills"
																placeholder="Skills"
																style={{ width: '100%' }}
																onChange={(event) => this.inputChange(event)}
																defaultValue={data.getEmployee.skills}
															/>
														</Form.Item>
													</Col>
												</Row>
											</Card>
											<Card title="Education Information" bordered={false}>
												<Form layout="vertical" hideRequiredMark>
													<Row gutter={16}>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name20}>
																<Input
																	name="sslc"
																	style={{ width: '100%' }}
																	placeholder="Sslc"
																	onChange={(event) => this.inputChange(event)}
																	defaultValue={data.getEmployee.sslc}
																/>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 8 }}
															md={{ span: 12 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name21}>
																<Input
																	name="puc"
																	placeholder="Puc"
																	style={{ width: '100%' }}
																	onChange={(event) => this.inputChange(event)}
																	defaultValue={data.getEmployee.puc}
																/>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 8, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name22}>
																<Input
																	style={{ width: '100%' }}
																	name="course"
																	placeholder="Course"
																	onChange={(event) => this.inputChange(event)}
																	defaultValue={data.getEmployee.course}
																/>
															</Form.Item>
														</Col>
													</Row>
													<Row gutter={16}>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name23}>
																<Input
																	style={{ width: '100%' }}
																	name="courseType"
																	placeholder="Course Type"
																	onChange={(event) => this.inputChange(event)}
																	defaultValue={data.getEmployee.courseType}
																/>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 8 }}
															md={{ span: 12 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name24}>
																<Input
																	style={{ width: '100%' }}
																	name="institution"
																	placeholder="Institution"
																	onChange={(event) => this.inputChange(event)}
																	defaultValue={data.getEmployee.institution}
																/>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 8, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name25}>
																<Input
																	style={{ width: '100%' }}
																	name="location"
																	placeholder="Location"
																	onChange={(event) => this.inputChange(event)}
																	defaultValue={data.getEmployee.location}
																/>
															</Form.Item>
														</Col>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name26}>
																{/* <Input name="yearOfPassing" style={{ width: '100%' }} placeholder="Year Of Passing" /> */}
																<DatePicker
																	onChange={this.yearOfPassing}
																	defaultValue={moment(
																		`${data.getEmployee.yearofPassing}`
																	)}
																	style={{ width: '100%' }}
																	required
																/>
															</Form.Item>
														</Col>
														{/* <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={fieldLabels.name15}>
                 <Input name="email" placeholder="Email" />
                </Form.Item>
              </Col> */}
													</Row>
												</Form>
											</Card>

											{/* // </div> */}

											<div>
												<FormItem style={{ paddingLeft: 10 }}>
													<Button
														type="primary"
														onClick={(event) => this.handleSubmit(event, updateEmployee)}
													>
														Sav {isLoading ? 'ing' : 'e'} Changes
													</Button>
												</FormItem>
											</div>
										</Form>
									</Home>
								);
							}}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default withRouter(Updateemployee);
