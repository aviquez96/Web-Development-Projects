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