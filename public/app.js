function getResults() {
  // Empty any results currently on the page
  $(".art-div").empty();
  // Grab all of the current notes
  $.getJSON("/all", function(data) {
    // For each note...
    for (var i = 0; i < data.length; i++) {
      // ...populate #results with a p-tag that includes the note's title and object id
      $(".art-div").prepend("<p class='data-entry' data-id=" + data[i]._id + "><span class='dataTitle' data-id=" +
        data[i]._id + ">" + data[i].title + "</span><span class=delete>X</span></p>");
    }
  });
}

getResults()

$("#saved").on("click", function() {
  
})
$("#clear").on("click", function() {
  $.ajax
})
$("#scrape").on("click", function() {
  $.getJSON("/scrape", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $(".card-title").text(data[i].title);
      $("img").attr("src").val(data[i].picture);
      $("p").text(data[i].link);
    }
  });
})
$("#save-art").on("click", function() {

})
$("#note").on("click", function() {

})
