const express = require('express');
const orderController = require('../controllers/order.controller');

const app = express();
const router = express.Router();
app.use('/api/v1/order', router);

router.get('/', orderController.getAll);
router.get('/:uuid', orderController.getOrder);
router.post('/', orderController.createOrder);
router.patch('/:uuid', orderController.updateOrder);
router.delete('/:uuid', orderController.deleteOrder);

module.exports = router;
