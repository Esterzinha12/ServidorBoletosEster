const express = require("express");
const { selectIDPessoa } = require("./pessoas");
const { selectIDUsuario } = require("./usuarios");
const { listaBoletos } = require("./listaBoletos");
const router = express.Router();


router.get('/', (req, res) => {
    res.send(selectBoletos());
})

function selectBoletos() {
    return listaBoletos;
}

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(selectID(id))
})

function selectID(id) {
    const boletos = listaBoletos.find(p => p.id == id)
    return boletos
}
router.get('/boletosPessoa/:idPessoa', (req, res) => {
    const idPessoa = req.params.idPessoa
    res.json(selectBoletosPessoa(idPessoa))
})

function selectBoletosPessoa(idPessoa) {
    const boletosPessoa = []
    listaBoletos.forEach(e => {
        if (e.idPessoa == idPessoa) {
            boletosPessoa.push(e)
        }
    });
    return boletosPessoa
}

router.post('/', (req, res) => {
    const boletos = req.body
    res.json(adicionarBoleto(boletos))

})

function adicionarBoleto(boletos) {
    if (boletos.idPessoa != "" && boletos.idUser != "" && boletos.valor > 0) {
        if (selectIDPessoa(boletos.idPessoa) == undefined) {
            return "pessoa não encontrada"
        } else if (selectIDUsuario(boletos.idUser) == undefined) {
            return "usuario não encontrado"
        } else {
            const pessoa= selectIDPessoa(boletos.idPessoa)
            boletos.nome = pessoa.nome
            boletos.id = listaBoletos.length + 1
            listaBoletos.push(boletos)
            return boletos
        }
    } else {
        return "Dados invalidos!"
    }
}

router.put('/:id', (req, res) => {
    const id = req.params.id
    const boletos = req.body
    res.json(editarBoleto(id, boletos))
})

function editarBoleto(id, boletos) {
    const index = listaBoletos.findIndex(p => p.id == id)
    boletos.id = id
    listaBoletos[index] = boletos
    return boletos
}


module.exports = {
    router,
    selectBoletos
}
