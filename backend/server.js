const port = 3002;
const express = require('express');
const app = express();


const userRoute = require('./routes/user')


app.use(express.json());


const data =[
    {id : 1, langage : 'js'},
    {id : 2, langage : 'nextjs'},
    {id : 3, langage : 'python'},
]
app.use(express.json())
//all data
app.get('/', (req, res)=>{
    res.status(200).json(data)
})
// one data 
// la méthode params renvoie en chaine de caractère il faut donc le parsint
app.get('/:id', (req, res)=>{
    const {id} = req.params
 const one = data.find(el => el.id === parseInt(id))
 if(!one) return res.status(404).json({message : 'not found'})
res.status(200).json(one)
})
// POST recupérer donner envoyer par le client
app.post('/',(req, res)=>{
const {body} = req
const newOne = {
    id : data.length + 1,
    ...body
}
data.push(newOne)
res.status(201).json(newOne)
})

//upadate modifié
app.put('/:id', (req, res)=>{
    const {id} = req.params
    const { body} = req
    const one = data.find(el => el.id === parseInt(id))
    if(!one) return res.status(404).json({message : 'not found'})
    one.langage = body.langage
    res.status(200).json(one)

})

app.delete('/:id', (req, res)=>{
    const {id} = req.params
    const one = data.find(el => el.id === parseInt(id))
    if(!one) return res.status(404).json({message : 'not found'})
    data.splice(data.indexOf(id), 1)
    res.status(200).json({message :"ref supprimée"})

})
app.listen(port, () => {
    console.log(`Le serveur Express est en cours d'écoute sur le port ${port}`);
  });
