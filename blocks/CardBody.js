import { CardItem } from "./CardItem.js";

export class CardBody {
    object;

    constructor () {
        let btn_addItem = Object.assign(document.createElement("button"), {
            classList: 'button cta',
            innerText: 'Add Item'
        });

        // Container (Body)
        let container = Object.assign(document.createElement("div"), {
            classList: 'card-body'
        });
        // console.log(container);
        container.appendChild(btn_addItem);

        // Add Card Item Button
        btn_addItem.addEventListener('click', () => {
            let cardItem = this.addCardItem(container);

            container.insertBefore(cardItem, btn_addItem);
            container.scrollTo(0, container.scrollHeight);
        });
        this.object = container;

        return container;
    }

    addCardItem(targetCard) {
        let cardItem = new CardItem(targetCard);
        return cardItem;
    }
}