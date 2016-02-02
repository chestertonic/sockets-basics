/*global io, moment, $, getQueryVariable*/
/*eslint no-console: 0*/
var name = getQueryVariable('name') || 'anonymous';
var room = getQueryVariable('room');
var socket = io();

// cached elements
var $form = $('#message-form');
var $message = $('input[name=message]');
var $messages = $('.messages');

$('.room-name').text(room);

// socket events
console.log(name + ' wants to join ' + room);

socket.on('connect', function() {
  console.log('Connected to socket.io server!');
  socket.emit('joinRoom', {
    name: name,
    room: room
  });
});

socket.on('message', function(message) {
  var momentTimestamp = moment().utc(message.timestamp);
  console.log('New Message: ');
  console.log(message.text);
  $messages.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + '</strong></p> ');
  $messages.append('<p>' + message.text + '</p>');
});

// message events

$form.on('submit', function(event) {
  event.preventDefault();

  socket.emit('message', {
    name: name,
    text: $message.val()
  });

  $message.val('');

});
