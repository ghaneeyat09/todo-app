//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//event listeners

todoBtn.onclick = function(){
    if(todoInput.value === ""){
        alert("you are yet to enter your todo activity");
        return true;
    }else{
        addToDo(event);
        clearInput();
        return false;
    }

};


//function

function addToDo(event) {
        event.preventDefault();
        //create div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
       //create li
        const newTodo = document.createElement("li");
        newTodo.innerHTML = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //check mark button
        const completedBtn = document.createElement("button");
        completedBtn.innerHTML = '<i class="fas fa-check"></i>';
        completedBtn.classList.add("complete-btn");
        todoDiv.appendChild(completedBtn);
        //check trashBtn
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        trashBtn.classList.add("trash-btn");
        trashBtn.addEventListener('click', removeItem);
        todoDiv.appendChild(trashBtn);
        //append todoDiv
            todoList.appendChild(todoDiv);

    }

function clearInput() {
    todoInput.value = "";
}
function removeItem(e){
       const item = e.target;
       if(item.classList[0] === "trash-btn"){
           const todoParent = item.parentElement;
           todoParent.classList.add("fall");
           todoParent.addEventListener("transitioned", function() {
               todoParent.remove();
               
           });
        }
    }




