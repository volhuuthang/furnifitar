
const User = require('../model/Usermodel/User')
const Notifications = require('../model/Usermodel/Notification')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authController = {
    //Get All users
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    //GENERATE ACCESS TOKEN
    generateAcessToken: (user) => { 
        return jwt.sign({
            id: user._id,
            admin: user.admin
        },  process.env.JWT_ACCESS_KEY,
            { expiresIn: '20s' })
    },

//GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user._id,
            admin: user.admin
        },  process.env.JWT_FRESH_KEY,
            { expiresIn: '7d' })
    },


    //REGISTER user
    registerUser: async (req, res) => {
        try {
            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            // const {User} = await connectDB();
            // Create User
            const newUser = {
                user_name: req.body.username,
                email: req.body.email,
                password: hashed,
                phone_number:req.body.phonenumber,
                address:req.body.address,
                role: 1
            }

            // Save user to the database
            await User.create(newUser)
            res.status(201).json({ message: 'User registered successfully!' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    //LOGIN
    loginUser: async (req, res) => {
        try {

            const user = await User.findOne({ user_name: req.body.username });
            console.log(req.body.username)
            if (!user) return res.status(404).json({ message: 'User not found' });

            
            console.log(req.body.password)
            console.log(user)
            // Compare password
            if(!req.body.password || req.body.password.trim() === '') return res.status(404).json({ message: 'Password is required' });
            const comparePassword = await bcrypt.compare(req.body.password, user.password);
            if (!comparePassword) return res.status(404).json({ message: 'Wrong password' });
            else if (user && comparePassword) {


                // Create and sign token
                const accesstoken = authController.generateAcessToken(user)
                const refreshToken = authController.generateRefreshToken(user)
                res.cookie('freshtoken', refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: "strict"
                })
                const { password, ...others } = user._doc;
                res.status(200).json({ message: 'Login successful!', accesstoken, ...others });
            }

            // User logged in

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
        }
    },


}

module.exports = authController;