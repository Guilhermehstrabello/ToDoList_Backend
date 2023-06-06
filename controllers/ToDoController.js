//Criação dos controladores que serão linkados com as rotas no ToDoRoutes
const ToDoModel = require('../models/ToDoModel')

//Listar as tarefas
module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}
//Adicionar tarefas novas
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body

    ToDoModel
    .create({text})
    .then((data) =>{
        console.log("Sucesso ao adicionar a tarefa");
        console.log(data);
        res.send(data)
    })
}
//Atualizar tarefas
module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Tarefa atualizada com sucesso"))
    .catch((err)=> console.log(err))
}
//Deletar as tarefas
module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Tarefa removida com sucesso"))
    .catch((err)=> console.log(err))
}