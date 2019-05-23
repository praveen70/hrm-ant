import React from 'react';
import { Table, Input, Button, Icon, Card, Popconfirm, message } from 'antd';
import { Mutation, Query } from 'react-apollo';
import { GET_All_EMPLOYEES, DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEE } from '../../../queries/index';
const text = 'Are you sure to delete this task?';

export default class Delete extends React.Component {
	confirm = () => {
		message.info('Clicked on Yes.');
	};

	render() {
		return (
			<Mutation
				mutation={DELETE_EMPLOYEE_BY_ID}
				variables={{ _id: this.props.id }}
				refetchQueries={() => [ { query: GET_All_EMPLOYEES } ]}
			>
				{(deleteEmployee, { error }) => (
					<Popconfirm
						placement="leftTop"
						title={text}
						onConfirm={() => {
							this.confirm(deleteEmployee());
						}}
						okText="Yes"
						cancelText="No"
					>
						<Button type="primary">
							<Icon type="user-delete" />Delete
						</Button>
					</Popconfirm>
				)}
			</Mutation>
		);
	}
}
