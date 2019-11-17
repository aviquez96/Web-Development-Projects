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