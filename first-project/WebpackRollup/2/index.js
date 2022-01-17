import "./index.css";
import JSIMG from "./assets/js.png";

console.log("Hello World!!!");

const header = document.createElement("h1");
const image = document.createElement("img");

header.innerText = "I love JavaScript";
image.src = JSIMG;

document.body.append(header);
document.body.append(image);
