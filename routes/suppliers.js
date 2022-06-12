var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const { name, website = '', internalComments = '', deliveryTime = '', minimumOrder = '', contacts = [] } = req.body;
  if (!name) {
    res.status(400).send('missing information!');
    return;
  }
  res.send({
    _id: uuid.v1(),
    name, 
    website, 
    internalComments,
    deliveryTime,
    minimumOrder,
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
    contacts
  });
});

module.exports = router;
