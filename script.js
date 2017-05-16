// Global variables

var websiteTitle = $('#website-title').val();
var websiteUrl = $('#website-url').val();
var enterBtn = getElementById('#enter-btn');

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

// Enabling the 'enter' button upon text in the input areas

$('#website-title, #website-url').on('input', function() {
  if(websiteTitle === '' || websiteUrl === '') {
    enterBtn.disabled = true;
  } else {
    enterBtn.disabled = false;
  }
});

// Website must be a website (not functional yet, lets work on this or take it to a PAIRING!) https://formden.com/blog/validate-contact-form-jquery
$('#website-url').on('input', function() {
	var input=$(this);
	if (input.val().substring(0,4)=='www.'){input.val('http://www.'+input.val().substring(4));}
	var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
	var is_url=re.test(input.val());
	if(is_url){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
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

function generateBookmark() {
  websiteTitle = $('#website-title').val();
  websiteUrl = $('#website-url').val();

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
