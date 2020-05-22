const mongoose = require('../../database');

//type = tipo do campo, required = campo obrigatorio, unique = valor unico, lowercase = converter em caixa baixa, select = escolhe se será possível consultar este campo no select ou nao
const TaskSchema = new mongoose.Schema({
title:{
   type: String, 
   required: true
},
description:{
  type: String, 
  required: true
},
project:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'Project', 
    required: true
  },
assignedToUser:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User', 
    required: true
  },
completed:{
    type: Boolean,
    require: true,
    default: false 
},

createdAt:{
  type: Date,
  default: Date.now
},
});

const Task = mongoose.model('Task', TaskSchema);
mongoose.set('useFindAndModify', false);

module.exports = Task;