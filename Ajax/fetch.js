//Using fetch instead
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then(function(res) {
  //return promise
  return res.json()
})
.then(function(data) {
    console.log(data);
})

// You can adjust the actions of the fetch method
// fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
//   method: "POST",
//   body: JSON.stringify({
//     name: 'blue',
//     login: 'bluecat'
//   })
// })
// .then(function(res) {
//   //return promise
//   return res.json()
// })
// .then(function(data) {
//     console.log(data);
// })


//More complete fetch example
// var btn = document.querySelector("button");
// btn.addEventListener("click", function(){
  
//   var url = 'https://api.github.com/users/colt';
  
//   fetch(url)
//   .then(handleErrors)
//   .then(function(request) {
//     console.log("Everything is fine");
//     console.log(request);
//   }) 
//   //Code run if there's a problem with the request itself, not the value of the response
//   .catch(function(error) {
//     console.log(error);
//   })  
// })

// function handleErrors (request) {
//   if(!request.ok) {
//     throw Error("Erroooor");
//   }
//   return request;
// }