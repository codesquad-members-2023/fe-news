import { App } from "./app.js";
import css from "./style/index.css";
import { querySelector } from "./utils/querySelector.js";

new App(querySelector(document, ".newsstand"));
// new App(document.querySelector(".newsstand"));
