import React from 'react';
import _ from 'lodash';
import { Table, Input, Button, Icon, Card, Popconfirm, message } from 'antd';
import './allEmployeTable.css';
import Home from '../home/home';
import { GET_All_EMPLOYEES, GET_EMPLOYEE } from '../../../queries/index';
import Spinner from '../../spinner/index';
import { Divider, Tag, notification } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import SearchBar from '../SearchBar/index';
import Delete from '../delete/index';
import { Query } from 'react-apollo';

const { Column, ColumnGroup } = Table;
const Search = Input.Search;

class Employetable extends React.Component {
	state = {
		UserId: '',
		search: ''
	};
	// deleteID = deleteEmployee => {
	//   const confirmDelete = window.confirm(
	//     "Are you sure want to delete this Employee?"
	//   );

	//   if (confirmDelete) {
	//     deleteEmployee()
	//       .then(({ data }) => {
	//         console.log(data);
	//         //this.setState({data:data});
	//       })

	//       .then(() =>
	//         notification.info({
	//           message: "Deleted",
	//           description: "Sucessfully Deleted Employee.",
	//           icon: <Icon type="smile" style={{ color: "#108ee9" }} />
	//         })
	//       );
	//   }
	// };

	searchInputChange = (event) => {
		const { name, value } = event.target;
		// console.log(name, value)
		this.setState({ [name]: value });
	};

	getAuthenticationToken = () => {
		return localStorage.getItem('token');
	};
	// componentDidMount(){

	// }

	render() {
		return (
			<Query query={GET_All_EMPLOYEES} refetchQueries={() => [ { query: GET_All_EMPLOYEES } ]}>
				{({ data, loading }) => {
					if (loading) return <Spinner />;

					return (
						<Home>
							<div className="searchInput">
								<Search
									placeholder="Employee Search"
									value={this.state.search}
									name="search"
									onChange={this.searchInputChange}
									style={{ width: 200 }}
									enterButton
								/>
							</div>
							<Card title="All Employee" bordered={false}>
								<Table
									dataSource={
										data &&
										data.getAllEmployee &&
										data.getAllEmployee.filter((names) => {
											return (
												names.firstName
													.toLowerCase()
													.indexOf(this.state.search.toLocaleLowerCase()) !== -1
											);
										})
									}
									style={{ paddingTop: 20 }}
								>
									<ColumnGroup title="Name">
										<Column
											title="First Name"
											dataIndex="firstName"
											// key={id.firstName}
										/>

										<Column title="Middile Name" dataIndex="middileName" key="lastName" />
										<Column
											title="Last Name"
											dataIndex="lastName"
											// key={id.lastName}
										/>
									</ColumnGroup>

									<Column
										title="Address"
										dataIndex="address"
										// key={id.address}
									/>

									<Column
										title="Action"
										key="action"
										render={(text, record) => (
											<span>
												<span>
													<Link
														to={{
															pathname: `/updateEmployee/${record._id}`,
															state: {
																fromNotifications: true,
																userid: record._id
															}
														}}
														key={record._id}
														ref={record._id}
														params={{ userId: record._id }}
													>
														<Icon type="edit" theme="filled" />
														edit
													</Link>
												</span>

												<Divider type="vertical" />

												<Link
													to={{
														pathname: `/documents/${record._id}`,
														state: {
															fromNotifications: true,
															userid: record._id
														}
													}}
													key={record._id}
													ref={record._id}
													params={{ userId: record._id }}
												>
													<Icon type="file" />
													fle
												</Link>
												<Divider type="vertical" />

												{/* <Button
                                type="primary"
                                onClick={() => this.deleteID(deleteEmployee)}
                              >
                                <Icon type="delete" />
                                Delete
                              </Button> */}
												<Delete id={record._id}>Delete</Delete>
											</span>
										)}
									/>
								</Table>
								{/* );
                  }}
                </Mutation> */}
							</Card>
						</Home>
					);
				}}
			</Query>
		);
	}
}

export default withRouter(Employetable);
