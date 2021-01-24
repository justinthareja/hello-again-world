// If required, define an HTML template using < template > and<slot>.
const template = document.createElement("template");

template.innerHTML = `

    <style>

        .tooltip-container {
            color: red;
        }

    </style>


    <div class="tooltip-container">
        test
    </div>
`;

// Create a class in which you specify your web component functionality, using the 
// ECMAScript 2015 class syntax (see Classes for more information). 

class Tooltip extends HTMLElement {
    constructor() {
        super();

        // If required, attach a shadow DOM to the custom element using Element.attachShadow() method.
        // Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.
        this.attachShadow({ mode: "open" });

        // Again use regular DOM methods to clone the template and attach it to your shadow DOM.
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Register your new custom element using the CustomElementRegistry.define() method, 
// passing it the element name to be defined, the class or function in which its functionality 
// is specified, and optionally, what element it inherits from.

window.customElements.define("tooltip-notify", Tooltip);
