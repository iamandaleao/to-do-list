function cursor () {
  const caderno = document.getElementById("caderno")
  const novoitem = caderno.value
  const listadecompras = document.getElementById("listadecompras")
  listadecompras.innerHTML += `<li>${novoitem}</li>`
  caderno.value = ""
}