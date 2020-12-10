//middlewares - has access to request and response Object
//what are we going to do 
//1. get user input

//this user is a template foe creating objects

//you csnnot return anything in an api but only a json
const User = require('../models/user')

const authCtrl = {}

auth.signup = async (req, res) => {
    const {firstName, lastName, email, password} = res.body;
    //creating an object
    const user = User({firstName, lastName, email, password})
    //returns the saved user entries back and saved in newUser
    //this returns a promise
    //newUser send a responds to the user so we would have to wait hence await

    //using try for when a user types in an already stored email
    app.use(express.json())
try {
    const newUser = await user.save()

    res.send({
        message: 'User Created Successfully',
        newUser
    })
}catch(exception){
    res.status(500).send({error:"email already used"})
}

}

module.export
