$(function() {
  var $inputMessage = $('.inputMessage'); // Input message input box
  var $window = $(window);

  console.log('connecting');
  var socket = io("http://aranlong.co.uk:3005");
  //socket.emit('add user', username);

  function sendMessage () {
    var message = $inputMessage.val();
    socket.emit('message', message);
  }


  $window.keydown(function (event) {
    if(event.which == 13) {

      sendMessage();
    }
  }
});