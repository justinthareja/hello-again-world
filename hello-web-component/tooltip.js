const template = document.createElement("template");

template.innerHTML = `

    <style>



    </style>


    <div class="tooltip-container">
        test
    </div>
`;

class Tooltip extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("tooltip-notify", Tooltip);