const form = document.querySelector("form")

const createTask = (taskValue, selectedPriority) => {
  const li = document.createElement("li")
  li.classList.add ("task-item", selectedPriority)
  li.innerText = taskValue

  const button = document.createElement("button")
  button.className = "delete-btn"
  button.innerText = "X"
  button.addEventListener("click", () => li.remove())
  
  li.appendChild(button)
  tasks.appendChild(li)

}

form.addEventListener('submit', e => {
  e.preventDefault()
  let userInput = e.target["new-task-description"].value
  const priorityLevel = e.target.priority.value
  if (userInput !== "" && priorityLevel !== ""){
  createTask(userInput, priorityLevel)
  e.target.reset
  } else {
    alert("You must full out both inputs")
  }
})


  