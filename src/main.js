import { headerEl } from "./components/header/headerView.js";

const mainTag = document.createElement("main");
mainTag.classList.add("news-stand");
mainTag.appendChild(headerEl);

document.body.appendChild(mainTag);
