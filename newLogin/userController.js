const userModel = require('../models/users');
const getDetails = async (req,res)=>{
    try {
        const users = await userModel.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error while retrieving users:', error);
        res.status(500).send('Error retrieving users');  
    }
};
async function postDetails(req,res) {
    try {
        const {name,email,password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and number are required' });
        }
        const newUser = await userModel.create({
            name,
            email,
            password
        });
        res.status(201).json({
            message: `User ${newUser.name} added successfully`,
            user: newUser
        });
    } catch (error) {
        console.error('Error while adding user:', error);
        res.status(500).send('Unable to add user');
    }
};
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'Email not found' });
        }
        if (password !== user.password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        return res.status(200).json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    } catch (err) {
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports ={
    getDetails,
    postDetails,
    loginUser
}