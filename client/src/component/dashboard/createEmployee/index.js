import React from 'react';
import { withRouter } from 'react-router';
import { Mutation } from 'react-apollo';
import { POST_EMPLOYEE_INFORMATION } from '../../../queries/index';

import Home from '../home/home';
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
	Col,
	Card,
	notification,
	message
} from 'antd';
import Spinner from '../../spinner/index';
import Professionalinformation from '../employeeProfessionalInfo/index';
import Educationinformation from '../employeeEducationInformation/index';
import Dropzone from 'react-dropzone';
import { uploadFileMutation } from '../../../queries/index';
import Documents from '../documents/index';
import './createEmployee.css';
import { StickyContainer, Sticky } from 'react-sticky';
import Errors from '../error/index';
// import Error from '../notification'

const { RangePicker } = DatePicker;

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const initialState = {
	loading: false,
	iconLoading: false,
	firstName: '',
	firstNameError: '',
	middileName: '',
	middileNameError: '',
	lastName: '',
	lastNameError: '',
	gender: '',
	genderError: '',
	dob: '',
	dobError: '',
	maritalStatus: '',
	maritalStatusError: '',
	mobileNumber: '',
	mobileNumberError: '',
	email: '',
	emailError: '',
	address: '',
	addressError: '',
	state: '',
	stateError: '',
	title: '',
	titleError: '',
	previousCompanyName: '',
	previousCompanyNameError: '',
	empId: '',
	empIdError: '',
	supervisor: '',
	supervisorError: '',
	workLocation: '',
	workLocationError: '',
	emailProfessional: '',
	emailProfessionalError: '',
	workNumber: '',
	workNumberError: '',
	startDate: '',
	startDateError: '',
	salary: '',
	salaryError: '',
	course: '',
	courseError: '',
	courseType: '',
	courseTypeError: '',
	institution: '',
	institutionError: '',
	location: '',
	locationError: '',
	yearofPassing: '',
	yearOfPassingError: '',
	skills: '',
	skillsError: '',
	secondAddress: '',
	secondAddressError: '',
	sslc: '',
	sslcError: '',
	puc: '',
	pucError: '',
	department: '',
	departmentError: '',
	error: '',
	errorMessage: false
};
class Employee extends React.Component {
	state = { ...initialState };

	clearState = () => {
		this.setState({ ...initialState });
	};

	enterLoading = () => {
		this.setState({ loading: true });
	};

	enterIconLoading = () => {
		this.setState({ iconLoading: true });
	};

	handleChange = (value) => {
		console.log(`selected ${value}`);
		this.setState({ maritalStatus: value });
	};
	yearOfPassing = (date, dateString) => {
		console.log(dateString);

		this.setState({ yearofPassing: dateString });
	};

	stateChange = (value) => {
		console.log(`selected ${value}`);
		this.setState({ state: value });
	};

	inputChange = (event) => {
		const { name, value } = event.target;
		//console.log(name, value);
		this.setState({ [name]: value });
	};

	openNotification = () => {
		notification.open({
			message: 'Sucess',
			description: 'sucessfuly Added Employee',
			style: {
				width: 600,
				marginLeft: 335 - 600
			}
		});
	};

	handleSubmit = (event, addEmployee) => {
		this.validate();
		event.preventDefault();
		this.enterIconLoading();
		addEmployee()
			.then((data) => {
				// console.log("i am from handle submit",data);
				message.loading('Action in progress..', 2.5).then(() => message.success('Sucessfully Added Employee'));

				this.clearState();
			})
			.catch(function(error) {
				console.log(error.message);
				message.loading('Action in progress..', 2.5).then(() => message.error('Unable To Add Employee'));
			});
	};
	isAuthenticated = () => {
		const token = localStorage.getItem('token');
		return token && token.length > 10;
	};


	validate = () => {
		const {
			firstName,
			middileName,
			lastName,
			dob,
			gender,
			email,
			maritalStatus,
			mobileNumber,
			address,
			secondAddress,
			state,
			title,
			empId,
			department,
			supervisor,
			emailProfessional,
			skills,
			previousCompanyName,
			workLocation,
			workNumber,
			salary,
			institution,
			course,
			courseType,
			location,
			sslc,
			startDate,
			yearofPassing,
			puc
		} = this.state;
	

		if (!firstName) {
			this.setState({ firstNameError: 'First Name is Required' });
		}
		if (!middileName) {
			this.setState({ middileNameError: 'Middile Name is Required' });
		}
		if (!lastName) {
			this.setState({ lastNameError: 'Last Name is Required' });
		}
		if (!dob) {
			this.setState({ dobError: 'Date Of Birth is Required' });
		}
		if (!gender) {
			this.setState({ genderError: 'Gender is Required' });
		}
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(email)) {
			this.setState({ emailError: 'Email is Required' });
		}
		if (!maritalStatus) {
			this.setState({ maritalStatusError: 'Marital Status is Required' });
		}
		if (!mobileNumber) {
			this.setState({ mobileNumberError: 'Mobile Number is Required' });
		}
		if (!address) {
			this.setState({ addressError: 'Address is Required' });
		}
		if (!secondAddress) {
			this.setState({ secondAddressError: 'Address2 is Required' });
		}
		if (!secondAddress) {
			this.setState({ stateError: 'State is Required' });
		}
		if (!title) {
			this.setState({ titleError: 'Title is Required' });
		}
		if (!empId) {
			this.setState({ empIdError: 'Title is Required' });
		}
		if (!department) {
			this.setState({ departmentError: 'Department is Required' });
		}
		if (!supervisor) {
			this.setState({ supervisorError: 'Supervisor is Required' });
		}
		if (!emailProfessional) {
			this.setState({ emailProfessionalError: 'Professional Email  is Required' });
		}
		if (!skills) {
			this.setState({ skillsError: 'Skills  is Required' });
		}
		if (!previousCompanyName) {
			this.setState({ previousCompanyNameError: 'previous CompanyName  is Required' });
		}
		if (!workLocation) {
			this.setState({ workLocationError: 'Work Location  is Required' });
		}
		if (!workNumber) {
			this.setState({ workNumberError: 'Work Number  is Required' });
		}
		if (!salary) {
			this.setState({ salaryError: 'salary  is Required' });
		}
		if (!institution) {
			this.setState({ institutionError: 'institution  is Required' });
		}
		if (!course) {
			this.setState({ courseError: 'ourse  is Required' });
		}
		if (!courseType) {
			this.setState({ courseTypeError: 'Course Type  is Required' });
		}
		if (!location) {
			this.setState({ locationError: 'Location  is Required' });
		}
		if (!sslc) {
			this.setState({ sslcError: 'sslc  is Required' });
		}
		if (!startDate) {
			this.setState({ startDateError: 'Start Date  is Required' });
		}
		if (!yearofPassing) {
			this.setState({ yearOfPassingError: 'Year of Passing  is Required' });
		}
		if (!puc) {
			this.setState({ pucError: 'puc  is Required' });
		}
	
		// const isInvalid = !firstName || !middileName || !lastName || !dob || !gender || !email || !maritalStatus || !mobileNumber || !address|| !secondAddress || !state || !title || !empId || !department || !supervisor || !emailProfessional || !skills || !previousCompanyName || !workLocation || !workNumber || !salary || !institution || !course || !courseType  || !location || !sslc|| !startDate || !yearofPassing || !puc
		//       return isInvalid;


			// if(!this.state.firstName, !this.state.middileName, !this.state.lastName,!this.state.dob,!this.state.gender,!this.state.email,!this.state.maritalStatus,!this.state.mobileNumber,!this.state.address,!this.state.secondAddress,!this.state.state,!this.state.title,!empId,!this.state.department,!this.state.supervisor,!this.state.emailProfessional,!this.state.skills,!this.state.previousCompanyName,!this.state.workLocation,!this.state.workNumber,!this.state.salary,!this.state.institution,!this.state.course,!this.state.courseType,!this.state.location,!this.state.sslc,!this.state.startDate,!this.state.yearofPassing,!this.state.puc ){
		//   this.setState({ errorMessage: true });
		//   return;
		// }
	};

	onChange = (date, dateString) => {
		console.log(dateString);
		this.setState({ dob: dateString });
	};
	startDate = (date, dateString) => {
		console.log(dateString);
		this.setState({ startDate: dateString });
	};
	render() {
		// let message = this.state.error;
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

		const {
			firstName,
			middileName,
			lastName,
			dob,
			gender,
			email,
			maritalStatus,
			mobileNumber,
			address,
			secondAddress,
			state,
			title,
			empId,
			department,
			supervisor,
			emailProfessional,
			skills,
			previousCompanyName,
			workLocation,
			workNumber,
			salary,
			institution,
			course,
			courseType,

			location,
			sslc,
			startDate,
			yearofPassing,
			puc
		} = this.state;
		// const renderTabBar = (props, DefaultTabBar) => (
		// 	<Sticky bottomOffset={80}>
		// 		{({ style }) => <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />}
		// 	</Sticky>
		// );

		return (
		<div>
					<Mutation
								mutation={POST_EMPLOYEE_INFORMATION}
								variables={{ ...this.state }}
							>
								{(addEmployee, { data, loading, error }) => {
									if (loading) {
										return (
											<div>
												<Spinner />
											</div>
										);
									}

									return (
										<Home>
		
									{/* <StickyContainer>
										<Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
											<TabPane tab="Employee Details" key="1" style={{ height: 1500 }}> */}
												<Card title="Personal Information" bordered={false}>
													<Form layout="vertical" hideRequiredMark onSubmit={(event) => this.handleSubmit(event, addEmployee)}>
														<Row gutter={16}>
															<Col lg={6} md={12} sm={24}>
																<Form.Item label={fieldLabels.name}>
																		<Input
																		name="firstName"
																		value={firstName}
																		placeholder="Firstaname"
																		onChange={(event) => this.inputChange(event)}
																	/>
																	<span className="span">
																	{this.state.firstNameError}
																</span>
															</Form.Item>
														</Col>
															<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name3}>
																<Input
																	type="text"
																	value={middileName}
																	name="middileName"
																	placeholder="Middilename"
																	// style={{ width: 370 }}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">
																	{this.state.middileNameError}
																</span>
															</Form.Item>
														</Col>

														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.owner}>
																<Input
																	name="lastName"
																	value={lastName}
																	type="text"
																	placeholder="Lastname"
																	// style={{ width: 370 }}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.lastNameError}</span>
															</Form.Item>
														</Col>
													</Row>
													<Row gutter={16}>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.approver}>
																<RadioGroup
																	name="gender"
																	value={gender}
																	onChange={(event) => this.inputChange(event)}
																>
																	<Radio value="male">Male</Radio>
																	<Radio value="female">Female</Radio>
																	<Radio value="others">Others</Radio>
																</RadioGroup>
																<span className="span">{this.state.genderError}</span>
															</Form.Item>
														</Col>

														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name4}>
																<DatePicker
																	onChange={this.onChange}
																	// style={{ width: 370 }}
																/>
																<span className="span">{this.state.dobError}</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name5}>
																<Select
																	defaultValue="NONE"
																	// style={{ width: 370 }}
																	onChange={this.handleChange}
																>
																	<Option value="single">Single</Option>
																	<Option value="married">Married</Option>
																	<Option value="widowed">Widowed</Option>
																	<Option value="divroced">Divroced</Option>
																</Select>
																<span className="span">
																	{this.state.maritalStatusError}
																</span>
															</Form.Item>
														</Col>
													</Row>
													<Row gutter={16}>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name14}>
																<Input
																	name="mobileNumber"
																	value={mobileNumber}
																	type="text"
																	placeholder="MobileNumber"
																	position="fixed"
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">
																	{this.state.mobileNumberError}
																</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name15}>
																<Input
																	name="email"
																	value={email}
																	type="email"
																	placeholder="Email"
																	// style={{ width: 370 }}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.emailError}</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name16}>
																<Input
																	name="address"
																	value={address}
																	type="text"
																	placeholder="Address"
																	// style={{ width: 370 }}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.addressError}</span>
															</Form.Item>
														</Col>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name17}>
																<Input
																	name="secondAddress"
																	value={secondAddress}
																	type="text"
																	placeholder="Address2"
																	position="fixed"
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">
																	{this.state.secondAddressError}
																</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name18}>
																<Select
																	defaultValue="NONE"
																	name="state"
																	value={state}
																	// style={{ width: 370 }}
																	onChange={this.stateChange}
																>
																	<Option value="Karnataka">Karnataka</Option>
																	<Option value="Kerala">Kerala</Option>
																	<Option value="Tamilnadu">Tamilnadu</Option>
																	<Option value="Andhrapradesh">Andhrapradesh</Option>
																</Select>
																<span className="span">{this.state.stateError}</span>
															</Form.Item>
														</Col>
													</Row>

													<FormItem />
												</Form>
											</Card>
											<Card title="Professional Information" bordered={false}>
												<Form layout="vertical" hideRequiredMark>
													<Row gutter={16}>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name2}>
																<Input
																	placeholder="Title"
																	name="title"
																	position="fixed"
																	value={title}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.titleError}</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name6}>
																<Input
																	placeholder="PreviousCompanyName"
																	value={previousCompanyName}
																	// style={{ width: 370 }}
																	name="previousCompanyName"
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">
																	{this.state.previousCompanyNameError}
																</span>
															</Form.Item>
														</Col>

														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.type}>
																<Input
																	type="text"
																	name="empId"
																	value={empId}
																	onChange={(event) => this.inputChange(event)}
																	placeholder="Employeeid"
																	// style={{ width: 370 }}
																/>
																<span className="span">{this.state.empIdError}</span>
															</Form.Item>
														</Col>
													</Row>
													<Row gutter={16}>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name7}>
																<Input
																	type="text"
																	value={supervisor}
																	name="supervisor"
																	position="fixed"
																	onChange={(event) => this.inputChange(event)}
																	placeholder="Supervisor"
																/>
																<span className="span">
																	{this.state.supervisorError}
																</span>
															</Form.Item>
														</Col>

														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name8}>
																<Input
																	type="text"
																	name="department"
																	value={department}
																	onChange={(event) => this.inputChange(event)}
																	placeholder="Department"
																	// style={{ width: 370 }}
																/>
																<span className="span">
																	{this.state.departmentError}
																</span>
															</Form.Item>
														</Col>

														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name9}>
																<Input
																	type="text"
																	name="workLocation"
																	value={workLocation}
																	onChange={(event) => this.inputChange(event)}
																	placeholder="Work Location"
																	// style={{ width: 370 }}
																/>
																<span className="span">
																	{this.state.workLocationError}
																</span>
															</Form.Item>
														</Col>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name10}>
																<Input
																	type="email"
																	name="emailProfessional"
																	value={emailProfessional}
																	position="fixed"
																	onChange={(event) => this.inputChange(event)}
																	placeholder="Email"
																/>
																<span className="span">
																	{this.state.emailProfessionalError}
																</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name11}>
																<Input
																	type="text"
																	name="workNumber"
																	value={workNumber}
																	onChange={(event) => this.inputChange(event)}
																	placeholder="Worknumber"
																	// style={{ width: 370 }}
																/>
																<span className="span">
																	{this.state.workNumberError}
																</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name12}>
																<DatePicker
																	onChange={this.startDate}
																	// style={{ width: 370 }}
																/>
																<span className="span">
																	{this.state.startDateError}
																</span>
															</Form.Item>
														</Col>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name13}>
																<Input
																	type="text"
																	placeholder="$"
																	position="fixed"
																	name="salary"
																	value={salary}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.salaryError}</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name19}>
																<textarea
																	type="text"
																	style={{ width: 370, height: 90 }}
																	name="skills"
																	position="fixed"
																	value={skills}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.skillsError}</span>
															</Form.Item>
														</Col>
													</Row>

													<FormItem />
												</Form>
											</Card>
											<Card title="Education Information" bordered={false}>
												<Form layout="vertical" hideRequiredMark>
													<Row gutter={16}>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name20}>
																<Input
																	type="text"
																	placeholder="sslc"
																	// style={{ width: 370 }}
																	name="sslc"
																	value={sslc}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.sslcError}</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name21}>
																<Input
																	type="text"
																	placeholder="puc"
																	// style={{ width: 370 }}
																	name="puc"
																	value={puc}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.pucError}</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name22}>
																<Input
																	type="text"
																	placeholder="Course"
																	// style={{ width: 370 }}
																	name="course"
																	value={course}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.courseError}</span>
															</Form.Item>
														</Col>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name23}>
																<Input
																	type="text"
																	placeholder="Coursetype"
																	// style={{ width: 370 }}
																	name="courseType"
																	value={courseType}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">
																	{this.state.courseTypeError}
																</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name24}>
																<Input
																	type="text"
																	placeholder="Institution"
																	// style={{ width: 370 }}
																	name="institution"
																	value={institution}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">
																	{this.state.institutionError}
																</span>
															</Form.Item>
														</Col>
														<Col
															xl={{ span: 6, offset: 2 }}
															lg={{ span: 10 }}
															md={{ span: 24 }}
															sm={24}
														>
															<Form.Item label={fieldLabels.name25}>
																<Input
																	type="text"
																	placeholder="Location"
																	// style={{ width: 370 }}
																	name="location"
																	value={location}
																	onChange={(event) => this.inputChange(event)}
																/>
																<span className="span">{this.state.locationError}</span>
															</Form.Item>
														</Col>
														<Col lg={6} md={12} sm={24}>
															<Form.Item label={fieldLabels.name26}>
																<DatePicker
																	onChange={this.yearOfPassing}
																	// style={{ width: 370 }}
																	required
																/>
																<span className="span">
																	{this.state.yearOfPassingError}
																</span>
															</Form.Item>
														</Col>
													</Row>
												</Form>
											</Card>

											<div>
												<FormItem style={{ paddingLeft: 40 }}>
													<Button
														type="primary"
														//  disabled={ loading || this.validate()}
														//  loading={this.state.iconLoading}
														onClick={(event) => this.handleSubmit(event, addEmployee)}
													>
													Submit{loading && 'ing'}
														
													</Button>
													{/* { error && <Error error={ error} />} */}
												</FormItem>
											</div>
											{/* <Errors err={error}/> */}
										{/* </Form> */}
										{/* </TabPane>
									</Tabs>
								</StickyContainer> */}
							</Home>
										
									);
								}}
							</Mutation>
							</div>

		);
	}
}

export default withRouter(Employee);
