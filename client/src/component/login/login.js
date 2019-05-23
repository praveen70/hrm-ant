import { Form, Icon, Input, Button, Checkbox, message, notification } from 'antd';
import './index.css';
import React from 'react';
import { Row, Col } from 'antd';

import { withRouter } from 'react-router';
import { Mutation, Query } from 'react-apollo';
import { SIGNIN_USER, GET_ALL_USER, GET_CURRENT_USER } from '../../queries/index';
import Spinner from '../spinner/index';
import { Redirect } from 'react-router-dom';
import Errors from '../dashboard/error/index';

const FormItem = Form.Item;

const inintialState = {
	username: '',
	password: '',
	message: 'Sucessfuly Logged In ',
	loading: false,
	redirectToReferrer: false,
	

};

class Login extends React.Component {
	state = { ...inintialState };


	clearState = () => {
		this.setState({ ...inintialState });
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = (event, signinUser) => {
		event.preventDefault();
		this.setState({ isLoading: true }, () => {
			signinUser()
				.then(({ data }) => {
					this.setState({isLoggedIn: true});
					localStorage.setItem('token', data.signinUser.token);
					message.success(this.state.message);
				})
				.then(() => {
					this.setState({ loading: false });
					this.props.history.push('/home');
				})
				.catch(function(error) {
					message.error(error.message);

					// console.log('i am error', error.message);
				});
				

			this.clearState();
		});
	};

	validateForm = () => {
		const { username, password } = this.state;
		const isInvalid = !username || !password;
		return isInvalid;
	};

	isAuthenticated() {
		const token = localStorage.getItem('token');
		return token && token.length > 10;
	}

	render() {
		
		// const isAuthenticated = this.isAuthenticated()
		if (localStorage.getItem('token')) {
			return <Redirect to="/home" />;
		}
		const { username, password, loading } = this.state;

	
		return (
			<div className="container">
				<Query query={GET_CURRENT_USER } refetchQueries={() => [ { query: GET_CURRENT_USER } ]}>
					{({ data, loading }) => {
						// console.log("login", data)
						if (loading) 	
							return (
								<div>
									<Spinner />
								</div>
							);

						return (
							<div>
								<Row>
									<Col span={12} offset={6}>
										<div className="form" style={{ display: 'flex' }}>
											<div style={{ margin: 130 }}>
												<Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
													{(signinUser, { data, loading, error }) => {
														if (loading) {
															return <Spinner />;
														}
														return (
															<Form
																className="login-form"
																style={{ width: 400, backgroundColor: 'white' }}
																onSubmit={(event) =>
																	this.handleSubmit(event, signinUser)}
															>
																<div style={{ paddingTop: 30 }}>
																	<strong>
																		<span
																			className="login100-form-title p-b-51"
																			style={{ paddingLeft: 80 }}
																		>
																			<img style={{ width: 80 }} src={require('../image/logo.jpg')} alt="" />
																			Signin
																		</span>
																	</strong>
																</div>
																<FormItem style={{ paddingLeft: 50, paddingTop: 50 }}>
																	<FormItem>
																		<Input
																			className="input-sigin"
																			name="username"
																			value={username}
																			onChange={(event) =>
																				this.handleChange(event)}
																			prefix={
																				<Icon
																					type="user"
																					style={{ color: 'rgba(0,0,0,.25)' }}
																				/>
																			}
																			placeholder="Username"
																		/>
																	</FormItem>
																	<FormItem>
																		<Input
																			className="input-sigin"
																			name="password"
																			value={password}
																			onChange={(event) =>
																				this.handleChange(event)}
																			prefix={
																				<Icon
																					type="lock"
																					style={{ color: 'rgba(0,0,0,.25)' }}
																				/>
																			}
																			type="password"
																			placeholder="Password"
																		/>
																	</FormItem>
																</FormItem>
																<FormItem>
																	<Checkbox
																		className="checkBox"
																		style={{ float: 'left' }}
																	>
																		Remember me
																	</Checkbox>
																</FormItem>

																<FormItem style={{ paddingLeft: 80 }}>
																	<Button
																		type="primary"
																		htmlType="submit"
																		className="login-form-button"
																		disabled={loading || this.validateForm()}
																		style={{ width: 210, paddingLeft: 10 }}

																		
																	>
																		<Icon type="login" />
																		{/* Sign{loading && 'ing'} */}
																		Sign in
																	</Button>

																	<FormItem>
											
																		{error && <Errors error={error} />}
																	</FormItem>
																</FormItem>
																<FormItem className="register">
																	<a href="/CreateEmployee" style={{ float: 'left' }}>
																		Create Employee!
																	</a>
																</FormItem>
															</Form>
														);
													}}
												</Mutation>
											</div>
										</div>
									</Col>
								</Row>
							</div>
						);
					}}
				</Query>
			</div>
		);

	
	}
}

export default withRouter(Login);
