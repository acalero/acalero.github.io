(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';
    
      appendString += '<h2 class="text-center" style="text-transform: uppercase">'+searchTerm+'</h3>'
      appendString += '<h3 class="text-center"><span class="badge" style="font-size: 1em">'+results.length+'</span> artículos encontrados</h3>'
      appendString += '<div style="padding-top: 50px">'
      appendString += '<div class="row">'
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
          
          appendString += '<div class="col-lg-12 portfolio-item">'
          appendString += '<a href="' + item.url + '" class="list-group-item" style="border: 0px">'
          appendString += '<h5 class="list-group-item-heading" style="text-transform: uppercase">' + item.date + '</h5>'
          appendString += '<h3 class="list-group-item-heading" style="text-transform: uppercase">' + item.title + '</h3>'
          appendString += '<p class="list-group-item-text small">' + item.description + '</p>'
          appendString += '</a>'
          appendString += '</div>'
      }
        appendString += '</div>'
        appendString += '</div>'

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<h2 class="text-center">No hay resultados</h2>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'description': window.store[key].description,
        'category': window.store[key].category,
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
