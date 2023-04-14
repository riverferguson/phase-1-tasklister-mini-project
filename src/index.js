//document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener("submit", (e) => {
    e.preventDefault()
   createNewTask()
   e.target.reset()
  })
//});

const createNewTask = () => {
  
  const btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click', handleDelete)
  const newTaskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li")
  newTask.innerText = newTaskDescription.value
  tasks.append(newTask)
  newTask.append(btn)
}

const handleDelete = (e) => {
 e.target.parentNode.remove()
}
