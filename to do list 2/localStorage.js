function saveTask(newTask, done) {
    let saveList;
    if (localStorage.getItem("saveList") === null) {
        saveList = [];
    }
    else {
        saveList = JSON.parse(localStorage.getItem("saveList"));
    }
    saveList.push({
        value: newTask, status: done
    });
    localStorage.setItem("saveList", JSON.stringify(saveList));
}

function loadSaveList() {
    let loadList = JSON.parse(localStorage.getItem("saveList"));
    if (loadList != null) {
        loadList.forEach((loadTask) => {
            addTaskToList(loadTask.value);
        });
    }
}  

function removeTaskSaveList(indexToRemove) {
    const saveList = JSON.parse(localStorage.getItem("saveList"));
    saveList.splice(indexToRemove, 1);
    localStorage.setItem("saveList", JSON.stringify(saveList));
}

//function updateTaskList(task, status) {
//    if (status) {
        
//    }
//}