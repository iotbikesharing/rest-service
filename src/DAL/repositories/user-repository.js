const User = require('../models/user')
const baseRepo = require('./base-repository')

class UserRepository {
    checkUserAvailability(condition) {
        return baseRepo.findWithCondition(User, condition)
    }

    createNewUser(data) {
        return baseRepo.create(User, data)
    }

    findUserByNameOrEmail(condition) {
        return baseRepo.findOne(User, condition)
    }

    findUserByRFID(condition) {
        return baseRepo.findOne(User, condition)
    }
}

module.exports = new UserRepository()