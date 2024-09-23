import * as db from '../repository/carrosRepository.js'

import {Router} from "express";
const endpoints = Router();



endpoints.get('/carros', async (req,resp) => {
    try {
        let registros = await db.consultarCarros();
        resp.send(registros)
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/carros', async (req,resp) => {
    try {
        let carro = req.body;
        let id = await db.inserirCarros(carro);
        
        resp.send({
            novoId:id
        })
        
        
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/carros/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let carro=req.body;
        let linhasAfetadas=await db.alterarCarros(id,carro);
        
        if(linhasAfetadas==0){
            resp.status(404).send({erro:' nenhum registro encontrado'})        
        }
        
        else(resp.send())
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/carros/:id', async (req,resp) => {
    
    
    try {
        let id = req.params.id;
        let linhasAfetadas= await db.removerCarro(id);
        
        if(linhasAfetadas==0){
            resp.status(404).send({erro:' nenhum registro encontrado'})
            
        }
        
        else(resp.send())
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;