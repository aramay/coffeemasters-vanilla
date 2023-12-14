export class MenuPage extends HTMLElement {
    constructor() {
        super();
        
        this.root = this.attachShadow({ mode: 'open' })

        const styles = document.createElement("style");
        this.root.appendChild(styles);
        // load CSS
        async function loadCSS () {
            const req = await fetch("/components/MenuPage.css");
            
            const css = await req.text();
            styles.textContent = css;
        }
        loadCSS();

    }
    // when the component is attached to DOM
    connectedCallback() {
        const template = document.getElementById("menu-page-template")
        const content = template.content.cloneNode(true);
        this.root.appendChild(content)

        window.addEventListener("appmenuchanged", () => {
            this.render();
        })
    }

    render() {
        if (app.store.menu) {
            this.root.querySelector("#menu").innerHTML = "";
            for (let category of app.store.menu) {
                console.log(category.name)
                const liCategory = document.createElement('li');
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class='category'>
                    
                    </ul>
                `;
                this.root.querySelector("#menu").appendChild(liCategory);
            }
        }
        else {
            this.root.querySelector("#menu").innerHTML = "Loading..."
        }
    }
}
customElements.define("menu-page", MenuPage);