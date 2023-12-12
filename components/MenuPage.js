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
    }
}
customElements.define("menu-page", MenuPage);