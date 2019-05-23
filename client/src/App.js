import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './component/login/login';
import Home from './component/dashboard/home/home';
//import CreateEmployee from './component/createEmployee/createEmployee'
import Addemployee from './component/dashboard/addEmployee/addEmployee';
import withSession from './component/withSession';
import Employee from './component/dashboard/createEmployee/index';
import Professionalinformation from './component/dashboard/employeeProfessionalInfo/index';
import Educationinformation from './component/dashboard/employeeEducationInformation/index';
import Documents from './component/dashboard/documents/index';
import Employetable from './component/dashboard/allEmployeTable/index';
import Delete from './component/dashboard/deleteEmployee/index';
import Updateemployee from './component/dashboard/updateEmployee/index';
import Allemployee from './component/dashboard/defaultPage/index';
import Rollbased from './component/dashboard/rollBased/rollBased';
import { GET_CURRENT_USER } from "./queries/index";
import {  Query } from 'react-apollo';
import Info from './component/dashboard/Info/index';


import { hasRole, isAllowed } from './auth';
import decode from 'jwt-decode';

// import Layout from './layout/index'



class Root extends React.Component {
	state = {
		loading: true,
		loggedIn:false,
		isAuth:false,
	};




	authenticate() {
		//do something to check if logged in
		let { loggedIn } = this.state;
		if (loggedIn) {
			 this.setState({ isAuth: true })
		}
	} 

	render() {
	
		return (
			<div>
				<Query query={GET_CURRENT_USER}>
				
					{({ data, loading}) => {
						// let user = data.getCurrentUser;
						return (
							<Router>
							<Switch>
							
										<Route exact path="/" component={Login} />
										{/* {user && user.length > 0 && user.map((item, index) => {
											if(item.rollBased === 'user') {
												console.log("rolls", item.rollBased)
												return <Route path="/Info" component={Info} />
											}else {
												return (
													<> */}
													<Route path="/home" component={Home} />
													<Route path="/createEmployee" component={Employee} />
													<Route path="/addEmployee" render={() => <Addemployee />} />
													<Route path="/employeeProfessionalInfo" render={() => <Professionalinformation />} />
													<Route path="/employeeEducationInformation" render={() => <Educationinformation />} />
													<Route path="/documents" render={() => <Documents />} />
													<Route path="/allEmployeeTable" render={() => <Employetable />} />
													<Route path="/deleteEmployee:_id" component={Delete} />
													<Route path="/updateEmployee/:_id" component={Updateemployee} />
													<Route path="/defaultPage" render={() => <Allemployee />} />
													<Route path="/rollBased" component={Rollbased} />
													
													{/* </>
												);
											}
										}) }  */}
										
						
						
					
						</Switch>
						</Router>
						)

					}}
					</Query> 
										
				{/* return ( */}
		
			</div>
		);
	}
}


export default withSession(Root);
