const Sequelize = require('sequelize')
const sequelize = global.sequelize

module.exports = sequelize.define('User',
    {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'users'
    }
)