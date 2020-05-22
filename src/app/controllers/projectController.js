//Pacote de rotas
const express = require('express');

const Project = require('../models/Project');
const Task = require('../models/Task');


const authMiddleware = require('../middlewares/auth')
const router = express.Router();
//Para adicionar ao Body de todas as rotas a Verificação do Token
router.use(authMiddleware);


//Consulta de Todos Projetos
router.get('/', async (req, res) => {
try {
  const projects = await Project.find();
  res.send(projects)  
} catch (err) {
  res.status(400).send({error: 'Problem to list all projects'})
}

});


//Consulta do Projeto especifici
router.get('/:project_id', async (req, res) => {
  const {project_id} = req.params;
 try{
  const projects = await Project.findById(project_id);
  res.send(projects)  
} catch (err) {
  res.status(400).send({error: 'Problem to list all projects'})
}
 });


//Criação de Projeto
router.post('/', async (req, res) => {
  try {
     const project = await Project.create(req.body);
    res.send({message: 'A new project created with success'});
  } catch (err) {
    console.log(err);
    return res.status(400).send({error:"Error to created Project"})
  }
});


//Atualizaçao do Projeto especifico
router.put('/:project_id', async (req, res) => {
  res.send({user: req.userId})
});


//Deletar o Projeto especifico
router.delete('/:project_id', async (req, res) => {
  res.send({user: req.userId})
});

module.exports = app => app.use('/projects', router);