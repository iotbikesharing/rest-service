const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = value => {
    return jwt.sign(
        value,
        config.get('auth.secret'),
        { expiresIn: '1y' }
    )
}