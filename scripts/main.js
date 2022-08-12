import { KneelDiamonds } from "./KneelDiamonds.js"

import { addCustomOrder } from "./database.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
      addCustomOrder();
    }
});

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})