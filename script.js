
$('#enter-btn').on('click', generateBookmark);
$('#website-title, #website-url').on('input', enableButtons);

$('.second-section').on('click', 'button.read-btn', function() {
  $(this).toggleClass('read');
  $(this).parents().toggleClass('read');
  $(this).closest('article').find('a').toggleClass('read');
  updateReadCount();
});

$('.second-section').on('click', 'button.delete-btn', function() {
  $(this).closest('article').remove();
  updateTotal();
  updateReadCount();
});

$('.first-section').on('click', 'button.clear-all-read', function() {
  $('.read').closest('article').remove();
  updateTotal();
  updateReadCount();
});

$('#website-url').on('input', function() {
  var input=$(this);
  if
  (input.val().substring(0,0)==''){input.val('https://'+input.val().substring(8));}
});

function enableButtons() {
  var userInput = $('#website-title').val();
  var userInput2 = $('#website-url').val().substring(8);
  if (userInput !=='' && userInput2 !=='') {
    $('#enter-btn').prop('disabled', false);
  }
  else {
    $('#enter-btn').prop('disabled', true);
  }
}

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
  $('#website-title').val('');
  $('#website-url').val('');
  $('#enter-btn').attr("disabled", true);
}

function updateTotal() {
  var totalBookmarks = $('.bookmarks');
  $('#total-output').text(totalBookmarks.length);
  updateUnreadCount();
}

function updateReadCount() {
  var totalRead = $('article.read');
  $('#read-output').text(totalRead.length);
  updateUnreadCount();
}

function updateUnreadCount() {
  var numberTotal = $('.bookmarks').length;
  var totalRead = $('article.read').length;
  $('#unread-output').text(numberTotal - totalRead);
}
