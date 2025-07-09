 // Cria uma função chamada adicionar
function adicionar() {
  
    // Pega o campo de entrada de texto com o id="taskInput" no HTML
  const taskInput = document.getElementById("taskInput")

  // Pega o conteúdo que foi digitado no campo de texto, A .value serve para acessar o valor dentro de um <input>
  const texto = taskInput.value

  // Pega a lista onde as tarefas serão adicionadas, que é um elemento <ul> com id="taskList"
  const taskList = document.getElementById("taskList")

  // Adiciona um novo item na lista, contendo o texto digitado
  // innerHTML permite alterar ou adicionar conteúdo HTML dentro de um elemento.
  // += garante que o novo item será acrescentado, e não irá substituir o conteúdo anterior.
  // `<li>${texto}</li>` cria um novo item de lista (<li>) com o texto digitado.

  taskList.innerHTML += `<li>${texto}</li>`
}
