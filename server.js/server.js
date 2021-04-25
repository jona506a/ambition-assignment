const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 8000;

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "http://localhost:5500")
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
   res.header('Access-Control-Allow-Credentials', 'true')
   next()
 })

// app.get('/breweries', async (req, res) => {
//    const api_url = "https://api.openbrewerydb.org/breweries";
//    const fetch_response = await fetch(api_url);
//    const json = fetch_response.json();
//    if (!json) return res.json({ status: 0, message: "Error fetching data"})
//    return res.json({ status: 1, data: json })
// });

 app.listen(port, () => {
   console.log(`Example app listening on port ${port}!`)
});