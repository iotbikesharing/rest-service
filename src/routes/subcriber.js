const mqtt = require('mqtt')
const config = require('config')

const client = mqtt.connect(config.get('mqtt.address'))
const constants = require('../utilities/constants')

module.exports = () => {
    client.on('connect', () => {
        client.subscribe(constants.LORA_GPS)
        client.subscribe(constants.RFID)
    })

    client.on('message', (topic, message) => {
        client.publish('result', 'success')
        console.log('Topic: ' + topic)
        console.log('Message: ' + message.toString())
        console.log('---')
    })
}