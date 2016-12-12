var gitHubApi = 'https://api.github.com/gists/public';

function getDataFromApi(callback) {
  var query = {
//     s: searchTerm,
//     r: 'json'
  }
  $.getJSON(gitHubApi,query, callback);
}


function displayOMDBSearchData(data) {
  var resultElement = '';
  if (data) {
   console.log(data[0].html_url)
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
//     var query = $(this).find('.js-query').val();
    getDataFromApi( displayOMDBSearchData);
  });
}

$(function(){watchSubmit();});
