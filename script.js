const API_URL = "https://www.upload.ee/files/19814095/books.json"

const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");
const GenresEl = document.getElementById("Genres");

let allBooks = [];

async function loadBooks() 
{
    const response = await fetch(API_URL);
    const data = await response.json();

    allBooks = data.title

    fillGenres();
    applyFilters();
}

function fillGenres() {
    const Genres = [...new Set(allBooks.map(Book => Book.Genre))];

    GenresEl.innerHTML =
        '<option value="all">All Genres</option>' + 
        Genres.map(Genre =>
            `<option value="${Genre}">${Genre}</option>`
        ).join("");
}

function applyFilters() {
    const text = searchEl.value.toLowerCase();
    const Genre = GenreEl.value;

    const filtered = allBooks.filter(Book =>
        Book.title.toLowerCase().includes(text) &&
        (Book === "all" || Book.Genre === Genre)
    );

    renderCards(filtered);
}

function renderCards(Genres) {
    listEl.innerHTML = Genres.map(Genre => `
        <div class="card">
            <img src="${Genre.image}" alt="${Genre.name}">

            <div class="card-body">
                <h2>${recipe.name}</h2>
                <p>${Book.title} 

                <p>⭐ ${Book.rating}</p>
            </div>
        </div>
    `).join("");
}

searchEl.addEventListener("input", applyFilters);
GenresEl.addEventListener("change", applyFilters);

loadRecipes();

