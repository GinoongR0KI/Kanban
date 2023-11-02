export class CardItem {
    // Attributes
    object;

    // Constructor
    constructor(targetCard) {
        // this.object = document.createElement("li");
        /*
        Card Item Components:
        Card-Item
        Card-Item-Wrapper
        */
        let container = Object.assign(document.createElement("div"), {
            classList: 'card-item',
            draggable: true
        });
        container.setAttribute("data-roki-pop", "#someModal");

        let cardItemCTA = this.createCTA(targetCard);
        let cardItemContent = this.createContent();

        // Wrapper
        let cardItemWrapper = Object.assign(document.createElement("div"), {
            classList: 'card-item-wrapper'
        });
        cardItemWrapper.appendChild(cardItemCTA);
        cardItemWrapper.appendChild(cardItemContent);
        container.appendChild(cardItemWrapper);

        this.object = container;


        return container;
    }

    // Functions

    createCTA(cardItemContainer) {
        // Buttons
        //--Delete Button
        let btn_del = Object.assign(document.createElement("button"), {
            classList: 'button',
            id: 'deleteButton'
        });
        btn_del.addEventListener('click', () => {
            cardItemContainer.removeChild(this.object);
        });
            // Delete Button Icon
        let btn_del_icon = Object.assign(document.createElement("i"), {
            classList: 'fa-solid fa-trash'
        });
        btn_del.appendChild(btn_del_icon);

        // Container
        let container = Object.assign(document.createElement("div"), {
            classList: 'card-item-cta'
        });
        container.appendChild(btn_del);

        return container;
    }

    createContent() {
        // Text Content
        let textContent = document.createTextNode('Click Card Item to Edit...');

        // Container
        let container = Object.assign(document.createElement("div"), {
            classList: 'card-item-content'
        });
        container.appendChild(textContent);

        return container;

    }
    
}