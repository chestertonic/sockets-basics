var socket = io();
// cached elements
var $form = $('#message-form');
var $message = $('input[name=message]');
var $messages = $('.messages');

// socket events

socket.on('connect', function() {
  console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
  console.log('New Message: ');
  console.log(message.text);

  $messages.append('<p>' + message.text + '</p>');
});

// message events

$form.on('submit', function(event) {
  event.preventDefault();

  socket.emit('message', {
    text: $message.val()
  });

  $message.val('');

});
