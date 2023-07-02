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

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.textContent = this.name;

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-img-top');
        cardImage.src = this.image;
        cardImage.alt = this.name;

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer', 'text-body-secondary');
        cardFooter.textContent = `Species: ${this.species}, Status: ${this.status}`;

        // Construir la estructura de la card
        cardBody.appendChild(cardHeader);
        cardBody.appendChild(cardImage);
        cardBody.appendChild(cardFooter);
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