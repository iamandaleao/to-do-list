function cursor () {
  const caderno = document.getElementById("caderno")
  const novoitem = caderno.value
  const iditem = crypto.randomUUID()

  const botaoremover = `<button onclick="remover('${iditem}')">Remover</button`
  const listadecompras = document.getElementById("listadecompras")

  listadecompras.innerHTML += `<li id="${iditem}">${novoitem} ${botaoremover}</li>`
  caderno.value = ""
}

function remover(iditem) {
  document.getElementById(iditem).remove()
}