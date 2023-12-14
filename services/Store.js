// apply singleton patter

const Store = {
    menu: null,
    cart: []
}

const proxiedStore = new Proxy(Store, {
    set(target, property, value) {
        target[property] = value

        if (property === 'menu') {
            window.dispatchEvent(new Event("appmenuchanged"));
        }

        if (property === "cart") {
            window.dispatchEvent(new Event("appcartchanged"));
        }
        // important that we return true
        // i.e. we have accepted the set
        return true;
    }
})

export default proxiedStore;