function addTask() {
    var taskInput=document.getElementById("new-task")
    
    var taskList= document.getElementById("task-list")

    if(taskInput.value == ""){
        alert("Please Add a task Boss!😎");
        return;
    }


    //creating elements by js
    var listItem = document.createElement('li')
    listItem.innerText = taskInput.value  //adding the task to the list item

    var buttonContainer = document.createElement('div')
    buttonContainer.className = 'task-buttons'//creating a class name by js because in html there in already a div tag

    var deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'  //showing the delete content inside the button container
    deleteButton.className = 'deletebtn'
    deleteButton.onclick = function(){
        taskList.removeChild(listItem)
    }

    var completeButton = document.createElement('button')
    completeButton.innerText = 'Complete'
    completeButton.className = 'completebutton'
    completeButton.onclick = function(){
        listItem.classList.toggle('complete')
    }


    buttonContainer.appendChild(deleteButton) //adding the delete button to the list
    buttonContainer.appendChild(completeButton) //adding the complete button to the list

    listItem.appendChild(buttonContainer) //adding the button container to the list item

    taskList.appendChild(listItem) //adding the list item to the task list

    taskInput.value = ""  //clearing the input field after adding the task
}
