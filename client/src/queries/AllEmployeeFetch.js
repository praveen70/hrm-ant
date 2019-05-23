import gql from 'graphql-tag';


export default gql`

query AllEmployee{
    getAllEmployee {
      firstName
      middileName
      lastName
      dob
    }
  }


`;