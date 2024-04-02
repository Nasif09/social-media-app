const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");



router.get("/",(req,res)=>{
  res.send("hey its author")
})
// Register
router.post('/register', async (req, res) => {
  try{
    //generate new pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user object with hashed password
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    city: req.body.city,
    from: req.body.from,
    relationship: req.body.relationship
  });

    const user = await newUser.save();
    res.status(200).json(user);
  }catch(err){
    console.log(err);
  }
});
// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Compare the password provided by the user with the hashed password stored in the database
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send("wrong password");
    }

    // If the password is valid, you can proceed with your login logic here
    // For example, you can generate a JWT token and send it to the client
    // Here, I'm just sending a success message for demonstration
    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
