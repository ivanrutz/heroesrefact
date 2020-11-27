const express = require ('express');
const router = express.Router();
const heroesController = require ('../controllers/heroesController')


router.get('/',heroesController.index)


router.get('/detalle/:id', heroesController.detalle)


router.get('/bio/:id/:ok?', heroesController.bio)


router.get('/creditos',heroesController.credits)


router.get('*', heroesController.notFound )
module.exports = router