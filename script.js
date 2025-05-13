const task = document.getElementById("task");
const listContainer = document.getElementById("list-container");

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
}

listContainer.onclick = e => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}