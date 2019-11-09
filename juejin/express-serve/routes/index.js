var express = require('express');
var router = express.Router();
const {
  find
} = require('../db/db');
/* GET home page. */
// 通过localhost:3000/entries进入
//列表页
router.get('/RecomList', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('RecomList');
  res.json(data);
});



module.exports = router;