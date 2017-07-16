const bcrypt = require('bcrypt')
const Promise = global.Promise

module.exports = (plainPassword, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, hash, (err, res) => {
            if (err) reject(err)
            else resolve(res)
        })
    })
}