/*global $ */
$('input[form-submit]').on('submit', function(event) {
  event.preventDefault();

  var formdata = $('#chat-form form').serialize();
  alert(formdata);
});
