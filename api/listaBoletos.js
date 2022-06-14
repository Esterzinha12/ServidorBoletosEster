const express = require("express");
const router = express.Router();

const listaBoletos = [
    {
        id: 1,
        valor: '100',
        idUser: '1',
        idPessoa: '1',
        status: '',
        nome: 'Ester'

    },
    {
        id: 2,
        valor: '200',
        idUser: '2',
        idPessoa: '2',
        status: '',
        nome: 'Duda'

    }

]

module.exports={
router,
listaBoletos
}