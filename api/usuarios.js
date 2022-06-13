const express= require("express");
const router=express.Router();

const listaUsuarios=[
    {
        id: 1,
        nome: 'Kenzo',
        cpf: '09693152956'
        
    },
    {
        id: 2,
        nome: 'Thiago',
        cpf: '12345678925'
        
    },
    {
        id: 3,
        nome: 'Matheus',
        cpf: '56974521456'
    }
]

function selectUsuarios(){
    return listaUsuarios;
}

function selectID(id){
    const usuarios=listaUsuarios.find(p=> p.id ==id)
    return usuarios
}

function adicionarUsuario(usuarios){
    usuarios.id=listaUsuarios.length+1
    listaUsuarios.push(usuarios)
    return usuarios
}

function editarUsuario(id, usuarios){
    const index= listaUsuarios.findIndex(p=> p.id==id)
    usuarios.id=id
    listaUsuarios[index]=usuarios
    return usuarios
}
function deletarUsuario(){
    listaUsuarios.splice(index, 1)
    return usuarios
}

router.get('/', (req, res)=>{
    res.send(selectUsuarios());
})
router.get('/:id', (req, res)=>{
    const id=req.params.id
    res.json(selectID(id))
})

router.post('/', (req, res)=>{
    const usuarios= req.body
    res.json(adicionarUsuario(usuarios))
})

router.put('/:id', (req,res)=>{
    const id= req.params.id
    const usuarios= req.body
    res.json(editarUsuario(id, usuarios))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = listaUsuarios.findIndex(p => p.id == id)
    res.json(deletarUsuario(id, index))
})


module.exports = {
    router,
    selectUsuarios
}