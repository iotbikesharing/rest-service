const Sequelize = require('sequelize')
const sequelize = global.sequelize

module.exports = sequelize.define('Station',
    {
        lat: {
            type: Sequelize.DOUBLE
        },
        lng: {
            type: Sequelize.DOUBLE
        },
        address: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'stations'
    }
)