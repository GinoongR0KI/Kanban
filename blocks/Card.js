export class Card {
    // Attributes
    object;

    // Constructor
    constructor(cardTitle) {
        this.object = this.add(cardTitle);
    }

    // Functions
    /*  Card Parts:
        Main Card Container
        Card Header
            Card Details
            Card CTA
        Card Body
            Card Items
    */

    add(cardTitle) {
        let date = new Date();
        let card_index = "card" + date.getTime();
        let container = document.querySelector(".card-container");
        // Header
        let card_header = this.createHeader(cardTitle, card_index);
        // Body
        let card_body = this.createBody();

        // Card
        let card = Object.assign(document.createElement("div"), {
            classList: 'card created',
            draggable: true
        });
        card.addEventListener("animationend", () => {
            card.classList.remove("created");
            card.appendChild(card_header)
            card.appendChild(card_body);

            container.scrollTo(container.scrollWidth, container.scrollY);
        }, {once: true});
        card.setAttribute("data-roki-card-title", card_index);

        return card;
    }

    // --Card Header Functions
    createHeader(cardTitle, cardIndex) {
        // Card Details
        let card_details = this.createDetails(cardTitle);
        // Card CTA
        let card_cta = this.createCTA('[data-roki-card-title="'+cardIndex+'"]');

        // Container
        let container = Object.assign(document.createElement("div"), {
            classList: 'card-header'
        });
        container.appendChild(card_details)
        container.appendChild(card_cta);

        return container;
    }

    createDetails(cardTitle) {
        let card_title = Object.assign(document.createElement("h2"), {
            classList: "card-title",
            innerText: cardTitle
        });

        // Container
        let container = Object.assign(document.createElement("div"), {
            classList: 'card-details'
        });
        container.appendChild(card_title);

        return container;
    }

    createCTA(deleteTarget) {
        // Buttons
        let btn_settings = Object.assign(document.createElement("button"), {
            classList: 'button'
        });
        let btn_settings_icon = Object.assign(document.createElement("i"), {
            classList: 'fa-solid fa-gear'
        });
        btn_settings.appendChild(btn_settings_icon);

        let btn_delete = Object.assign(document.createElement("button"), {
            classList: 'button'
        });
        btn_delete.setAttribute("data-roki-target", deleteTarget);
        let btn_delete_icon = Object.assign(document.createElement("i"), {
            classList: 'fa-solid fa-trash'
        });
        btn_delete.appendChild(btn_delete_icon);
        btn_delete.addEventListener("click", () => {
            this.delete(btn_delete);
        });

        // Container
        let cta_container = Object.assign(document.createElement("div"), {
            classList: 'card-cta'
        });
        cta_container.appendChild(btn_settings);
        cta_container.appendChild(btn_delete);

        return cta_container;
    }

    // --Card Body Functions
    createBody() {
        let btn_addItem = Object.assign(document.createElement("button"), {
            classList: 'button cta',
            innerText: 'Add Item'
        });

        // Container (Body)
        let container = Object.assign(document.createElement("div"), {
            classList: 'card-body'
        });
        console.log(container);
        container.appendChild(btn_addItem);

        return container;
    }

    delete(button) {
        let target = document.querySelector(button.dataset.rokiTarget);
        let container = document.querySelector(".card-container");
        container.scrollTo(target.offsetLeft, container.scrollY);
        target.style.minWidth = "0px";
        target.innerHTML = "";

        target.classList.add("deleted");
        target.addEventListener("animationend", () => {
            target.parentNode.removeChild(target);
        });
    }

}