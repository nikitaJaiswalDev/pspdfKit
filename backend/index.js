const express = require('express');
var cors = require('cors');
const { urlencoded } = require('express');
const pdf = require('pdf-thumbnail');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}))
app.use(router);

router.get("/", (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

router.get("/libraries", (req, res) => {
    let fileNames = [];
    fs.readdir(path.join(__dirname, "public/uploads"), (err, files) => {
        res.status(200).send(files);
    });
})

app.listen(5000, () => {
    console.log(`Server Started at 5000`)
})