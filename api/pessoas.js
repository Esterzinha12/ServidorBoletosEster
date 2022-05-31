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


router.get('/', (req, res)=>{
    res.send(selectPessoas());
})

module.exports = {
    router,
    selectPessoas
}
    


    




