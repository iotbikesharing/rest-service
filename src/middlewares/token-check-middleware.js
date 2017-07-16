const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    const tokenString = req.headers.authorization
    const msg = { message: '' }

    if (tokenString && tokenString.split(' ')[0] === 'Bearer') {
        jwt.verify(tokenString.split(' ')[1], config.get('auth.secret'), (err, decoded) => {
            if (err) {
                msg.message = err.message
                res.status(403).json(msg)
            } else {
                /** Save decoded token to request for use in other routes */
                req.decoded = decoded
                next()
            }
        })
    } else {
        msg.message = 'Unauthorized'
        res.status(403).json(msg)
    }
}