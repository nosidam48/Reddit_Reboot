// axios.get("https://www.theonion.com/").then(function(response) {
//     // Load the html body from axios into cheerio
//     var $ = cheerio.load(response.data);
//     // For each element with a "title" class
//     $(".curation-module__item").each(function(i, element) {
//       // Save the text and href of each link enclosed in the current element
//       var title = $(element).find("h5").find("a").text()
//       var link = $(element).attr("data-permalink");
//       var picture = $(element).find($("img")).attr("data-src");
      
//       console.log(title + "\n" + link + "\n" + picture);

//       // If this found element had both a title and a link
//       if (title && link && picture) {
//         // Insert the data in the scrapedData db
//         db.Art.create({
//           title: title,
//           link: link,
//           picture: picture
//         },
//         function(err, inserted) {
//           if (err) {
//             // Log the error if one is encountered during the query
//             console.log(err);
//           }
//           else {
//             // Otherwise, log the inserted data
//             console.log(inserted);
//           }
//         });
//       }
//       res.render("index", {title: title[i], link: link[i], picture: picture[i]})
//     });
    
//   });