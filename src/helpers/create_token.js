const {sign} = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// use in login logic
const create_token = (info) => {
    // info param can be an object to create multi custom fields in the created access token
    const access_token = sign({ customKey1: info.cf1, customKey2: info.cf2 }, process.env.JWT_SECRET, { expiresIn: '30d'})
    
    return {
      // Whatever you want to return along with the access token
      access_token
    }
}

module.exports = create_token