const port = 3002;
const express = require('express');
const app = express();



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
 if(!one) return res.json({message : 'not found'})
res.status(200).json(one)
})
// POST recupérer donner envoyer par le client
app.post('/',(req, send)=>{
const client = req.body
console.log(body)

})
app.listen(port, () => {
    console.log(`Le serveur Express est en cours d'écoute sur le port ${port}`);
  });
