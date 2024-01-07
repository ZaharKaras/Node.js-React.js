const Router = require('express')
const router = new Router()
const tripController = require('../controllers/tripController')

router.post('/', tripController.create)
router.get('/', tripController.getAll)
router.get('/:id', tripController.getById)
router.put('/:id', tripController.update)
router.delete('/:id', tripController.delete)

module.exports = router