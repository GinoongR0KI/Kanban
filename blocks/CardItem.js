class CardItem {
    // Attributes
    object;

    // Constructor
    constructor() {
        this.object = document.createElement("li");
    }

    // Functions
    add () {
        document.querySelector().appendChild(this.object);
    }

    createCTA() {
        let btn_del = document.createElement("button");
        // Delete Button Icon
        let btn_del_icon = Object.assign(document.createElement("i"), {
            class: 'fa-solid fa-trash'
        });

        // Add attributes
        btn_del.setAttribute("class", "button");
        btn_del.appendChild(btn_del_icon);


    }
    
}