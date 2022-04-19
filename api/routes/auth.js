const router = require('express').Router();
const User = require('../models/User')

//Router

router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      console.log('nope')
      res.status(500).json(err);
    }
  });


//LOGIN

router.post('/login', async (req, res) => {  
    try{
        const user = await User.findOne({username: req.body.username})

        !user && res.status(401).json("wrong credentials")

        const OriginalPassword = user.password

        OriginalPassword !== req.body.password && res.status(401).json("wrong credentials")

        const {password, ...others} = user._doc;
        res.status(200).json({...others})

    }catch(err){
        res.status(500).json(err)
        console.log('this happened but didnt work in auth api folder')
    }
});



module.exports = router