const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
// const { requireAuth, requireAdmin } = require('./utils.js')

const createToken = (user, secret, expiresIn) =>{
    const { username, email, password } = user;
    return jwt.sign({ username, email, password }, secret, { expiresIn})
}





exports.resolvers = {
    Query:{

       
        getAllEmployee: async(root, args, { Employee }) => {
            const allEmployee = await Employee.find().sort({createdDate:'desc'});
            return allEmployee;
        },

        getEmployee: async (root, { _id }, { Employee }) => {
            const employee = await Employee.findOne({ _id });
                return employee;
        },

        getAllUser:async(root,args, { User }) => {
            const user = await User.find();
                return user;
        },

        
        getCurrentUser:async(root, args, { currentUser, User }) =>{
            if(!currentUser){
                return null;
            }
        const user = await User.findOne({ username: currentUser.username })
       
       
        return user;
}
    },
    Mutation:{
      
            
       
        signinUser: async(root, { username, password }, { User }) =>{
            const user = await User.findOne({ username });
            if(!user){
                throw new Error('User not exists');
            }
            const inValidPassword = await bcrypt.compare(password, user.password);
            if(!inValidPassword){
                throw new Error('Invalid Password');
            }
            return { token: createToken(user, process.env.SECRET,"100days")}
        },
        signupUser: async (root, { username, email, password, rollBased }, { User })=>{
            const user = await User.findOne({ username });
            if(user){
                throw new Error('User already exists');

            }
            const newUser = await new User({
                username,
                email,
                password,
                rollBased
            }).save();
            return { token: createToken(newUser, process.env.SECRET,"100days")}
        },
        
        addEmployee: async (root, params , { Employee })=>{
            const newEmployee = await new Employee({ ...params }).save();
             return newEmployee;
        },
        
        updateEmployee: async (root, params, {
            Employee
        }) => {
            const employeeUpdate = await Employee.findByIdAndUpdate(params._id, { ...params
            }, {
                new: true
            });
            return employeeUpdate;

        },

        deleteEmployee: async (root, {
            _id
        }, {
            Employee
        }) => {
            const employeeDelete = await Employee.findOneAndRemove({
                _id
            });
          
            return employeeDelete;
        },
        // User: (parent, args, context) => {
        //     if (!context.user || !context.user.roles.includes('admin')) return null;
        //     return context.models.User.getAll();
        //    }
    }
};