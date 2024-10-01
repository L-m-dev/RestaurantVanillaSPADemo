import { MenuItem } from "./menuItem";
import Food from "./food.jpg";
import Ling from "./ling.jpeg";
import Rice from "./rice.jpeg";


export const Menu = () => {
  const menuText = document.createElement("p");
  menuText.textContent = "MENU";
  menuText.classList.add('menu-title');

  const menuItem = MenuItem("Bareado", 200, Food);
  const menuItem2 = MenuItem("Linguiça", 400, Ling);
  const menuItem3 = MenuItem("Rice", 200, Rice);
    
  document.querySelector(".content").appendChild(menuText);
  document.querySelector(".content").appendChild(menuItem);
  document.querySelector(".content").appendChild(menuItem2);
  document.querySelector(".content").appendChild(menuItem3);
};
