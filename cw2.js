var cw_status = false;
var cw_sendstatus = false;


$(document).load(function() {
//
});


// INPUT mask
//$("#phone").mask("+7(999)999-99-99");
$("head").append("<link>");
css = $("head").children(":last");
css.attr({
  rel:  "stylesheet",
  type: "text/css",
  href: "//cdn.rawgit.com/sigein/jquery-cdn/master/cw2.css" //здесь указывается URL стилевого файла
});


$(function() {
  setTimeout(function(){
//function body


  },3000);

});


function close_cw() {

  if (cw_status) {
    $('.lt-xbutton').removeClass('lt-xbutton-active')
    cw_status = !cw_status;
    el.removeEventListener("click", open_cw);

    $('.lt-xbutton-input').css("display", "inline");
    $('.lt-xbutton-input1').css("display", "inline");
    $('.cw-inner-text').css("display", "none");
    $('#fa-close').css("display", "none");
    $('#fa-phone').css("visibility", "visible");

    if (cw_sendstatus) {document.getElementById('cw_form').reset();}
  }


}


function open_cw() {
  if (!cw_status) {
    $('.lt-xbutton').addClass('lt-xbutton-active');
    $('#fa-phone').css("visibility", "hidden");
    $('#fa-close').css("display", "block");
    cw_status = !cw_status;
  }
}


$(function() {
  setInterval(function(){
    el.addEventListener("click", open_cw);
  },1000);
});


function send_cw() {

if (!cw_sendstatus) {

  var value1 = $('#cw_name').val();
  var value2 = $('#cw_phone').val();

  if (value1 != '') {$('.lt-xbutton-input').css("border-color", "red");}
  if (value2 != '') {$('.lt-xbutton-input1').css("border-color", "red");}

  if ((value1 != '') && (value2 != '')) {
    $('.lt-xbutton-input').css("border-color", "#d1d1d1");
    $('.lt-xbutton-input1').css("border-color", "#d1d1d1");

    $.ajax({
            type: 'post',
            url: cw_host,
            data: $('#cw_form').serialize(),
            success: function () {
                  $('.lt-xbutton-input').css("display", "none");
                  $('.lt-xbutton-input1').css("display", "none");
                  $('.cw-inner-text').css("display", "block");
                  cw_sendstatus = true;
            }
          });
  } else {
      
  }


  } else {
    cw_sendstatus = false;
    close_cw();
  }
}


function kerek_emes() {

  setTimeout(function(){
    $('.lt-xbutton').removeClass('lt-xbutton-active')
    $('.lt-xwidget-caller-statuses').css("opacity", "1")
    $('.lt-xwidget-caller-statuses').css("z-index", "999")
    $('.lt-xwidget-caller-on').css("opacity", "1")
    $('.lt-xwidget-caller-on').css("z-index", "10")
  },5500);
  setTimeout(function(){
    $('.lt-xwidget-caller-on').css("opacity", "0")
    $('.lt-xwidget-caller-on').css("z-index", "-1")
    $('.lt-xwidget-caller-error').css("opacity", "1")
    $('.lt-xwidget-caller-error').css("z-index", "10")
  },8500);
  setTimeout(function(){
    $('.lt-xwidget-caller-error').css("opacity", "0")
    $('.lt-xwidget-caller-error').css("z-index", "-1")
    $('.lt-xwidget-caller-busy').css("opacity", "1")
    $('.lt-xwidget-caller-busy').css("z-index", "10")
  },11500);
  setTimeout(function(){
    ('.lt-xwidget-caller-busy').css("opacity", "0")
    $('.lt-xwidget-caller-busy').css("z-index", "-1")
    $('.lt-xwidget-spiner-min').css("opacity", "1")
    $('.lt-xwidget-caller-min').css("z-index", "10")
  },13500);

}

//EASY CONTDOWN FUNCTION
var CountdownID = null;
var start_sec = 5;
window.onload = function () {
  //countDown(start_sec, "timecalling");

var request = new XMLHttpRequest();
//var request = new XDomainRequest();
request.open('GET', '//cdn.rawgit.com/sigein/jquery-cdn/master/cw2.html');

request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            //document.body.innerHTML = request.responseText;

            var cwDiv = document.createElement('div')
            cwDiv.setAttribute("id", "widget-call");
            cwDiv.innerHTML = request.responseText;
            document.body.appendChild(cwDiv);


            window.el = document.getElementById("xbutton-wrapper");
            window.el.addEventListener("click", open_cw);

            window.xl = document.getElementById("xbutton-close");
            window.xl.addEventListener("click", close_cw);


        } else {
            console.log('Сетевая ошибка: ' + request.status);
        }
    }
};
request.send(null);

}
