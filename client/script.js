
/* Expressing and testing the API using the fetch method in the given client side .*/

/*const { json } = require("body-parser");*/

// 1. GET API
fetch('http://localhost:3000/user?name=AreejM.R.AlMadhon',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

// 2. POST API
fetch('http://localhost:3000/user/postRoute',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({message:"Welcome", name: 'Areej M. R. Al Madhon'}),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})



