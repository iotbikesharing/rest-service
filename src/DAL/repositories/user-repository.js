const User = require('../models/user')

class UserRepository {
    findWithCondition(condition) {
        return User.findAll({
            where: condition
        })
    }

    createNewUser(data) {
        return User.create(data)
    }

    findOne(condition) {
        return User.findOne({
            where: condition
        })
    }
}

module.exports = new UserRepository()