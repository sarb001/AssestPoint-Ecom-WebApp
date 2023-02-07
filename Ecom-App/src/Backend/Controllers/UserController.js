const User = require('../Schema/UserSchema');
const bcrypt = require('bcryptjs');
const jsoncreatewebtoken = require('../Controllers/JsonCreateToken');


const userRegister = async(req,res) => {

    try{
        const { firstname ,lastname,email ,password} = req.body;

        // check if user already exists with id with msg 
        // check if   
        if(!firstname ||!lastname || !email || !password){
            res.status(400);
            throw new Error('Fill all the Fields Now ');
        }
        const finduser = await User.findOne({email})

        if(finduser)
        {
             res.status(400);
             throw new Error(' User  already Exist ');
        }

        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.password,salt);

        const user = await User.create({
            firstname : firstname,
            lastname : lastname,
            email : email,
            password: hashpass,
        })
    
          if(user)
          {
             res.status(201).json({
                _id : user._id,
                firstname : user.firstname,
                lastname : user.lastname,
                email : user.email,
                password : user.password,
                token : jsoncreatewebtoken(user._id)
             })
          }else
          {
             res.status(400);
             throw  new Error('Not able to create User ')
          }

    }catch(error)
    {
        res.status(400);
        console.log(error);
        throw new Error(' Error while Fetching From Request ')
    }
}

const userLogin = async(req,res) => {
    
    const {email , password} = req.body;
    if(!email || !password)
    {
     res.status(400).json({error : 'Fill all the Fields'})
        // throw new Error(' Fill All the Fields Now ')
    }

    const user = await User.findOne({email});
    console.log('  user is -',user);
    const comparepass = await bcrypt.compare(password,user.password);
    // console.log(' comparepass is -',comparepass);
    // const datapass = comparepass.then(res =>  {
    //     console.log('response is-' ,res);
    // })  

    console.log('comomm',comparepass);

    if(!comparepass){
         res.status(400).json({error : 'Wrong user Credentials '});
    }

    if(user && (comparepass))
    {
         res.status(200).json({
            _id : user._id,
            firstname : user.firstname,
            lastname : user.lastname,
            email : user.email,
            password : user.password,
            token : jsoncreatewebtoken(user._id),
         })
    }else
    {
        res.status(401);
        // res.send({error : ' Invalid Email or Password  '})
    //    res.status(401).json({error : ' Invalid Email or Password '});
        // throw new Error(' Invalid Email or Password');
    }
}

  module.exports = {userRegister ,userLogin}