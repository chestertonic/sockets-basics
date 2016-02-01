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
  var momentTimestamp = moment().utc(message.timestamp);
  console.log('New Message: ');
  console.log(message.text);

  $messages.append('<p><strong>' + momentTimestamp.format('h:mm a') + ':</strong> ' + message.text + '</p>');
});

// message events

$form.on('submit', function(event) {
  event.preventDefault();

  socket.emit('message', {
    text: $message.val(),
  /*  timestamp: moment().format('x')*/
  });

  $message.val('');

});
