import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";

export class Card {
    // Attributes
    object;
    cardHeader;

    // Constructor
    constructor(cardTitle) {
        this.object = this.add(cardTitle);
    }

    // Functions
    /*  Card Parts:
        Main Card Container
            Card Wrapper
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
        let card_header = new CardHeader(cardTitle, card_index);
        // Body
        let card_body = new CardBody();

        // Wrapper
        let card_wrapper = Object.assign(document.createElement("div"), {
            classList: 'card-wrapper created'
        });

        // Card
        let card = Object.assign(document.createElement("div"), {
            classList: 'card',
            draggable: true
        });
        card.appendChild(card_wrapper);
        // card_header.headerDetails.childNodes[0].style.width = card.offsetWidth;

        card_wrapper.addEventListener("animationend", () => {
            card_wrapper.classList.remove("created");
            card_wrapper.appendChild(card_header);
            card_wrapper.appendChild(card_body);

            console.log(card_header.childNodes[0].style.width = card_body.offsetWidth - 100 + "px", card_body.offsetWidth);

            card_body.style.maxHeight = (card.offsetHeight - card_header.offsetHeight) + "px";
            console.log(card.offsetHeight, card_header.offsetHeight, card_body.style.maxHeight, (container.offsetHeight - card_header.offsetHeight));

            container.scrollTo(container.scrollWidth, container.scrollY);
        }, {once: true});
        card.setAttribute("data-roki-card-title", card_index);

        return card;
    }

}