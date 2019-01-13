const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());  


app.get('/', (req, res) => {
    res.status(200).send('Hello Express');
})

/*app.get('/', (req, res)=>{
    console.log('query string place:', req.query.place);
    console.log('query string place:', req.query.food);
    console.log('query string place:', req.query.level);

    res.json(req.query)
})*/
app.get('/:name', (req, res)=>{
    console.log('query string place:', req.params.name);

    res.json(req.query)
})

app.post('/test', (req, res)=>{
    console.log('query string place:', req.body);

    res.json(req.body)
})


const server = app.listen(3030, ()=>{
    console.log('Listening to localhost:3030');
})