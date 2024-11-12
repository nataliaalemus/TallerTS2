// src/main.ts
import { Serie } from './serie.js';
const series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "Im1.jpeg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "Im2.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "Im3.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "Im4.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "Im5.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "Im6.jpeg"),
];
const tableBody = document.querySelector("#seriesTable tbody");
const averageText = document.getElementById("averageText");
const seriesDetailCard = document.querySelector("#seriesDetailCard");
if (tableBody) {
    series.forEach((serie) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);
        const nameCell = document.createElement("td");
        const nameLink = document.createElement("a");
        nameLink.href = serie.link;
        nameLink.textContent = serie.titulo;
        nameLink.target = "_blank";
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);
        const channelCell = document.createElement("td");
        channelCell.textContent = serie.plataforma;
        row.appendChild(channelCell);
        const seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.numeroTemporadas.toString();
        row.appendChild(seasonsCell);
        tableBody.appendChild(row);
        row.addEventListener("click", () => {
            if (seriesDetailCard) {
                seriesDetailCard.innerHTML = `
                    <div class="card">
                        <img src="${serie.imagen}" class="card-img-top" alt="${serie.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${serie.titulo}</h5>
                            <p class="card-text">${serie.descripcion}</p>
                            <a href="${serie.link}" class="btn btn-primary" target="_blank">Más información</a>
                        </div>
                    </div>
                `;
            }
        });
    });
    // Calcular el promedio de temporadas, sin decimales
    const totalSeries = series.length;
    const totalSeasons = series.reduce((total, serie) => total + serie.numeroTemporadas, 0);
    const averageSeasons = Math.round(totalSeasons / totalSeries); // Promedio redondeado a entero
    if (averageText) {
        averageText.textContent = `Seasons average: ${averageSeasons}`;
    }
}
