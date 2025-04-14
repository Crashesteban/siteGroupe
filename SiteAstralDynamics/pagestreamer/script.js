"use strict"

const streamers = [
    { name: "Morgane_reaper", image: "../image/Neki.jpg", link: "../pageexterne/pageNeki.html", description: "Bienvenue dans mon organisation anti criminelle inter-spaciale, La Star Tenebris! Moi c'est Morgane_reaper, je suis une Vtubeuse chimère mi dragonne, mi démone et mi chat. Je suis dessinatrice et j'ai un cœur GROS comme ça." },
    { name: "BlueStarlite", image: "../image/BlueStarlite.jpg", link: "../pageexterne/pageBlue.html", description: "Un démon tueur a gage venant des enfer, qui est partie dans notre monde pour vivre une vie de barman tranquille." },
    { name: "Streamer 3", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer3.html", description: "Description du streamer 3..." },
    { name: "Streamer 4", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer4.html", description: "Description du streamer 4..." },
    { name: "Streamer 5", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer5.html", description: "Description du streamer 5..." },
    { name: "Streamer 6", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer6.html", description: "Description du streamer 6..." },
    { name: "Streamer 7", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer7.html", description: "Description du streamer 7..." },
    { name: "Streamer 8", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer8.html", description: "Description du streamer 8..." },
    { name: "Streamer 9", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer9.html", description: "Description du streamer 9..." },
    { name: "Streamer 10", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer10.html", description: "Description du streamer 10..." },
    { name: "Streamer 11", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer11.html", description: "Description du streamer 11..." },
    { name: "Streamer 12", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer12.html", description: "Description du streamer 12..." },
    { name: "Streamer 13", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer13.html", description: "Description du streamer 13..." },
    { name: "Streamer 14", image: "../image/inconnu.jpg", link: "../ageexterne/pageStreamer14.html", description: "Description du streamer 14..." },
    { name: "Streamer 15", image: "../image/inconnu.jpg", link: "../pageexterne/pageStreamer15.html", description: "Description du streamer 15..." }
];

const streamersContainer = document.getElementById("streamersContainer");

streamers.forEach(streamer => {
    const streamerCard = document.createElement("div");
    streamerCard.classList.add("streamer");

    streamerCard.innerHTML = `
        <a href="${streamer.link}">
            <img src="${streamer.image}" alt="${streamer.name}">
        </a>
        <h2>${streamer.name}</h2>
        <p>${streamer.description}</p>
    `;

    streamersContainer.appendChild(streamerCard);
});