const saveSubscription = require('../controllers/controller')
const express = require('express')
const router = express.Router()



router.post('/subscribe', saveSubscription);
//module.exports = router

module.exports = (app) => {
    app.use(router)
}