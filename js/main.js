import { earbud } from "./earbud.js";
import { Taggedearbud } from "./taggedearbud.js";


const Sony = new earbud(
    "Sony",
    "images/Sony1.jpg"
);
const Bored = new earbud(
    "Bored",
    "images/white1.jpg"
);

const Sony2 = new Taggedearbud(
    "Sony",
    "images/Sony2.jpg",
    ["dark", "wireless",]
);

const Bored2 = new Taggedearbud(
    "Bored",
    "images/white2.jpg",
    ["white", "wireless",]
);

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");

   


    Sony.showImg(galleryContainer);

    Bored.showImg(galleryContainer);


    const sony2Image = Sony2.showImg(galleryContainer);
    const handleClick = () => {
        Sony2.color();  
        sony2Image.removeEventListener("click", handleClick);  
    };
    sony2Image.addEventListener("click", handleClick);

    const Bored2Image = Bored2.showImg(galleryContainer);
    const handleClick2 = () => {
        Bored2.color();  
        Bored2Image.removeEventListener("click", handleClick2);  
    };
    Bored2Image.addEventListener("click", handleClick2);
});