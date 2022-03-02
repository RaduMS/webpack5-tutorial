const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function (req , res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFormHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFormHtmlFile);
})

app.listen(9001, function () {
    console.log('Application is running on http://localhost:9001/');
})
