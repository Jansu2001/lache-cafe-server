const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())


const chefs = require('./datas//alldatas.json')

app.get('/', (req, res) => {
    res.send('chef master is comming soon')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(n =>n.chef_id === id)
    res.send(chef)
})


app.listen(port, () => {
    console.log(`chef master is comming sooon${port}`);
})