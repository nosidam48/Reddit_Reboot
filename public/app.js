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
  //GET route to /saved to display 
  console.log("fthis");
  
})
$("#clear").on("click", function() {
 //AJAX request to drop the database
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
//AJAX request to update saved to true
})
$("#note").on("click", function() {
//Create a modal or div that's hidden and then show it when note is clicked
})

$("#save-note").on("click", function() {
  //AJAX request to save the note to the item
})
