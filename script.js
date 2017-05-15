// Toggling the .read class button back and forth

$('.read-btn').on('click', function() {
  console.log('hello');
  $(this).toggleClass('.read');
});

//button enable on field input typed
$(function () {
  $('#website-title').keyup(function () {
    if ($(this).val() == '') {
      //Check to see if there is any text entered
      // If there is no text within the input then disable the button
          $('.enableOnInput').prop('disabled', true); }
    else {
      //If there is text in the input, then enable the button
          $('.enableOnInput').prop('disabled', false);
        }
    });
});
//Grabbing text from entry fields once ENTER is pressed
$('#enter-btn').on('click', function() {
  $('.second-section').prepend(' <article>
    <h2>The Website Title</h2>
    <hr>
    <a href="wwww.somewebsite.com" target="_blank">www.websiteurl.com</a>
    <hr>
    <div>
    <button class="read-btn">Read</button>
    <button class="delete-btn">Delete</button>
    </div>
  </article> ');

})
