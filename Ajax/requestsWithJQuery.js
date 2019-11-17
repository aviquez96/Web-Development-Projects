$("#btn").click(function() {
  
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-awqwerqwend=filler",
      dataType: 'json'
    })
    .done(function(data) {
      $("p").text(data[[0]])
    })
    .fail(function() {
      alert("Oh no!!!");
    })
    
  })
  

//   $("#btn").click(function() {
  
//     $.ajax({
//       method: "GET",
//       url: "https://baconipsum.com/api/?type=meat-awqwerqwend=filler",
//       dataType: 'json'
//     })
//     .done(function(data) {
//       $("p").text(data[[0]])
//     })
//     .fail(function() {
//       alert("Oh no!!!");
//     })
    
//   })
  
//   //Shorthand for ajax with get method
//   $("#get").click(function() {
//     $.get("https://api.github.com/users/aviquez96")
//     .done(function(data) {
//       console.log(data);
//     })
//   })
                  
//   $("#post").click(function() {
//     $.post("www.catsarecoolandsoaredogs.com")
//     .done(function(data) {
//       console.log(data)
//     })
//     .fail(function(err) {
//       console.log(err);
//     })
//   })
                   
//   $("#getJSON").click(function() {
//     $.getJSON("https://api.github.com/users/aviquez96")
//     .done(function(data) {
//       console.log(data);
//     })
//   })
                  
                  
