let XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  if (XHR.readyState === 4) {
    if (XHR.status === 200) {
      console.log(XHR.responseText);
    } else {
      console.log("There was a problem...");
    }
  }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();


// Get some meanigful data through ajax
// let btn = document.querySelector("#btn");
// let img = document.querySelector("#photo");

// btn.addEventListener("click", function(){
//   var XHR = new XMLHttpRequest();
  
//   XHR.onreadystatechange = function() {
//     if (XHR.readyState === 4 && XHR.status === 200) {
//       let url = JSON.parse(XHR.responseText).message;
//       img.src = url;
//     }
//   }
  
//   XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
//   XHR.send();
// })


//Independent request using bitcoin API
// let price = document.querySelector("#price");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function() {
  
//   let XHR = new XMLHttpRequest();
  
//   XHR.onreadystatechange = function () {
//     if (XHR.readyState === 4 && XHR.status === 200) { 
//       let data = JSON.parse(XHR.responseText).bpi;
//       let amount = data.USD.rate;
//       let code = data.USD.code;
//       price.innerText = amount + " " + code;
//     }
//   }

//   XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
//   XHR.send();
  
//   })
