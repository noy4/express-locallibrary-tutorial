var express = require('express');
var router = express.Router();
var employee_controller = require('../controllers/employee_controller');

/* API of controling employees */
router.get('/employees/', employee_controller.index);
router.get('/employees/:id(\\d+)', employee_controller.show);
router.post('/employees/', employee_controller.create);
router.put('/employees/:id(\\d+)', employee_controller.update);
router.delete('/employees/:id(\\d+)', employee_controller.destroy);

module.exports = router;