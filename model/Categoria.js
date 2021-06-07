const mongoose = require('mongoose')
//Criando o schema Categoria

const CategoriaSchema = mongoose.Schema({
    nome: { type: String, unique:true },
    data: { type: String, unique:false },
    genero: { type: String, unique:false },
    plataforma: { type: String, unique:false },
    tamanho: { type: String, unique:false },
    dev: { type: String, unique:false },
    status: { type:String, enum: ['ativo','inativo'], default:'ativo'}
    
},{timestamps:true})

module.exports = mongoose.model('categoria',CategoriaSchema)