const requestURL = 'https://sventura102.github.io/WDD230/lesson4/data2.json';
const cards = document.querySelector('.business');

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['businesses'];
    business.forEach(displayBusinessGrid);
}).then

function displayBusinessGrid(business) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');

    //build image attributes for logo, it displays at the top in the example. 
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', `Business logo for ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    //change textContent to contain business information

    h2.textContent = `${business.name}`;
    p1.textContent = `${business.address}`;
    p2.textContent = `+1${business.number}`;
    //links
    a.setAttribute('href', business.link)
    a.setAttribute('target', "_blank")
    a.textContent = `${business.link}`;

    //add section w/ h2 elements
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);

    //add the existing gtml div w/ the cards class w/ the section
    cards.appendChild(card);
}