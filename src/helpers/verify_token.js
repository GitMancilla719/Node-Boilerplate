const {verify} = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// middleware for protected routes
const verify_token = (req, res, next) => {
    try {
        // Use whatever logic you set to get the provided access token

        // If by Bearer token header, split bearer to get token only
        const token = req.headers.authorization.split(' ')[1]

        const valid_token = verify(token, process.env.JWT_SECRET)

	      if(valid_token) {
		      // Your other Logic here if any
		      return next()
	      }
    } catch (error) {
      return res.status(400).json({ error })
    }
}

module.exports = verify_token