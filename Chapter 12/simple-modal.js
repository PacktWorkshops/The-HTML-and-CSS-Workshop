(function() {
    const template = document.createElement("template");
    template.id = "simple-modal-template";
    template.innerHTML = `
    <style>
        .modal-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .overlay {
            position: fixed;
            background: rgba(0, 0, 0, 0.5);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .modal {
            min-width: 250px;
            position: relative;
            background: white;
            padding: 16px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);
        }

        .btn {
            -webkit-appearance: none;
            appearance: none;					
            background-color: #3700B3;
            border: none;
            border-radius: 2px;
            color: white;
            cursor: pointer;
            min-width: 64px;
            outline: none;
            padding: 4px 8px;
        }

        .btn:hover {
            background-color: #6200EE;
        }
    </style>
    <section class="modal-container">
        <div class="overlay"></div>
        <div class="modal">
            <header class="header">
                <h1><slot name="heading"></slot></h1>
            </header>
            <div class="body">
                <slot name="content"></slot>
            </div>
            <footer class="footer">
                <button class="btn">OK</button>
            </footer>
        </div>
    </section>
    `;

    document.body.appendChild(template);

    customElements.define("simple-modal", class SimpleModal extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
        }
    
        connectedCallback() {
            const tmpl = document.getElementById("simple-modal-template");
            const node = document.importNode(tmpl.content, true);
            this.shadowRoot.appendChild(node);     
        }
    });
})();