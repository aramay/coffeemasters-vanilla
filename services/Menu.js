import API from "./API.js";

export async function loadData() {
    // const menu = await API.fetchMenu()

    app.store.menu = await API.fetchMenu()
    console.log(app)
}

export async function getProductById(id) {
    if (app.store.menu) {
        await loadData()
    }

    for (let category of app.store.menu) {
        for (let product of category.products) {
            if ( product.id === (+id)) {
                return product;
            }
        }
    }
    // if not a match, return null
    return null;
}