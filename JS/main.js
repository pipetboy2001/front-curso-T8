// Clase para representar un personaje
class Personaje {
    constructor(name, species, image, status) {
        this._name = name; //nombre personaje
        this._species = species; //nombre de la especie
        this._image = image; //nombre de la imagen
        this._status = status; //nombre del status
    }

    // Getters para acceder a los atributos
    get name() {
        return this._name; //retorna el nombre
    }

    get species() {
        return this._species; //retorna la especie
    }

    get image() {
        return this._image; //retorna la imagen
    }

    get status() {
        return this._status; //retorna el status
    }


    // Método para mostrar la card en el DOM
    show() {
        const cardsContainer = document.getElementById('cards-container');

        // Crear elementos HTML para la card
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card', 'text-center');

        const cardImageContainer = document.createElement('div');
        cardImageContainer.classList.add('card-image-container');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-img-top');
        cardImage.src = this.image;
        cardImage.alt = this.name;

        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card-details');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.name;

        const cardSpecies = document.createElement('p');
        cardSpecies.classList.add('card-text');
        cardSpecies.textContent = `Species: ${this.species}`;

        const cardStatus = document.createElement('p');
        cardStatus.classList.add('card-text');
        cardStatus.textContent = `Status: ${this.status}`;

        // Construir la estructura de la card
        cardImageContainer.appendChild(cardImage);
        cardBody.appendChild(cardImageContainer);
        cardDetails.appendChild(cardTitle);
        cardDetails.appendChild(cardSpecies);
        cardDetails.appendChild(cardStatus);
        cardBody.appendChild(cardDetails);
        card.appendChild(cardBody);

        cardsContainer.appendChild(card);
    

    }
}

// Obtener los datos de la API
fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        console.log(personajes);

        // Crear instancias de Personaje y mostrar las cards
        personajes.slice(0, 20).forEach(personaje => {
            const { name, species, image, status, location } = personaje;
            const personajeObj = new Personaje(name, species, image, status);
            personajeObj.show();
        });
    });
