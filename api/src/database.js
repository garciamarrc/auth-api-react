const mongoose = require('mongoose');

(async () => {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/auth-api-react')
        console.log('Db connected')
    } catch (error) {
        console.error(error)
    }
})()
