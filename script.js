// Global variables

var websiteTitle = $('#website-title').val();
var websiteUrl = $('#website-url').val();
var enterBtn = $('#enter-btn');

// Function to update counter for read or unread bookmarks - at this point, only increments.

function updateReadCount() {
  var readButton = $('button.read-btn');

  if (readButton.hasClass('read') === true) {
    $('#read-output').html(function(i, val) { return val*1+1 });
  } else {
     $('#read-output').html(function(i, val) { return val*1-1 });
  } console.log('Hello');
}


// Toggling the .read class button back and forth

$('.second-section').on('click', 'button.read-btn', function() {
  $(this).toggleClass('read');
  $(this).parents().toggleClass('read');
  $(this).parents().find('a').toggleClass('read');
  updateReadCount();
  console.log('Hello');
});

// When delete button is clicked, bookmark is removed.

$('.second-section').on('click', 'button.delete-btn', function() {
  $(this).parent().parent().remove();
});

// When clear all bookmarks button is clicked, all read bookmarks are removed.

$('.second-section').on('click', 'button.clear-all-read', function() {
  $(this).parent().parent().find('article.read').remove();
  console.log('hello');
});

// Enabling the 'enter' button upon text in the input areas

function enableButtons() {
  var userInput = $('#website-title').val();
  var userInput2 = $('#website-url').val();
  if (userInput !=="" && userInput2 !=="") {
    $('#enter-btn').prop('disabled', false);
  }
  else {
    $('#enter-btn').prop('disabled', true);
}};

$('#website-title, #website-url').on('input', enableButtons);


// Website must be a website (not functional yet, lets work on this or take it to a PAIRING!) https://formden.com/blog/validate-contact-form-jquery

$('#website-url').on('input', function() {
  var input=$(this);
  console.log(this);
	if (input.val().substring(0,4)=='www.'){input.val('http://www.'+input.val().substring(4));}
	var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
	var is_url=re.test(input.val());
	if(is_url){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});


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
