const router = require('express').Router()

const authService = require('../../services/shared/auth-service')

module.exports = app => {
    /**
     * Register new user
     * URL: /users
     * METHOD: POST
     * Params: {username, password}
     * Success: return {username, token}
     * Error: return {message}
     */
    router.post('/users', (req, res) => {
        authService.registerUser(req.body)
            .then(value => {
                res.status(200).json(value)
            })
            .catch(err => {
                res.status(200).json(err)
            })
    })

    /**
     * Login account
     * URL: /auth
     * METHOD: POST
     * Params: {username, password}
     * Success: return {username, token}
     * Error: return {message}
     */
    router.post('/auth', (req, res) => {
        authService.login(req.body)
            .then(value => {
                res.status(200).json(value)
            })
            .catch(err => {
                res.status(200).json(err)
            })
    })

    app.use('/', router)
}