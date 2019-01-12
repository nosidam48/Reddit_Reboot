function displayResults(data) {
  // Empty any results currently on the page
  $(".article-div").empty();
  // Grab all of the current notes
  
    data.forEach(art => {
      // ...populate #results with a p-tag that includes the note's title and object id
      if (art.saved === false) {
      $(".article-div").prepend("<p class='data-entry' data-id=" + art._id + "><span class='dataTitle' data-id=" +
        art._id + ">" + art.title + "</span><span class=delete>X</span></p>");
    }
  });
}
goHome = () => {
  $.ajax({
    url: "/posts",
    method: "GET"
  }).then(response => {
    displayResults(response)
  });
};



$("#saved").on("click", function() {
  //GET route to /saved to display 
  console.log("i got clicked");
  
  
})
$("#clear").on("click", function() {
 //AJAX request to drop the database
})
$("#scrape").on("click", () => {
  console.log(("clicked"));
  
  goHome()
})

$("#save-art").on("click", function() {
//AJAX request to update saved to true
console.log("click all day");
// const thisId = $(this).attr("data-id")
// $.ajax({
//   url: "/posts/" + thisId,
//   method: "POST"
// }).then(function(data) {
//   alert(data);
//   goHome();
// });
});

$("#note").on("click", function() {
//Create a modal or div that's hidden and then show it when note is clicked
})

$("#save-note").on("click", function() {
  //AJAX request to save the note to the item
})

$.getJSON("/Posts", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});