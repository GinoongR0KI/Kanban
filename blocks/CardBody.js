export class CardBody {
    constructor () {
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


}