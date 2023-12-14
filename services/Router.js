const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach((link) => {
            console.log(link)
            link.addEventListener("click", event => {
                event.preventDefault();
                console.log('link ckicked ');

                const url = event.target.getAttribute("href")
                Router.go(url)
                
            });
        })
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false)
        })
        // Check the initial URL
        console.log(location.pathname);
        Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        console.log('going to route ', route);

        if (addToHistory) {
            history.pushState({ route }, '', route)
        }

        let pageElement = null;

        switch(route) {
            case "/":
                pageElement = document.createElement("menu-page")
                // pageElement.textContent = "Menu"
                break;
            case "/order":
                pageElement = document.createElement("order-page")
                // pageElement.textContent = "Orders"
            default:
                if (route.startsWith("/product-")) {
                    pageElement = document.createElement("details-page")
                    // pageElement.textContent = "Details"

                    const paramId = route.substring(route.lastIndexOf("-")+1);
                    // pageElement.id = paramId;
                    pageElement.dataset.productId = paramId;
                }
            
        }

        if (pageElement) {
            // document.querySelector("main").children(0).remove();
            document.querySelector("main").innerHTML = "";
            document.querySelector("main").appendChild(pageElement)

            // scroll to default
            window.scrollX = 0;
            window.scrollY = 0;
        }
        
    }
}

export default Router;