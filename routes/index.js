var express = require('express');
var router = express.Router();
const email = require("../node_modules/emailjs/email");
var titlePages = "Wakerent";

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
  let request = req.body;
  let bodyText = "";
  let sub = "";
  if (request.name) bodyText += " <b style=\"font-size: 15px;\"> Имя: </b> <b>"+request.name+"</b> <br>";
  if (request.email) bodyText += "<b style=\"font-size: 15px;\"> Email: </b> <b>"+request.email+"</b><br>";
  if (request.number) bodyText += "<b style=\"font-size: 15px;\"> Телефон: </b> <b>"+request.number+"</b><br>";
  if (request.term) bodyText += "<b style=\"font-size: 15px;\"> Срок аренды: </b> <b>"+request.term+"</b><br>";

  if (request.isQuestion) {
    if (request.message) {
      bodyText += "<b style=\"font-size: 15px;\"> Сообщение: <br> </b> <b style=\"padding-left: 5px;\">"+request.message+"</b><br>";
      sub = "Запрос от потенциального клиента";
    }
  }
    else if (request.isOrder) {
      if (request.product) sub += request.product; 
  }
  
    var server 	= email.server.connect({
        user:    "saydullaeva.2020@mail.ru", 
        password:"adlanq9806", 
        host:    "smtp.mail.ru", 
        ssl:     true
    });

    // send the message and get a callback with an error or details of the message that was sent
    server.send({
        from:   titlePages + " <saydullaeva.2020@mail.ru>", 
        to:      "<adlansaidullaev@gmail.com>",
        subject: sub,
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
