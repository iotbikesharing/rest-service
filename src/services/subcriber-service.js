const userRepo = require('../DAL/repositories/user-repository')

class SubcriberService {
    getUsernameByRFID(rfid) {
        return new Promise((resolve, reject) => {
            userRepo.findUserByRFID({ nfc_id: rfid })
                .then(user => {
                    resolve(user)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}

module.exports = new SubcriberService()