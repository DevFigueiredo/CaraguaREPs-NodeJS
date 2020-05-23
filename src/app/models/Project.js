const mongoose = require('../../database');

//type = tipo do campo, required = campo obrigatorio, unique = valor unico, lowercase = converter em caixa baixa, select = escolhe se será possível consultar este campo no select ou nao
const ProjectSchema = new mongoose.Schema({
title:{ 
   type: String, 
   required: true
},
description:{
  type: String, 
  required: true
},
user:{
  type: mongoose.SchemaTypes.ObjectId,
  ref:'User', 
  required: true
},
tasks: [{
  type: mongoose.SchemaTypes.ObjectId,
  ref: 'Task'
}],

createdAt:{
  type: Date,
  default: Date.now
},

UpdatedAt:{
  type: Date,
  default: Date.now
},
});



const Project = mongoose.model('Project', ProjectSchema);
mongoose.set('useFindAndModify', false);

module.exports = Project;