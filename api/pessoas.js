const express = require("express");
const { listaBoletos } = require("./listaBoletos");
const router = express.Router();

const listaPessoas = [
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
router.get('/', (req, res) => {
    res.send(selectPessoas());
})

function selectPessoas() {
    return listaPessoas;
}

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(selectIDPessoa(id))
})

function selectIDPessoa(id) {
    const pessoa = listaPessoas.find(p => p.id == id)
    return pessoa
}

router.post('/', (req, res) => {
    const pessoa = req.body
    res.json(adicionarPessoa(pessoa))
})

function adicionarPessoa(pessoa) {
    if (pessoa.nome != "" && pessoa.cpf != "") {
        pessoa.id = listaPessoas.length + 1
        listaPessoas.push(pessoa)
        return pessoa
    } else {
        return "Campos não inseridos!"
    }
}

router.put('/:id', (req, res) => {
    const id = req.params.id
    const pessoa = req.body
    res.json(editarPesssoa(id, pessoa))
})

function editarPesssoa(id, pessoa) {
    const index = listaPessoas.findIndex(p => p.id == id)
    pessoa.id = id
    listaPessoas[index] = pessoa
    return pessoa
}

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json(deletarPessoa(id))
})

function deletarPessoa(id) {
    if (listaBoletos.find(b => b.idPessoa == id)) {
        return "Não é possivel deletar se a pessoa tem boleto!"
    } else {
        const index = listaPessoas.findIndex(p => p.id == id)
        listaPessoas.splice(index, 1)
        return listaPessoas
    }

}

module.exports = {
    router,
    selectIDPessoa
}









