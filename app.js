// NOTE

// DATA STRUCTURES

// X menu array with some items
// X cart or order array with purchased items

// CONTROL FLOW OF THE APP OR THE FUNCTION WE NEED

// buy function
// draw order items
// draw menu items
// eat the items (delete)

let items = {
    tacos: {
        title: "Tacos",
        ingredients: "Tortilla, meat, cheese.",
        vegan: false,
        price: "$1.25"

        // NOTE this handles both display and easy math operations
        // price: {
        //     display: "$1.25",
        //     value: 1.25
        // }
    },
    enchiladas: {
        title: "Enchiladas",
        ingredients: "Tortilla, meat, cheese.",
        vegan: false,
        price: "$3.25"
    },
    tamales: {
        title: "Tamales",
        ingredients: "Masa, meat.",
        vegan: false,
        price: "FREE"
    },
    burrito:{
        title: "Burrito",
        ingredients: "Tortilla, meat, cheese, bean.",
        vegan: false,
        price: "$12.00"
    }
}

let cart = []


// NOTE 
// For each menu item create a col and or card for it and add it into our menu items row.
// iterate through the menu to access each item
// take each items properties and format them into a column
// add the formatted item into our template to be injected later
// Inject the items into the row element
function drawMenu() {
    let template = ""
    let menuElem = document.getElementById("menu-items")
    for (let key in items) {
        let item = items[key]
        template += /* html */`
        <div class="col-3 border rounded text-center">
                        <h1>${item.title}</h1>
                        <h3>${item.ingredients}</h3>
                        ${item.vegan ? "<p>Vegan</p>":""}
                        <p>${item.price}</p>
                        <button class="btn btn-success btn-block text-uppercase" onclick="buy('${key}')">Buy ${item.title}</button>
                    </div>
        `
    }
    menuElem.innerHTML = template
}

function drawCart() {
    let template = ""
    let cartElem = document.getElementById("order-items")
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]
        template += /* html */`
        <div class="col-3 border rounded text-center">
                        <h1>${item.title}</h1>
                        <h3>${item.ingredients}</h3>
                        ${item.vegan ? "<p>Vegan</p>":""}
                        <p>${item.price}</p>
                        <button class="btn btn-success btn-block text-uppercase" onclick="eat(${i})">Eat ${item.title}</button>
                    </div>
        `
    }
    cartElem.innerHTML = template
}

// NOTE needs to take the clicked on item and add it to the cart
// takes in the item
function buy(itemKey) {
    let item = items[itemKey]
    cart.push(item)
    let seconds = 3
    setTimeout(drawCart, seconds*1000)
}

function eat(itemIndex) {
    cart.splice(itemIndex, 1)
    drawCart()
}







drawMenu()