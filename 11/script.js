function cursor() {
  const caderno = document.getElementById("caderno")
  const novoitem = caderno.value
  const itemid = crypto.randomUUID()
  const botaoremover = `<button onclick="remover('${itemid}')"> Remover</button>`
  const listadecompras = document.getElementById("listadecompras")
  listadecompras.innerHTML += `<li id="${itemid}">${novoitem} ${botaoremover}</li>`

  caderno.value = ""
}

function remover(itemid) {
  document.getElementById(itemid).remove()
}
