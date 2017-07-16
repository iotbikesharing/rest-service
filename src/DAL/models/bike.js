const Sequelize = require('sequelize')
const sequelize = global.sequelize

module.exports = sequelize.define('Bike',
    {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        card: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'bikes'
    }
)