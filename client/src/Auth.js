
import React from 'react';
import { gql, graphql } from 'react-apollo';
import { SIGNIN_USER } from './queries/index'

const user = ({ id, username }) => (
  <h1 key={id} >{username}</h1>
);

const Auth = ({ data: { allUsers = [] } }) => (
  <div>
    {allUsers.map(user)}
  </div>
);

const query = SIGNIN_USER

export default graphql(query)(Auth);