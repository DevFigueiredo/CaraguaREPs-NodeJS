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
  const projects = await Project.find().populate('user');
  res.send(projects)  
} catch (err) {
  res.status(400).send({error: 'Problem to list all projects'})
}

});


//Consulta do Projeto especificio
router.get('/:project_id', async (req, res) => {
  const {project_id} = req.params;
 try{
  const projects = await Project.findById(project_id).populate('user');
  res.send(projects)  
} catch (err) {
  res.status(400).send({error: 'Problem to list all projects'})
}
 });


//Criação de Projeto
router.post('/', async (req, res) => {
  //Recebe apenas os parametros importantes para inserção no banco de dados
  const {title, description, tasks} = req.body;

  try {
    //Insere o projeto e referencia o usuário
    const project = await Project.create({title, description, user: req.userId});
    
    //Mapeia todas as Tarefas uma a uma
    await Promise.all(tasks.map(async task=>{
      //Criou um objeto no Model importado de Tarefas 
      const projectTask = new Task({...task, project: project._id});

      await projectTask.save();
      project.tasks.push(projectTask);
    }));
    await project.save();


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
  const {project_id} = req.params;
  try{
    const projects = await Project.findByIdAndRemove(project_id);

    if(!projects) return res.status(400).send({error: 'Project not found'});
    
    res.send({error: projects.title+' deleted with success'});
    
  } catch (err) {
    res.status(400).send({error: 'Problem to delete this project'})
  }
});

module.exports = app => app.use('/projects', router);