import { insertNewsHeader } from "../store/insertNewsHeader.js";

const viewNewsHeader = () => {
  const root = document.querySelector(".root");
  const newsHeader = document.createElement("header");
  root.appendChild(newsHeader);
  newsHeader.innerHTML = insertNewsHeader();
};

export { viewNewsHeader };
