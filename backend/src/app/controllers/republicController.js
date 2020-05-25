//Pacote de rotas
const express = require('express');

const Republic = require('../models/Republic');
const ImageRepublic = require('../models/ImageRepublic');
  
const authMiddleware = require('../middlewares/auth')
const router = express.Router();
//Para adicionar ao Body de todas as rotas a Verificação do Token
router.use(authMiddleware);


//Consulta de Todas Republicas
router.get('/', async (req, res) => {
res.send()
});


//Consulta do Republica especifica
router.get('/:republic_id', async (req, res) => {
  res.send()

 });


//Criação de Republica
router.post('/', async (req, res) => {
  const {title, 
    description,
    republic_like,
    address, 
    republic_person_perfil,
    contact,
    capacity,
    quantidy_bedroom,
    quantidy_bathroom,
    bathroom_size_square,
    bedroom_size_square
   } = req.body;
  try{
  const republic = await Republic.create(
    {
    title, 
    description,
    republic_like,
    address, 
    republic_person_perfil,
    contact,
    capacity,
    quantidy_bedroom,
    quantidy_bathroom,
    bathroom_size_square,
    bedroom_size_square,
    user: req.userId
  
  });
  res.send('A new Republic created')

}catch(err){
  res.status(400).send({error: 'Ocurred a dificulted to create new republic'})

}
  });


//Atualizaçao do Republica especifico
router.put('/:republic_id', async (req, res) => {
  res.send() 
});


//Deletar o Republica especifico
router.delete('/:republic_id', async (req, res) => {
  
});

module.exports = app => app.use('/republics', router);