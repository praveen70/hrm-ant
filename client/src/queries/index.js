import { gql } from "apollo-boost";

export const SIGNUP_USER = gql`
  mutation(
    $username: String!
    $rollBased: String!
    $email: String!
    $password: String!
  ) {
    signupUser(
      username: $username
      rollBased: $rollBased
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;



export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      
      username
      joinDate
      email
      rollBased
    }
  }
`;
export const GET_ALL_USER = gql`
query {
  getAllUser {
    _id
    username
    email
    
    rollBased
  }
}

`;



export const POST_EMPLOYEE_INFORMATION = gql`
  mutation(
    $firstName: String!
    $middileName: String!
    $lastName: String!
    $gender: String!
    $dob: String!
    $maritalStatus: String!
    $mobileNumber: String!
    $email: String!
    $address: String!
    $state: String!
    $title: String!
    $previousCompanyName: String!
    $empId: String!
    $supervisor: String!
    $workLocation: String!
    $emailProfessional: String!
    $workNumber: String!
    $startDate: String!
    $salary: String!
    $course: String!
    $courseType: String!
    $institution: String!
    $location: String!
    $yearofPassing: String!
    $skills: String!
    $secondAddress: String!
    $sslc: String!
    $puc: String!
    $department: String!
  ) {
    addEmployee(
      firstName: $firstName
      middileName: $middileName
      lastName: $lastName
      gender: $gender
      dob: $dob
      maritalStatus: $maritalStatus
      mobileNumber: $mobileNumber
      email: $email
      address: $address
      state: $state
      title: $title
      previousCompanyName: $previousCompanyName
      empId: $empId
      supervisor: $supervisor
      workLocation: $workLocation
      emailProfessional: $emailProfessional
      workNumber: $workNumber
      startDate: $startDate
      salary: $salary
      course: $course
      courseType: $courseType
      institution: $institution
      location: $location
      yearofPassing: $yearofPassing
      skills: $skills
      sslc: $sslc
      puc: $puc
      secondAddress: $secondAddress
      department: $department
    ) {
      firstName
      lastName

      maritalStatus
    }
  }
`;

export const GET_All_EMPLOYEES = gql`
  query {
    getAllEmployee {
      _id
      firstName
      middileName
      lastName
      gender
      dob
      maritalStatus
      email
      address
      state
      title
      previousCompanyName
      empId
      supervisor
      workLocation
      emailProfessional
      workNumber
      startDate
      salary
      course
      courseType
      institution
      location
      yearofPassing
      skills
      secondAddress
      sslc
      puc
      department
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query($_id: ID!) {
    getEmployee(_id: $_id) {
      _id
      firstName
      middileName
      lastName
      gender
      dob
      maritalStatus
      mobileNumber
      email
      address
      state
      title
      previousCompanyName
      empId
      supervisor
      workLocation
      emailProfessional
      workNumber
      startDate
      salary
      course
      courseType
      institution
      location
      yearofPassing
      skills
      secondAddress
      sslc
      puc
      department
    }
  }
`;

export const UPDATE_EMPLOYE_BY_ID =gql`
mutation($_id: ID!,
     $firstName: String,
    $middileName: String,
    $lastName: String,
    $gender: String,
    $dob: String,
    $maritalStatus: String,
    $mobileNumber: String,
    $email: String,
    $address: String,
    $state: String,
    $title: String
    $previousCompanyName: String,
    $empId: String,
    $supervisor: String,
    $workLocation: String,
    $emailProfessional: String,
    $workNumber: String,
    $startDate: String,
    $salary: String,
    $course: String,
    $courseType: String,
    $institution: String,
    $location: String,
    $yearofPassing: String,
    $skills: String,
    $secondAddress: String,
    $sslc: String,
    $puc: String,
    $department: String,
  ) {
  updateEmployee(
    _id: $_id,
     firstName: $firstName
      middileName: $middileName
      lastName: $lastName
      gender: $gender
      dob: $dob
      maritalStatus: $maritalStatus
      mobileNumber: $mobileNumber
      email: $email
      address: $address
      state: $state
      title: $title
      previousCompanyName: $previousCompanyName
      empId: $empId
      supervisor: $supervisor
      workLocation: $workLocation
      emailProfessional: $emailProfessional
      workNumber: $workNumber
      startDate: $startDate
      salary: $salary
      course: $course
      courseType: $courseType
      institution: $institution
      location: $location
      yearofPassing: $yearofPassing
      skills: $skills
      sslc: $sslc
      puc: $puc
      secondAddress: $secondAddress
      department: $department
    
    
    ) {
    _id
    firstName
    middileName
    lastName
    gender
    dob
    maritalStatus
    mobileNumber
    email
    address
    state
    title
    previousCompanyName
    empId
    supervisor
    workLocation
    emailProfessional
    workNumber
    startDate
    salary
    course
    courseType
    institution
    location
    yearofPassing
    skills
    secondAddress
    sslc
    puc
    department
  }
}
`;







export const DELETE_EMPLOYEE_BY_ID = gql`
  mutation($_id: ID!) {
    deleteEmployee(_id: $_id) {
      _id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file)
  }
`;
