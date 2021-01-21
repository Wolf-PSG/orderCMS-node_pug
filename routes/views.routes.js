const express = require('express');
const viewController = require('../controllers/views.controller');
const app = express();

const router = express.Router();
app.use('/', router);

router.get('/', viewController.index);
router.get(['/:uuid','/create'], viewController.single);

module.exports = router;
