const images = [
    {
        src: "Zlatibor-min.png",
        title: "Na zlatiboru",
        description: "To veče nebo je bilo prelijepo zaista, rekao bi da je šteta što ga nismo gledali ali je moj pogled bio izgubljen na još ljepšem mjestu. Dan kada si mi ušla u život i samim tim učinila ga ljepšim."
    },
    {
        src: "Beograd2-min.png",
        title: "Za tvoj rođendan",
        description: "Nikada neću da zaboravim kada sam te opet sreo, bilo je nerealno",
    },

    {
        src: "Beograd1-min.png",
        title: "Naše zadnje veče u hotelu",
        description: "Tad sam po prvi put shvatio istinski i rekao ti da te volim.",
    },

    {
        src: "Banjaluka2-min.png",
        title: "Kada si mi opet došla",
        description: "I svaki put kad treba da te opet sretnem srce mi pojuri sto na sat, onoliko koliko sam ja jurio autom samo da de vidim.",
    },
    {
        src: "Banjaluka-min.png",
        title: "Na spomeniku",
        description: "Uvijek sam imao želje ali na spomeniku je nastala moja najveća. Da te imam za cijeli život."
    },
    {
        src: "Beograd-min.png",
        title: "Na Avali",
        description: "Veče kada sam shvatio da bez tebe nemam svoj mir, svoju sreću ni svoj spokoj"
    },
    {
        src: "Beograd3-min.png",
        title: "Na stanici",
        description: "Voljeti te je uvjek bilo lako i spontano, ali zato svaki put kada sam te ostavljao činio sam najtežu stvar u životu...",
    },
];

let currentIndex = 0;

function updateCard() {
    const cardImage = document.getElementById('card-image');
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');

    cardImage.src = images[currentIndex].src;
    cardTitle.textContent = images[currentIndex].title;
    cardDescription.textContent = images[currentIndex].description;

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateCard, 30000); // Change image every 3 seconds
updateCard(); // Initial call to set the first image
