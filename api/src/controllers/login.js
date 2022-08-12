const User = require('../models/User')
const generateToken = require('../helpers/generateToken')

const login = async (req, res) => {
    const { username, password } = req.body

    const userExists = await User.find({username: username, password: password})

    if (userExists.length > 0) {

        const token = generateToken(20)

        await User.findByIdAndUpdate(userExists[0]._id, {token: token})

        return res.status(200).json({success: true, token: token})
    }

    return res.status(400).json({success: false})
}

module.exports = {
    login
}