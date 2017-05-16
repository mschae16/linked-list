// Global variables

var websiteTitle = $('#website-title').val();
var websiteUrl = $('#website-url').val();


// Toggling the .read class button back and forth

$('.read-btn').on('click', function() {
  $(this).toggleClass('read');
  $(this).parents().toggleClass('read');
  $(this).parents().find('a').toggleClass('read');
});

// When delete button is pressed, bookmark is removed

$('.delete-btn').on('click', function() {
  $(this).parents().remove();
  $(this).parents().find('article').remove();
  console.log('Hello world');
});


// //button enable on field input typed
// $(function () {
//   $('#website-title').keyup(function () {
//     if ($(this).val() == '') {
//       //Check to see if there is any text entered
//       // If there is no text within the input then disable the button
//           $('.enableOnInput').prop('disabled', true); }
//     else {
//       //If there is text in the input, then enable the button
//           $('.enableOnInput').prop('disabled', false);
//         }
//     });
// });


//Grabbing text from entry fields once ENTER is pressed
$('#enter-btn').on('click', generateBookmark);

function generateBookmark(websiteTitle, websiteUrl) {
  $('.second-section').prepend(` <article>
    <h2>${websiteTitle}</h2>
    <hr>
    <a href="${websiteUrl}" target="_blank">${websiteUrl}</a>
    <hr>
    <div>
    <button class="read-btn">Read</button>
    <button class="delete-btn">Delete</button>
    </div>
    </article> `);
  console.log(websiteTitle);
}

