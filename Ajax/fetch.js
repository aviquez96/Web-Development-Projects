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
