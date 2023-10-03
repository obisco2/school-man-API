const { Client } = require("pg")

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'school',
    user: 'postgres',
    password: 'akanfess'
})
client.connect((error) =>{
    if (error){
        throw Error(error);
    }
    else {
        console.log("connected to the database");
    }
});

module.exports = client;