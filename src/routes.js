const express = require('express');
const ProductsController = require('./controller/ProductsController');

const routes = express.Router();

routes.get('/', ( req,res ) => {
  res.send('ola mundo')
})
routes.get('/usuario', ProductsController.index)
routes.get('/usuario/:id', ProductsController.findByid)
routes.post('/usuario', ProductsController.store)
routes.delete('/usuario/:id', ProductsController.delete)
routes.put('/usuario', ProductsController.update)

module.exports = routes;