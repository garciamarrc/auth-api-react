const User = require('../models/User')

const verifyToken = async (req, res) => {
    const { token } = req.body
    
    const tokenExists = await User.find({token: token})

    if (tokenExists.length > 0) {
        return res.status(200).json({success: true})
    }
    
    return res.status(400).json({success: false})
}

module.exports = {
    verifyToken
}