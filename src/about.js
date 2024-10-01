import RestaurantePolitics from './restaurantepol.jpg';

export const About = () =>{
    const aboutText = document.createElement('p');
    aboutText.innerText = 'Traditional restaurant in the Southern Brazil area, their food has won multiple prizes.';
    document.querySelector('.content').appendChild(aboutText);

    const restaurantImage = document.createElement('img');
    restaurantImage.src = RestaurantePolitics;
    restaurantImage.style.display= 'block';
    restaurantImage.style.margin='auto';
    restaurantImage.style.width='400px';
    document.querySelector('.content').appendChild(restaurantImage);

}

