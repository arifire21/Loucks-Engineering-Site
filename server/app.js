const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const dbURI = 'mongodb://localhost:27018';
const client = new MongoClient(dbURI);

app.post('/post', (req, res)=>{
    (async function(){
        try {
        await client.connect();
        
        const db = client.db('loucks-eng');
        const collection = db.collection('projects');
        
        let db_response = await collection.insertOne({
            "job_number" : req.body.job_number,
            "project_name" : req.body.project_name,
            "client_company" : req.body.company,
            "status" : req.body.job_status,
        })

        console.log("db output: " + db_response);
        res.json({"success" : true});
        }catch(error){
            console.log(error);
        }
    }); //end async function
}); //end post

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