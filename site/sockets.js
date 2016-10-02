var socket = io("http://aranlong.co.uk:3004");

function sendMessage(message) {
        
        socket.emit('message', message);
        
    }

    function sendTraining(move, skel) {
        console.log('message sent');

        var message = {
            username:"dab",
            movename:move,
            skeleton:skel
        };
        socket.emit('training',message);
        
    }

    function sendAuth(skel) {
        var message = {
            username:"dab",
            skeleton:skel
        };
        socket.emit('auth',message);
    }

    function sendDelete(name) {
        var message = {
            username:"dab",
            movename:name
        };
        socket.emit('delete',message);
    }

$(function() {

    var $window = $(window);

    console.log('connecting');
    

    socket.on('auth', function(data) {

      console.log(data.successful);
      alert(data.move + ":  " + data.successful);
    
    });

    
});