const User = require('../../models/user/user')

exports.test = async (req, res) => {
    res.send("My API")
}

exports.login = async (req, res) => {
    const {email, password} = req.body
    User.findOne({email:email}, (err, user) =>{
        if(user){
            if(password === user.password){
                res.send({message: "Login Successful", user: user})
            }else{
                res.send({message: "Password is incorrect"})
            }
        }else{
            res.send({message: "User Not Found"})
        }
    })
}

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({email: email}, (err,user) => {
        if(user){
            res.send({message: "User already registered"})
        }else{
            const user = new User({
                name: name,
                email: email,
                password: password
            })
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully registered", user})
                }
            })
        }
    })
}