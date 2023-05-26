const addBtn = document.querySelector("#add-Btn")
addBtn.addEventListener("click",addBtnClick)
const taskInput = document.querySelector("#todoInput")

function addBtnClick(){
    str = taskInput.value
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(str))
    li.innerHTML += ' <button onclick="this.parentNode.remove()">-</button>';
    document.getElementById("out").appendChild(li);
    taskInput.value=""
}