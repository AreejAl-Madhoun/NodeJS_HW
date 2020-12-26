const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

/* GET API; returns a greeting message with my name, which I've already sent in the URL. */
app.get('/user',(req,res)=>{
    res.json({message: "Welcome", name:req.query.name}); //req.params.name
})

/* POST API; returns the data sent to it, in addition to my name, in JSON format. */
app.post('/user/postRoute', (req, res)=>{
    res.json({message: "Welcome", name:req.body.name});
})


app.listen(3000,()=>{ /* The port I am using is 3000 */
   console.log('server running on port 3000'); 
});

