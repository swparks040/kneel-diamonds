import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

let metals = getMetals()
let sizes = getSizes()
let styles = getStyles()

const buildOrderListItem = (order) => {
    const foundMetal = metals.find((metal) => {
        return metal.id === order.metalId;
    })

    const foundSize = sizes.find((size) => {
        return size.id === order.sizeId;
    })

    const foundStyle = styles.find((style) => {
        return style.id === order.styleId;
    })

    let totalCost = 
        foundMetal.price +
        foundSize.price +
        foundStyle.price;

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    return `
        <li> Order number ${order.id} costs ${costString}</li>
        `;
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
