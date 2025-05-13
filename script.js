const task = document.getElementById("task");
const listContainer = document.getElementById("list-container");

//Create new li elements and append them to DOM
const addTask = () => {
    if(task.value === '') {
        alert("Upss, you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        listContainer.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }

    task.value = "";
    saveData();
}


//Create li elements event
listContainer.onclick = e => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}

//Press enter to submit new tasks event 
window.onkeydown = e => {
    if (e.key === "Enter") {
        addTask();
    }
}

//Store tasks on the Browser's Local Storage

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

//Retrieve saved data from the Browser's Local Storage

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();