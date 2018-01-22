var express = require('express');
var router = require('express-promise-router')();

/* GET users listing. */
router.get('/', async (req, res)=> {
  await res.send('respond with users');
});

router.get('/error', async (req, res)=> {
  throw new Error("test error");
});

module.exports = router;
