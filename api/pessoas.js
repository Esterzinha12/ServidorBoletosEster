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
        
    }
]


function selectPessoas(){
    return listaPessoas;

}

function selectID(){
    const pessoa=listaPessoas.findIndex(p=> p.id ==id)
    return pessoa
}

function adicionarPessoa(pessoa){
    pessoa.id=listaPessoas.length+1
    listaPessoas.push(pessoa)
    return pessoa
}

function editarPesssoa(id, pessoa){
    const index= listaPessoas.findIndex(p=> p.id==id)
    pessoa.id=id
    listaPessoas[index]=pessoa
    return pessoa
}
function deletarPessoa(){
    listaPessoas.splice(index, 1)
    return pessoa
}

router.get('/', (req, res)=>{
    res.send(selectPessoas());
})
router.get('/:id', (req, res)=>{
    const id=req.params.id
    res.json(selectID(id))
})

router.post('/', (req, res)=>{
    const pessoa= req.body
    res.json(adicionarPessoa(pessoa))
})

router.put('/:id', (req,res)=>{
    const id= req.params.id
    const pessoa= req.body
    res.json(editarPesssoa(id, pessoa))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(p => p.id == id)
    res.json(deletarPessoa(id, index))
})

module.exports = {
    router,
    selectPessoas,
    adicionarPessoa,
    editarPesssoa,
    deletarPessoa
}
    


    




