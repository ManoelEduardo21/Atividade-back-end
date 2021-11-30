import { cat } from './lib/cat.js';
import express from 'express';

//const express = require('express');

const app = express();

app.use (express.json());

app.get('/', (req, res) => {
    const { address } = req.query;

    const {result} = cat(address);
    
    res.json(result);    

});

app.listen(3000);