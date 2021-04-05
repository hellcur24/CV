const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const filePath = path.join(path.dirname(require.main.filename), 'data', 'info.json');
const pageControllers = require('../controllers/pageControllers');

app.use(bodyParser.urlencoded({extended: true}));




router.get('/', pageControllers.getPage);

module.exports = router;