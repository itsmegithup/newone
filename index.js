import express from 'express';
import { NodeSSH } from 'node-ssh';


import { TodoModule, } from './module/todoModule.js';
import { connectDB } from './db/db.js';
import axios from 'axios';

const app = express();
app.use(express.json())
const ssh = new NodeSSH();
connectDB()


app.post("/todo", async (req, res) => {
  try {

   let data=  await TodoModule.create(req.body)

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(5000, () => {
  console.log('Working on http://localhost:4000');
});