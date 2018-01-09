var express =  require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : false}));




router.get('/' , function (request , response) {
	var output = {
		text : "random text",
		status_code : 200
	};

	response.json(output);
});

module.exports = router;
