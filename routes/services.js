/**
 * Created by manish on 21/03/2018.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('services', { title: 'services PageMJ' });
});

module.exports = router;
