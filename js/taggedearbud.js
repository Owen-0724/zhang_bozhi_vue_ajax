import { earbud } from "./earbud.js";

export class Taggedearbud extends earbud {
    constructor(company, imageUrl, tags) {
        super(company, imageUrl);
        this.tags = tags;
    }

    color() {
        let p = document.createElement("p");
        p.textContent = `A ${this.tags.join(", ")} earbud`;
        document.body.appendChild(p);
    }
}
