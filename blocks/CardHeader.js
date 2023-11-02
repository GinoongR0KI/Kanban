export class CardHeader {
    constructor (cardTitle, cardIndex) {
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

    delete(button) {
        let target = document.querySelector(button.dataset.rokiTarget).firstChild;
        console.log(target);
        let targetParent = target.parentNode;
        let container = document.querySelector(".card-container");
        
        target.classList.add("deleted");
        target.style.backgroundColor = "red";
        console.log(target.offsetHeight, target.offsetWidth, target.style.backgroundColor);
        target.addEventListener("animationend", () => {
            targetParent.parentNode.removeChild(targetParent);
        });

        target.style.minWidth = "0px";
        target.innerHTML = "";

        console.log(targetParent.offsetWidth, container.scrollLeft);
        container.scrollTo(container.scrollLeft - targetParent.offsetWidth, container.scrollY);
        console.log(targetParent.offsetWidth, container.scrollLeft);
    }

}