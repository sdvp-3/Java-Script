let toDoList = [];

const saved = localStorage.getItem("todos");
if (saved) {
  toDoList = JSON.parse(saved);
  addToDo(toDoList);
}

function addToDo(arr) {
  let toDoListHtml = "";

  for (let i = 0; i < arr.length; i++) {
    toDoListHtml += `<div class="divs"
 
">  <span class="t1-span">${arr[i].name}</span>
    <span class="t2-span">${arr[i].date}</span> <button class="remove" onclick="removeToDo(${i})"
>Remove</button> </div>`;
  }
  document.querySelector(".js-show").innerHTML = toDoListHtml;
}

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
   const name = document.querySelector(".js-input").value;
  const date = document.querySelector(".js-date").value;

  if (name === "") return;
   if(date ==="") return;

  toDoList.push({ name: name, date: date });

  localStorage.setItem("todos", JSON.stringify(toDoList));
  addToDo(toDoList);

  document.querySelector(".js-input").value = "";
  document.querySelector(".js-date").value = "";
  }
})

document.querySelector(".js-btn").addEventListener("click", () => {
  const name = document.querySelector(".js-input").value;
  const date = document.querySelector(".js-date").value;

  if (name === "") return;

  if(date ==="") return;

  toDoList.push({ name: name, date: date });

  localStorage.setItem("todos", JSON.stringify(toDoList));
  addToDo(toDoList);

  document.querySelector(".js-input").value = "";
  document.querySelector(".js-date").value = "";
});

function removeToDo(index) {
  toDoList.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(toDoList));
  addToDo(toDoList);
}
