const { Router } = require('express');
const express = require('express');
const router = express.Router();

const tareaController = require('../controllers/tareaControllers');

router.get('/', tareaController.list);
router.get('/formulario', tareaController.form);
router.post('/add', tareaController.save);
router.get('/delete/:id', tareaController.delete);
router.get('/update/:id', tareaController.edit);
router.post('/update/:id', tareaController.update);

module.exports = router;