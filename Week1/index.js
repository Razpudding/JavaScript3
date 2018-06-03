// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = processRequest;
// xhr.open('GET', "https://ipinfo.io/json", true);
// xhr.send();

// function processRequest() {
//   console.log(xhr.readyState);
//   if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
//     console.log(xhr)
//     console.log("xhr request DONE SON")
//     let result = xhr.response
//     result = JSON.parse(result)
//     console.log(result.city)
//     renderDataToDom(result)
//   }
//   else if (xhr.status == 404){
//     console.log("Error: resource not found")
//   }
// }

// function renderDataToDom(someData){
//   console.log(someData)
//   let newElement = document.createElement("pre")
//   newElement.innerText = "Our IP: " + JSON.stringify(someData, null, 2)
//   document.body.appendChild(newElement)
// }











/*
* First let's try loading some data without a library!
* We'll query the powerful Github API
*/

let user = "razpudding"
let gitHubUrl = 'https://api.github.com/users/' + user + '/repos';

//Build an XHR request and then send it.
//If you want a more structured approach, write an XHR constructor and call it here
//Read this for more info: https://www.kirupa.com/html5/making_http_requests_js.htm
const xhr = new XMLHttpRequest();
xhr.open('GET', gitHubUrl, true);
xhr.send();
xhr.onreadystatechange = processRequest;

//This function keeps track of changes to the xhr request
function processRequest() {
  //console.log(xhr.readyState);
  if (xhr.readyState == XMLHttpRequest.DONE){
    console.log("xhr request DONE SON");
    let result = xhr.response;
    result = JSON.parse(result)
    renderDataToDom(result)
  }
}

function renderDataToDom(someData){
  console.log(someData)
  let newList = createHTMLElement('ul')
  
  for (let property of someData){
    console.log(property)
    let listItem = createHTMLElement('li', newList)
    listItem.innerText = property.name
  }
}

function createHTMLElement(tag, parent){
  console.log("createHTML element called with:", tag, parent)
  let newElement = document.createElement(tag)
  if (parent){
    parent.appendChild(newElement)
  }
  else {
    document.body.appendChild(newElement)
  }
  return newElement
}

// /*
// * Let's load some CMD stories using the aja library
// * You will need to load the aja lib in the HTML before your own script
// */

// // set variables
// const storiesUrl = 'https://blokweb.org/stories';
// // Hier kunnen we data exposen naar de global scope en dus loggen in de console
// let naarConsole;
// // get data with aja library
// // Aja will load the data returned by the url (which could also be an API call) and return it
// aja()
//   .url(storiesUrl)
//   .on('success', function(data){
//     //If the request returns successfully, call the render function with the resulting data
//     render(data);
//   })
//   .go();

// //Render will be the function where we decide what to do with the data
// //In this case I'll create a list in HTML for each title
// function render(data){
//   //console.log(data); 
//   //console.log(data[0]);
//   //Use this method to put some data in a global var you can access from the console 
//   naarConsole = data; 
//   //Use this method to select a piece of the data for testing
//   let stukjeData = data.slice(0, 10); 
//   //Console.table will try to put all the info in a neat table
//   console.table(stukjeData);  
  
//   //Let's filter the stories we get back based on their genre
//   let genreVerhalen = data.filter(filterOpGenre)
//   console.log("genreverhalen:", genreVerhalen)
//   // Let's create a list in the html
//   let list = document.createElement('ul');
//   // Now well add the list to the body
//   document.body.appendChild(list);
//   // forEach will execute a functionf or each element of an array
//   // This is how forEach works: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//   genreVerhalen.forEach( function(verhaal){
//     // Lets create an li for each story in genreVerhalen
//     let listItem = document.createElement('li');
//     // Now we'll set the text (innerHTML) of the li to something interesting
//     listItem.textContent = verhaal.hvaId + " " + verhaal.sfeerwoord;
//     // Finally, lets add the current li to the ul
//     list.appendChild(listItem)
//   });
// }

// // This function accepts an object as a parameter and returns true if that object
// //  has a property called genre which value is equal to the current zoekGenre
// let zoekGenre = "Avontuur"
// function filterOpGenre (el) {
//  return el.genre == zoekGenre 
// }
