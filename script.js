const API_URL = "https://www.upload.ee/files/19814095/books.json.html";

const SearchEl = document.getElementById("Search");
const Authors = document.getElementById("Authors");
//const  = document.getElementById("Search");//


async function getdata () {
    const response = await fetch(API_URL);
    const data = response.json();
     
    AllBooks = []
}

function Books () {
    const auth = authors.map()
}