
const User = require('../model/Usermodel/User')
const Notifications = require('../model/Usermodel/Notification')
const Product = require('../model/Usermodel/Product');
const Notifications = require('../model/Usermodel/Notification');
const authController = require('./auth.controller');


const userController = {
    //Get All users
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1; 
            const limit = parseInt(req.query.limit) || 20; // 1 page got 20 products
            const skip = (page - 1) * limit; // Calculate the number of documents to skip

            const products = await Product.find({})
                .skip(skip) // Skip the specified number of documents
                .limit(limit); // Limit the number of documents to retrieve

            const totalProducts = await Product.countDocuments(); // Count all products

            res.status(200).json({
                products,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit), // Calculate total pages
                totalProducts: totalProducts 
            });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
    



}

module.exports = userController