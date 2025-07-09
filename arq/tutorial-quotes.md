- aspas duplas: usar ao redor de textos ou de ids, exemplos:

const texto = "texto aqui"

ou

<button id="id-aqui">Texto do botão</button>

---

- aspas simples: mesma coisa, exemplos:

const texto = 'texto aqui'

<button id='id-aqui'>Texto do botão</button>

---

- aspas invertidas (crase): usadas para interpolação de strings, ou seja, para incluir variáveis dentro de strings, exemplos:

const idade = 30
const texto = `Eu tenho ${idade}`

---

pode usar aspas simples dentro de duplas, exemplo:

const texto = "eu sou 'chato'"

---

pode usar aspas duplas dentro de simples, exemplo:

const texto = 'eu sou "chato"'

---

sempre ficar atento que: abriu uma aspas simples no começo, obrigatoriamente vai ter que fechar no final

abrou aspas duplas no começo, vai ter que fechar no final

abriu crase no começo, vai ter que fechar no final

é um "LIFO" = último a entrar é o primeiro a sair

ou seja:

const numero = 42
const texto = `longo texto com "texto dentro de 'texto'" e ${numero} 😬`

o último aberto foi aspas simples, então foi o primeiro a ser fechado, antes foi aberto a dupla, então é o próximo a ser fechado, e por último a crase