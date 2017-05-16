// Toggling the .read class button back and forth

$('.read-btn').on('click', function() {
  $(this).toggleClass('read');
  $(this).parents().toggleClass('read');
  $(this).parents().find('a').toggleClass('read');
});
