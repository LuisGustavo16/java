const lisElement = document.querySelector("#app ul")
const inputElement = document.querySelector ("#app input")
const buttomElement = document.querySelector ("#app button")

const tarefas = ["Estudar para a prova", "Dormir cedo"]

for (const iterator of tarefas) {
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(iterator)

    tarefaElement.appendChild(tarefaText)
    lisElement.appendChild(tarefaElement)
}
