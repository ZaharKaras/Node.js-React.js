const Router = require('express')
const router = new Router()
const tripRouter = require('./tripRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/trip', tripRouter)


module.exports = router