const device = require('./device-route')
const record = require('./record-route')
const nearby = require('./nearby-route')

module.exports = (app, socket) => {
    device(app)
    record(app, socket)
    nearby(app)
}