const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000;


const chef = require('./data/chef.json')
app.get('/chef', (req, res)=>{
  res.send(chef)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chef/:id', (req, res) =>
{
  const id = req.params.id;
  console.log(id);
  const allChef = chef.find(n=> n.id == id)
  res.send(allChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})