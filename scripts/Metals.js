import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

export const Metals = () => {
    let html = "<ul>"
    
    // SWP Changed for...of loop to .map() to convert objects to <li> elements
    const listItems = metals.map(metal => {
        html += `<li>
        <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

