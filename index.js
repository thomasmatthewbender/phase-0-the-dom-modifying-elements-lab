// Write your code here

const node = document.getElementById("main");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}

const newHeader = document.createElement("h1");

// document.body.append(newHeader);


// newHeader.setAttribute("id", "victory")
newHeader.id = "victory"
newHeader.textContent = "YOUR-NAME is the champion"

// instead of textContent can use innerText or innerHTML sometimes