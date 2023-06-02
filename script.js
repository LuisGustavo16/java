const lisElement = document.querySelector("#app ul")
const inputElement = document.querySelector ("#app div input")
const buttomElement = document.querySelector ("#app div button")

const tarefas = JSON.parse (localStorage.getItem ("list")) || []

function renderTarefas() {
    lisElement.innerHTML = ""
    for (const iterator of tarefas) {
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(iterator)
    
        const linkElement = document.createElement ("a")
        linkElement.setAttribute ("href", "#")

        const pos = tarefas.indexOf (iterator)
        linkElement.setAttribute ("onclick", `deleteTarefa(${pos})`)

        const linkText = document.createTextNode ("APAGAR")
        linkElement.appendChild (linkText)

        tarefaElement.appendChild(tarefaText)
        lisElement.appendChild(tarefaElement)
        lisElement.appendChild (linkElement)
    }
}

renderTarefas ()

function addTarefas () {
    const tarefaText = inputElement.value
    tarefas.push (tarefaText)
    inputElement.value = ""
    renderTarefas ()
    save ()
}

buttomElement.onclick = addTarefas

function deleteTarefa (pos) {
    tarefas.splice (pos, 1)
    renderTarefas ()
    save ()
}

function save () {
    localStorage.setItem ("list", JSON.stringify (tarefas))
}