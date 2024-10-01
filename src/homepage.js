import RestaurantView from "./restaurant.jpg";

export const Homepage = () => {
  const restaurantImageDom = document.createElement("img");
  restaurantImageDom.src = RestaurantView;
  restaurantImageDom.setAttribute("width", "300px");
  restaurantImageDom.setAttribute("heigth", "300px");
  restaurantImageDom.style.objectFit = "cover";
  restaurantImageDom.style.display = "block";
  restaurantImageDom.style.margin = "0 auto";
  const contentDom = document.querySelector(".content");

  const text1 = document.createElement("p");

  let pageText =
    "Donna Passarella has been cooking delicious dishes for 37 years so far. Combining korean and italian cousine," +
    " our customers are able taste an unique variety of flavor.";
  text1.innerText = pageText;

  const text2 = document.createElement("p");
  text2.textContent = "Open every day from 11am to 2pm, except on Sundays.";

  const text3 = document.createElement("p");
  text3.textContent = "Located at the Jockey Mall's Gourmet Food Area. Brazil.";

  contentDom.appendChild(restaurantImageDom);
  contentDom.appendChild(text1);
  contentDom.appendChild(text2);
  contentDom.appendChild(text3);
};
