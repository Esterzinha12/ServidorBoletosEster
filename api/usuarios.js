const express = require("express");
const router = express.Router();
const { listaBoletos } = require("./listaBoletos");

const listaUsuarios = [
    {
        id: 1,
        nome: 'Kenzo',
        cpf: '0969'

    },
    {
        id: 2,
        nome: 'Thiago',
        senha: '1234'

    },
    {
        id: 3,
        nome: 'Matheus',
        cpf: '5697'
    }
]

router.get('/', (req, res) => {
    res.send(selectUsuarios());
})

function selectUsuarios() {
    return listaUsuarios;
}

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(selectIDUsuario(id))
})

function selectIDUsuario(id) {
    const usuarios = listaUsuarios.find(p => p.id == id)
    return usuarios
}

router.post('/', (req, res) => {
    const usuarios = req.body
    if (pessoa.nome != "" && pessoa.senha != "") {
        res.json(adicionarUsuario(usuarios))
    } else {
        return "Campos não inseridos!";
    }
})

function adicionarUsuario(usuarios) {
    usuarios.id = listaUsuarios.length + 1
    listaUsuarios.push(usuarios)
    return usuarios
}

router.put('/:id', (req, res) => {
    const id = req.params.id
    const usuarios = req.body
    res.json(editarUsuario(id, usuarios))
})

function editarUsuario(id, usuarios) {
    const index = listaUsuarios.findIndex(p => p.id == id)
    usuarios.id = id
    listaUsuarios[index] = usuarios
    return usuarios
}
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json(deletarUsuario(id))
})

function deletarUsuario(id) {
    if (listaBoletos.find(b => b.idUser == id)) {
        return "Não é possivel deletar se o usuario tem boleto!"
    } else {
        const index = listaUsuarios.findIndex(p => p.id == id)
        listaUsuarios.splice(index, 1)
        return listaUsuarios
    }

}

module.exports = {
    router,
    selectIDUsuario
}