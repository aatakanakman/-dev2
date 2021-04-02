


const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#task");
const toDoList = document.querySelector(".list-group");
const deleteBtn = document.querySelector("#deleteBtn");





addBtn.addEventListener('click',addFunction);
deleteBtn.addEventListener('click',deleteFunction);

function deleteFunction(){
    
    
    
}


function addFunction(){
    let Newinput = input.value;

    console.log(Newinput);
    let li = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    ${Newinput}
    <button id="deleteBtn" class="btn"><i class="fa fa-close"></i></button>
    </li>
    `

    toDoList.innerHTML += li;
}