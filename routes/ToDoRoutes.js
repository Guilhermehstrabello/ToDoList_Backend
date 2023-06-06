const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()

//Criando a rota get
router.get('/', getToDo)
router.post('/salvar', saveToDo)
router.put('/atualizar', updateToDo)
router.delete('/deletar', deleteToDo)

module.exports = router;