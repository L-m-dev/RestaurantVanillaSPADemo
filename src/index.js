import "./styles.css";
import { Homepage } from "./homepage";
import { Menu } from "./menu";
import { About } from "./about";

const navegationActions = {
    "menu-button": Menu,
    "home-button": Homepage,
    "about-button": About,
  };

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  try {
    button.addEventListener("click", clearPage);
    button.addEventListener("click", navegationActions[button.id]);
  } catch {
    console.log(
      `Invalid button id, cannot add event listener. Id ${button.id}`
    );
  }
});

function clearPage(){
    document.querySelector('.content').innerHTML = '';
}
// Initial page load
Homepage();