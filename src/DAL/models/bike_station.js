const sequelize = global.sequelize

const Station = require('./station')
const Bike = require('./bike')

var Bike_Station = sequelize.define('bike_station',
    {}, {
        tableName: 'bike_station'
    }
)

Bike_Station.has_many(Station, { foreignKey: 'station_id' })
Bike_Station.has_many(Bike, { foreignKey: 'bike_id' })