
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8080;

require('./routes/index');
app.use(require('./routes/index'))

app.listen(port, () => {
  console.log('Live on port: ' + port);
});

