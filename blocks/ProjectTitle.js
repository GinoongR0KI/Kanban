class ProjectTitle {
    static Mode = {
        Text: Symbol("text"),
        Edit: Symbol("edit")
    }

    status;

    constructor() {
        this.status = Mode.Text;
    }

    toggleEdit() {
        // Toggle Edit will convert the .project-title element into a text input or back to text depending on
        // which status the element is currently on
        switch (this.status) {
            case Mode.Text:
                this.status = Mode.Edit;
                let inputElement = Object.assign(document.createElement("input"), {
                    classList: 'project-title',
                    type: 'text'
                });
            break;
            case Mode.Edit:
                this.status = Mode.Text;
                let textElement = Object.assign(document.createElement("h2"), {
                    classList: 'project-title'
                });
            break;
        }
    }
}