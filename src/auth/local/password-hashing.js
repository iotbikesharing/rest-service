const Promise = global.Promise
const bcrypt = require('bcrypt')

module.exports = plainPassword => {
    const saltRound = randomIntInc(1, 11)

    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRound, (err, salt) => {
            bcrypt.hash(plainPassword, salt, (err, hash) => {
                if (err) reject(err)
                else resolve(hash)
            })
        })
    })
}

function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}