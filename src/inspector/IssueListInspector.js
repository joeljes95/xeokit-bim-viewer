import {Controller} from "../Controller.js";

class IssueListInspector extends Controller {
    constructor(bimViewer) {
        super(bimViewer);
        this._bimViewer = bimViewer;
        this._element = this._createIssueListElement();
        console.log("An instance of the issue list has been created");
    }

    init(issueListPanelCheckbox) {
        // Append the element to the issue list panel if it exists
        if (issueListPanelCheckbox) {
            issueListPanelCheckbox.addEventListener("change", () => {
                this.togglePanel(issueListPanelCheckbox.checked);
            });

            // Initial toggle
            this.togglePanel(issueListPanelCheckbox.checked);
        }
    }

    togglePanel(enabled) {
        // Show/hide your issue list panel based on the "enabled" parameter
        if (enabled) {
            // Show the panel
            this._showPanel();
        } else {
            // Hide the panel
            this._hidePanel();
        }
    }

    _createIssueListElement() {
        // Create and return your issue list element
        const issueListElement = document.createElement("div");
        issueListElement.innerHTML = "<p>Hello World</p>"; // Customize as needed
        return issueListElement;
    }

    _showPanel() {
        // Show logic for your issue list panel
        if (this._element) {
            this._element.style.display = "block";
        }
    }

    _hidePanel() {
        // Hide logic for your issue list panel
        if (this._element) {
            this._element.style.display = "none";
        }
    }

    // You can add more methods or modify as needed

    destroy() {
        // Clean up resources if needed
        super.destroy();
    }
}


export {IssueListInspector};
