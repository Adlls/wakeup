var express = require('express');
var router = express.Router();

var titlePages = "Getuse";

var itemsMenu = ["service", "accessories", "contact"];
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: titlePages,
                        page: "/" });
});

/* GET service page. */
router.get(`/${itemsMenu[0]}`, (req, res, next) => {
  res.render(`${itemsMenu[0]}`, { title: titlePages,
                                  page: `${itemsMenu[0]}`});
});

/* GET accessories page. */
router.get(`/${itemsMenu[1]}`, (req, res, next) => {
  res.render(`${itemsMenu[1]}`, { title: titlePages,
                                  page: `${itemsMenu[1]}`});
});

/* GET accessories page. */
router.get(`/${itemsMenu[2]}`, (req, res, next) => {
  res.render(`${itemsMenu[2]}`, { title: titlePages,
                                  page: `${itemsMenu[2]}`});
});


module.exports = router;
