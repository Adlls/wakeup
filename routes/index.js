var express = require('express');
var router = express.Router();
const email = require("../node_modules/emailjs/email");
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

/* POST get mail. */
router.post('/sendemail', (req, res, next) => {
  let bodyText = "";
  if(req.body.name) bodyText += " <b style=\"font-size: 15px;\"> Имя: </b> <b>"+req.body.name+"</b> <br>";
  if(req.body.email) bodyText += "<b style=\"font-size: 15px;\"> Email: </b> <b>"+req.body.email+"</b><br>";
  if(req.body.tel) bodyText += "  <b style=\"font-size: 15px;\"> Телефон: </b> <b>"+req.body.tel+"</b><br>";

    var server 	= email.server.connect({
        user:    "saydullaeva.2020@mail.ru", 
        password:"adlanq9806", 
        host:    "smtp.mail.ru", 
        ssl:     true
    });

    // send the message and get a callback with an error or details of the message that was sent
    server.send({
        from:    "Client <saydullaeva.2020@mail.ru>", 
        to:      "someone <adlansaidullaev@gmail.com>",
        subject: "",
        attachment: 
        [
          { data:"<html>"+bodyText+"</html>", 
            alternative:true
          },
        ]
    }, function(err, message) { console.log(err || message); });
      res.send();
    });


module.exports = router;
