const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    middileName:{
         type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    dob:{
        type: String,
        required: true ,
    },
    maritalStatus:{
        type: String,
        required: true ,
    },
    mobileNumber:{
        type: String,
        required: true ,
    },
    email:{
        type: String,
        required: true ,
    },
    address:{
        type: String,
        required: true ,
    },
    state:{
        type: String,
        required: true ,
    },
    title:{
        type: String,
        required: true ,
    },
    previousCompanyName:{
        type: String,
        required: true ,
    },
    empId:{
        type: String,
        required: true ,
    },
    supervisor:{
        type: String,
        required: true ,
    },
    workLocation:{
        type: String,
        required: true ,
    },
    emailProfessional:{
        type: String,
        required: true ,
    },
    workNumber:{
        type: String,
        required: true ,
    },
    startDate:{
        type: String,
        required: true ,
    },
    salary:{
        type: String,
        required: true ,
    },
    course:{
        type: String,
        required: true ,
    },
    courseType:{
        type: String,
        required: true ,
    },
    institution:{
        type: String,
        required: true ,
    },
    location:{
        type: String,
        required: true ,
    },
    yearofPassing:{
        type: String,
        required: true ,
    },
    skills:{
        type: String,
        required: true ,
    },
    secondAddress:{
        type: String,
        required: true ,
    },
    sslc:{
        type: String,
        required: true ,
    },
    puc:{
        type: String,
        required: true ,
    },
    department:{
        type: String,
        required: true ,
    }
})

EmployeeSchema.index({
    '$**' : 'text'
});

module.exports = mongoose.model('Employee', EmployeeSchema);