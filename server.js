const express = require('express');

const app = express();

app.use(express.static('wmh'));


app.listen(3000, () => { console.log('Server listens at 3000...'); });
