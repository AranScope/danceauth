$(function() {
  Webcam.set({
        width: 320,
        height: 240,
        dest_width: 640,
        dest_height: 480,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    Webcam.attach('#oldcamera');

    var $inputMessage = $('.inputMessage'); // Input message input box
    var $window = $(window);

    console.log('connecting');
    var socket = io("http://aranlong.co.uk:3004");
    //socket.emit('add user', username);

    socket.on('message', function(data) {
      console.log('received message');
      document.getElementById('camera').innerHTML = '<img src="' + data + '" />';
    });

    function sendMessage() {
        var message = $inputMessage.val();
        socket.emit('message', message);
        console.log('message sent');
    }


    $window.keydown(function(event) {
        if (event.which == 13) {
            console.log('enter hit');

            sendMessage();
        }
    });



    function snapshot() {
        Webcam.snap(function(data_uri) {
            socket.emit('message', data_uri);
        });
    }

    setInterval(snapshot, 1000);

});
