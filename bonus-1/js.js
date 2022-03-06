const container = document.getElementById("container")

const text_1 = document.createElement("p")
text_1.style["color"] = "red"
text_1.textContent = "Hey I'm red"

const header_3 = document.createElement("h3")
header_3.style["color"] = "blue"
header_3.textContent = "I'm a blue h3"

const div = document.createElement("div")
div.style.border = "black solid 3px"
div.style["background-color"] = "pink"

const header_1 = document.createElement("h1")
header_1.textContent = "I'm in a div"

const text_2 = document.createElement("p")
text_2.textContent = "ME TOO!"

container.appendChild(text_1)
container.appendChild(header_3)
div.appendChild(header_1)
div.appendChild(text_2)
container.appendChild(div)

function alertfunction() {
  alert("Yay I did it")
}

const button = document.querySelector("#button")

button.addEventListener("click", function (e) {
  e.target.style.background = "blue"
})

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id)
  })
})
