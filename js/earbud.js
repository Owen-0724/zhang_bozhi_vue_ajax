export class earbud {
    constructor(company, imageUrl) {
        this.company = company;
        this.imageUrl = imageUrl;
    }

    info(container) {
        const p = document.createElement("p");
        p.textContent = `A ${this.company} earbud`;
        document.body.appendChild(p);

        
    }

    showImg(container){
        const imgElement = document.createElement("img");
        imgElement.src = this.imageUrl;
        imgElement.alt = this.company;
        imgElement.classList.add("img");

        const p = document.createElement("p");
        p.textContent = `A ${this.company} earbud`;
        
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(p);

        container.appendChild(imgContainer);

        return imgElement;
    }

    
}

