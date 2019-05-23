exports.typeDefs = `
enum Role {
    ADMIN
    USER
  }

type Employee {
    _id: ID
    firstName: String!
   
    middileName:String!
   
    lastName: String!
   
    gender: String!

    dob: String!
    
    maritalStatus: String!
    
    mobileNumber: String!
   
    email: String!
  
    address:String!
   
    state: String!
  
    title: String!
   
    previousCompanyName: String!
    
    empId: String!
    
    supervisor: String!
    
    workLocation: String!
   
    emailProfessional: String!
    
    workNumber: String!
  
    startDate: String!
    
    salary:String!
  
    course: String!
   
    courseType: String!
    
    institution: String!
   
    location: String!
    
    yearofPassing: String!
    
    skills: String!
    
    secondAddress: String!
    
    sslc:String!
  
    puc: String!
  
    department: String!
}
    type User{
        _id: ID
        username: String! @unique
        password: String!
        email: String!
        joinDate: String
        rollBased:String!
        Role:[Role!]!

    }

    type Query {
        getAllEmployee:[Employee]
        getEmployee(_id: ID!): Employee
        getCurrentUser:User
        getAllUser:[User]
    }

    type Token {
        token : String!
        
    }

    type Mutation {
      
        signinUser(username: String!, password: String!):Token
        signupUser(username: String!, email: String!, password: String!, rollBased:String!):Token
        
        addEmployee(
            firstName: String!
   
            middileName:String!
           
            lastName: String!
           
            gender: String!
        
            dob: String!
            
            maritalStatus: String!
            
            mobileNumber: String!
           
            email: String!
          
            address:String!
           
            state: String!
          
            title: String!
           
            previousCompanyName: String!
            
            empId: String!
            
            supervisor: String!
            
            workLocation: String!
           
            emailProfessional: String!
            
            workNumber: String!
          
            startDate: String!
            
            salary:String!
           
            course: String!
           
            courseType: String!
            
            institution: String!
           
            location: String!
            
            yearofPassing: String!
            
            skills: String!
            
            secondAddress: String!
            
            sslc:String!
          
            puc: String!
          
            department: String!
        ):Employee

        updateEmployee(
            _id: ID!, 

            firstName: String
   
            middileName:String
        
            lastName: String
        
            gender: String
        
            dob: String
            
            maritalStatus: String
            
            mobileNumber: String
           
            email: String
          
            address:String
           
            state: String
          
            title: String
           
            previousCompanyName: String
            
            empId: String
            
            supervisor: String
            
            workLocation: String
           
            emailProfessional: String
            
            workNumber: String
          
            startDate: String
            
            salary:String
           
            course: String
           
            courseType: String
            
            institution: String
           
            location: String
            
            yearofPassing: String
            
            skills: String
            
            secondAddress: String
            
            sslc:String
          
            puc: String
          
            department: String
            
        ):Employee

        deleteEmployee(_id:ID):Employee
    
    }

  

`;
