$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "Введите коректные данные -_-");

    // validate contactForm form
    $(function() {
        $('.contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "Да ладно, у вас нет имени?",
                    minlength: "Какое-то у вас короткое имя -_-"
                },
                subject: {
                    required: "Введите тему",
                    minlength: "Слишком коротко"
                },
                number: {
                    required: "Да ладно, у вас нет телефона?",
                    minlength: "Мне кажется, у вас не так записан номер"
                },
                email: {
                  required: "Нет email - нет заказа",
                  minlength: "Напишите email правильно"
              },
                message: {
                    required: "Эмм, да вы должны записать что-то, чтобы отправить форму",
                    minlength: "Это все?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"/sendemail",
                    success: function() {
                      //$('#contactForm :input').attr('disabled', 'disabled');
                        $('.contactForm').fadeTo( "slow", 1, function() {
                          //$(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('.success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('.contactForm').fadeTo( "slow", 1, function() {
                            $('.error').fadeIn()
                            $('.modal').modal('hide');
		                	$('.error').modal('show');
                        })
                    }
                })
            }
        })
    })

    $('.orderForm').validate({
      rules: {
          name: {
              required: true,
              minlength: 2
          },
          subject: {
              required: true,
              minlength: 4
          },
          number: {
              required: true,
              minlength: 5
          },
          email: {
              required: false,
              email: true
          },
          message: {
              required: true,
              minlength: 5
          }
      },
      messages: {
          name: {
              required: "Да ладно, у вас нет имени?",
              minlength: "Какое-то у вас короткое имя -_-"
          },
          subject: {
              required: "Введите тему",
              minlength: "Слишком коротко"
          },
          number: {
              required: "Да ладно, у вас нет телефона?",
              minlength: "Мне кажется, у вас не так записан номер"
          },
          email: {
              required: "Нет email - нет заказа",
              minlength: "Напишите email правильно"
          },
          message: {
              required: "Эмм, да вы должны записать что-то, чтобы отправить нам сообщение",
              minlength: "Это все?"
          }
      },
      submitHandler: function(form) {
          $(form).ajaxSubmit({
              type:"POST",
              data: $(form).serialize(),
              url:"/sendemail",
              success: function() {
                //$('#contactForm :input').attr('disabled', 'disabled');
                  $('.orderForm').fadeTo( "slow", 1, function() {
                    //$(this).find(':input').attr('disabled', 'disabled');
                      $(this).find('label').css('cursor','default');
                      $('.success').fadeIn()
                      $('.modal').modal('hide');
                $('#success').modal('show');
                  })
              },
              error: function() {
                  $('.orderForm').fadeTo( "slow", 1, function() {
                      $('.error').fadeIn()
                      $('.modal').modal('hide');
                $('.error').modal('show');
                  })
              }
          })
      }
  })
        
 })(jQuery)
})