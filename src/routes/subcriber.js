const mqtt = require('mqtt')
const config = require('config')

const client = mqtt.connect(config.get('mqtt.address'))
const constants = require('../utilities/constants')
const subcriberRepo = require('../services/subcriber-service')

module.exports = socket => {
    client.on('connect', () => {
        client.subscribe(constants.LORA_GPS)
        client.subscribe(constants.RFID)
        client.subscribe(constants.LORA_LOCATION)
    })

    client.on('message', (topic, message) => {
        topic === constants.RFID ?
            subcriberRepo.getUsernameByRFID(message.toString()).then(user => {
                socket.emit(topic, user)
            }).catch(err => {
                console.error(err)
            })
            :
            socket.emit(topic, message.toString())

        // Write log.
        console.log('Topic: ' + topic)
        console.log('Message: ' + message.toString())
        console.log('---')
    })
}