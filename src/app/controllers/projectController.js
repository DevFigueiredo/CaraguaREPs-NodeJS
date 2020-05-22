//Pacote de rotas
const express = require('express');

const User = require('../models/User');
const Project = require('../models/Project');
const Task = require('../models/Task');


const authMiddleware = require('../middlewares/auth')
const router = express.Router();
router.use(authMiddleware);

router.get('/',  (req, res) => {
  res.send({ok: true, user: req.userId})
});


module.exports = app => app.use('/projects', router);