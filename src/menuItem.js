export const MenuItem = (name, value, image) =>{
    const container = document.createElement('div');
    container.classList.add('menu-item');

    const titleDom = document.createElement('p');
    titleDom.textContent = name;

    const valueDom = document.createElement('p');
    valueDom.textContent = value+'$';

    const imgDom = document.createElement('img');
    imgDom.src = image;

    container.appendChild(titleDom);
    
    container.appendChild(imgDom);
    container.appendChild(valueDom);
    return container;
}