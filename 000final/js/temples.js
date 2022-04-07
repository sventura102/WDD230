const requestURL = 'https://sventura102.github.io/WDD230/000final/data.json';
const cards = document.querySelector('.temples');

fetch(requestURL)
    .then(function(response) {
        return response.json();

    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['temples'];
        business.forEach(displayTemples);
}).then

function displayTemples(temple){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');

    portrait.setAttribute('src', temple.image);
    portrait.setAttribute('alt', `picture of the ${temple.name}`);
    portrait.setAttribute('loading', 'lazy');

    h2.textContent = `${temple.name}`;
    p1.textContent = `Address: ${temple.address}`;
    p2.textContent = `Phone Number: ${temple.phone}`;
    p3.textContent = `Services: ${temple.services}`;
    p4.textContent = `History: ${temple.history}`;
    p5.textContent = `Temple Closures: ${temple.closed}`;

    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);

    cards.appendChild(card);

}

