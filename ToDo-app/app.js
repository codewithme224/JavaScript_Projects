input.checked = JSON.parse(localStorage.getItem("li"));

// Create a "close" button and append it to each list item
const myNodeList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodeList.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
let x;
for (x = 0; x < close.length; x++) {
  close[x].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("Add an item to the list!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";
  
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (x = 0; x < close.length; x++) {
    close[x].onclick = function(){
      const div = this.parentElement;
      div.style.display = "none";

      updateLocalStorage();
    };
  }

  // update local storage
  updateLocalStorage();
  
  

}

// event listener for the enter key
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    newElement();
  }
});

// function to update local storage
function updateLocalStorage() {
  // Get the list items
  const items = document.getElementsByTagName("LI");

  // Create a string to store the list items
  let itemValues = "";

  // Add the list item values to the string
  for (let i = 0; i < items.length; i++) {
    itemValues += items[i].innerText + "\n";
  }

  // Store the string in local storage
  localStorage.setItem("items", itemValues);
}


// Retrieve the stored list items
const storedValues = localStorage.getItem("items");

// Clear the list
document.getElementById("myUL").innerHTML = "";

// Retrieve the stored list items
// const storedValues = localStorage.getItem("items");

// Clear the list
document.getElementById("myUL").innerHTML = "";

// Add the retrieved list items to the list
// if (storedValues != null) {
//   const lines = storedValues.split("\n");
//   for (let i = 0; i < lines.length; i++) {
//     if (lines[i] !== "") {
//       const li = document.createElement("li");
//       const text = document.createTextNode(lines[i]);
//       li.appendChild(text);

//       const span = document.createElement("SPAN");
//       const txt = document.createTextNode("\u00D7");
//       span.className = "close";
//       span.appendChild(txt);
//       li.appendChild(span);

//       for (let x = 0; x < close.length; x++) {
//         close[x].onclick = function() {
//           const div = this.parentElement;
//           div.style.display = "none";

//           // update local storage
//           updateLocalStorage();
//         };
//       }

//       document.getElementById("myUL").appendChild(li);
//     }
//   }
// }








