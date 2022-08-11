import { getSizes, setSize } from "./database.js"

const sizes = getSizes()


export const DiamondSizes = () => {
    let html = "<ul>"
    
    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
        <input type="radio" name="size" value="${size.id}" /> ${size.carats}
        </li>`
    })
    
    html += listItems.join("")
    html += "</ul>"
    
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(`User chose size ${event.target.value}`)
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)