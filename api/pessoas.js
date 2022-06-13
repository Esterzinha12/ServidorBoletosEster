const express= require("express");
const router=express.Router();

const listaPessoas=[
    {
        id: 1,
        nome: 'Ester',
        cpf: '09693152956'
        
    },
    {
        id: 2,
        nome: 'Duda',
        cpf: '12345678925'
        
    },
    {
        id: 3,
        nome: 'Leo',
        cpf: '56974521456'
    }
]
router.get('/', (req, res)=>{
    res.send(selectPessoas());
})

function selectPessoas(){
    return listaPessoas;
}

router.get('/:id', (req, res)=>{
    const id=req.params.id
    res.json(selectID(id))
})

function selectID(id){
    const pessoa=listaPessoas.find(p=> p.id ==id)
    return pessoa
}

router.post('/', (req, res)=>{
    const pessoa= req.body
    res.json(adicionarPessoa(pessoa))
})

function adicionarPessoa(pessoa){
    pessoa.id=listaPessoas.length+1
    listaPessoas.push(pessoa)
    return pessoa
}

router.put('/:id', (req,res)=>{
    const id= req.params.id
    const pessoa= req.body
    res.json(editarPesssoa(id, pessoa))
})

function editarPesssoa(id, pessoa){
    const index= listaPessoas.findIndex(p=> p.id==id)
    pessoa.id=id
    listaPessoas[index]=pessoa
    return pessoa
}
router.delete('/deletar/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(p => p.id == id)
    res.send(deletarPessoa(id, index))
})

function deletarPessoa(id, index){
    listaPessoas.splice(index, 1)
    return listaPessoas
}

module.exports = {
    router,
    selectPessoas
}




    




