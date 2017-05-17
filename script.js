// Global variables

var websiteTitle = $('#website-title').val();
var websiteUrl = $('#website-url').val();
var enterBtn = $('#enter-btn');
var totalBookmarks = $('.bookmarks');

// Event Listener to generate bookmarks

enterBtn.on('click', generateBookmark);

// function to generate new bookmarks

function generateBookmark() {
  var websiteTitle = $('#website-title').val();
  var websiteUrl = $('#website-url').val();

  $('.second-section').prepend(` <article class="bookmarks">
    <h2>${websiteTitle}</h2>
    <hr>
    <a href="${websiteUrl}" target="_blank">${websiteUrl}</a>
    <hr>
    <div>
    <button class="read-btn">Read</button>
    <button class="delete-btn">Delete</button>
    </div>
    </article> `);
    updateTotal();
}

// Function to update total bookmarks counter

function updateTotal() {
  var totalBookmarks = $('.bookmarks');
  $('#total-output').text(totalBookmarks.length);
  updateUnreadCount();
}

// Function to update counter for read bookmarks.

function updateReadCount() {
  var totalRead = $('article.read');
  $('#read-output').text(totalRead.length);
  updateUnreadCount();
}

// Function to update counter for unread bookmarks.

function updateUnreadCount() {
  var numberTotal = $('.bookmarks').length;
  var totalRead = $('article.read').length;
  $('#unread-output').text(numberTotal - totalRead);
}

// Event to toggle the .read class button on and off

$('.second-section').on('click', 'button.read-btn', function() {
  $(this).toggleClass('read');
  $(this).parents().toggleClass('read');
  $(this).parents().find('a').toggleClass('read');
  updateReadCount();
});

// Event to delete bookmarks

$('.second-section').on('click', 'button.delete-btn', function() {
  $(this).closest('article').remove();
  updateTotal();
  updateReadCount();
});

// Event to clear all read bookmarks

$('.first-section').on('click', 'button.clear-all-read', function() {
  $('.read').closest('article').remove()
  updateTotal();
  updateReadCount();
});

// Function to enable the 'enter' button upon text in the input areas

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
