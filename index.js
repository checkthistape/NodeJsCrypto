const express = require('express');
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const {solanaScrape} = require("./solanaScrape");
const {bitcoinScrape} = require("./bitcoinScrape");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/home', (req, res, next) => {
    res.render('home');
    next();
});

// app.post('/', (req, res)=>{
//     const { parcel } = req.body;
//     if(!parcel){ return res.status(400).send({status:"failed"}); }
//     res.status(200).send({status:'received'});
// })

app.get("/", (req, res) => {
    
    // res.writeHead(200, {'Content-Type':'text/html'});
    // fs.readFile('index.html', function(error, data){
    //     if (error) { res.writeHead(404); res.write("File not found!");}
    //     else {       
               
    //         //res.write(data);
    //         res.render('home');
    //         //res.json(template);
    //      }
    //      res.end();

    res.send();
    });
    

app.get("/scrape", (req, res) => {
    res.render('scrape');    
        
});

app.get("/scrape.json", (req, res) => {
    
    // (async()=>{
        
    //     var s = await solanaScrape();
    //     var b = await bitcoinScrape();
    //     console.log(await s);
    //     console.log(await b);
    //     res.json({
    //         solana: s,
    //         bitcoin: b
    //     })
    // })();
    // const js=[{ price:1241, value:313 }];
    
});

app.get("/low-page", (req, res) => {
    res.render('low-page');
    
});

app.get("/test-scrape", (req, res) => {
    res.render('scrapeUpdateTest');
    
});

app.get("/test-scrape.json", (req, res) => {
    (async()=>{
        
        var s = await solanaScrape();
        
        console.log("Test before sending: " + await s);

        res.json({
            solana: s
        })
    })();
    
});

app.get("/low-page:lol", (req, res) => {
    res.json({
        message:"yoy"
    });
    
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});