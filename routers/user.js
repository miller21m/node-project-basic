const express = require('express');
const { get } = require('request');
const request = require('request');
const router = new express.Router()
const gs = require('../main')

router.post('/users', async(req,res)=>{
    console.log(req.body);
    const userId = req.body.id;
    
    try{
        const response = await gs.getUser(userId);
        console.log('From user ' +  response);
         res.status(201).send(response);
    }catch(error){
        console.log('In error');
        res.status(400).send(error);
    }
});


router.post('/startWorkDay', async(req, res)=>{
    const userId = req.body.id;
    try{
        const response = await gs.startWorkDay(userId);
        res.status(200).send(response)
    }catch(error){
        res.status(400).send(error);
    }
});

router.post('/endWorkDay', async(req, res)=>{
    const userId = req.body.id;
    try{
        const response = await gs.endDay(userId);
        res.status(200).send(response)
    }catch(error){
        res.status(400).send(error);
    }
});

router.post('/startBraek', async(req, res)=>{
    const userId = req.body.id;
    try{
        const response = await gs.startBraek(userId);
        res.status(200).send(response)
    }catch(error){
        res.status(400).send(error);
    }
});


router.post('/endBraek', async(req, res)=>{
    const userId = req.body.id;
    try{
        const response = await gs.endBreak(userId);
        res.status(200).send(response)
    }catch(error){
        res.status(400).send(error);
    }
});



router.get('/test', (req,res)=>{
    res.send({
        name:'Michael',
        lastName:'Miller'
    })
})


module.exports = router

