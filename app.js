let enterButton = document.getElementById("enter"),
  input = document.getElementById("userInput"),
  ul = document.querySelector("ul"),
  item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  // create element

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  // delete element

  let deleteBtn = document.createElement("button"),
    checkBtn = document.createElement("button");

  deleteBtn.appendChild(document.createTextNode("X"));
  checkBtn.appendChild(document.createTextNode("✔️"));
  li.appendChild(deleteBtn);
  li.appendChild(checkBtn);
  checkBtn.classList.add("hide");

  deleteBtn.addEventListener("click", deleteListItem);
  checkBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    deleteBtn.parentElement.remove();
    checkBtn.parentElement.remove();
    return;
  }

  // check element

  function crossOut() {
    li.classList.toggle("done");
    checkBtn.classList.toggle("hide");
    deleteBtn.classList.toggle("hide");
  }

  li.addEventListener("click", crossOut);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
