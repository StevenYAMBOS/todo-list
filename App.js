// SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// ECOUTEURS
todoButton.addEventListener('click', addTodo);
// Supprimer un élément
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterTodo);

// FONCTIONS
function addTodo(event) {
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Créer le Li
    const newTodo = document.createElement("li");
    // "Todo-input" va servir à écrire ce qu'on veut
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Button check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Button supprimer
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // AJOUTER LA TODOLIST
    todoList.appendChild(todoDiv);
}
todoInput.value = "";

function deleteCheck(event) {
    const item = event.target;
    // BOUTON SUPPRIMER
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation de chute (personnalisée dans le CSS)
        todo.classList.add("fall");
        // Supprimer l'élément todo invisible
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }


    // BOUTON VALIDE
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


    function filterTodo(event) {
        const todos = todoList.childNodes;
        todos.forEach(function (todo) {
            switch (event.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        });
    }