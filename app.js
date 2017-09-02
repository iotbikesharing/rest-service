const app = require('express')()
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const config = require('config')
const server = require('http').Server(app)
const socket = require('socket.io')(server)
const cors = require('cors')
const helmet = require('helmet')

/** Global variables */
global.sequelize = require('./src/DAL/mysql-connection')

const tokenCheck = require('./src/middlewares/token-check-middleware')

/** Routing */
const sharedRoutes = require('./src/routes/shared')
require('./src/routes/subcriber')(socket)

app.set('port', (process.env.PORT || config.get('express.port')))
app.options('*', cors())
app.use('*/api', tokenCheck)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.get('express.origin'))
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

/** Register APIs */
sharedRoutes(app)

/** catch 404 and forward to error handler */
app.use((req, res, next) => {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

/** production error handler, no stacktraces leaked to user */
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        'message': err.message,
    })
})

server.listen(app.get('port'), '0.0.0.0', () => {
    console.log('Listening on port:', app.get('port'))
})