const container = document.getElementById("container")

container.addEventListener("click", (event) => {
    let item = event.target;
    if (item.className === "remove-button") {
        item.closest(".pane").remove()
    }
})