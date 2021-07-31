const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post("/viewproject", (req, res)=>{
    (async function(){
        try {
            await client.connect();


        }catch (error) {
            console.log(error);
        }
    });  //end async function
}); //end viewproject

app.listen(5000, function(){
    console.log("server running on port 5000");
});