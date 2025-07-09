const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
const themeIcon = document.getElementById("theme-icon")

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim())
    taskInput.value = ""
  }
})

function addTask(text) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  span.textContent = text

  const btnGroup = document.createElement("div")
  btnGroup.classList.add("buttons")

  const editBtn = document.createElement("button")
  editBtn.classList.add("edit")
  editBtn.innerHTML = "✏️"
  editBtn.title = "Editar"
  editBtn.onclick = () => editTask(span)

  const removeBtn = document.createElement("button")
  removeBtn.classList.add("remove")
  removeBtn.innerHTML = "❌"
  removeBtn.title = "Remover"
  removeBtn.onclick = () => li.remove()

  btnGroup.appendChild(editBtn)
  btnGroup.appendChild(removeBtn)

  li.appendChild(span)
  li.appendChild(btnGroup)
  taskList.appendChild(li)
}

function editTask(span) {
  const newText = prompt("Editar tarefa:", span.textContent)
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim()
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark")
  document.body.classList.toggle("light")
  themeIcon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"
}
