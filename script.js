const inputBox = document.getElementById("input-box");
const categoryDropdown = document.getElementById("category");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("try adding your task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + " (" + categoryDropdown.value + ")";
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        
        e.target.classList.toggle("checked");
        alert("congrats on completing your task,keep going!");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        if(confirm("are you sure you wanna delete??"))
        e.target.parentElement.remove();
    else
    {
        text="you canceled!";
    }
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
