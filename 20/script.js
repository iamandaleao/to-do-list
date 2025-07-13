function cursor () {
  const caderno = document.getElementById("caderno")
  const novoitem = caderno.value
  const iditem = crypto.randomUUID()
  if 
  const listadecompras = document.getElementById("listadecompras")
  listadecompras.innerHTML = `<li id="{'iditem'}"${novoitem} ${botaoremover}></li>`
  const botaoremover = `<button onclick="remover('${iditem}')">Remover</button>`

}

function remover(iditem) {
document.getElementById(iditem).remove()
}
