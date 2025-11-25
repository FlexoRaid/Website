const images = [
    {
        name: "Astrophotography",
        author: "Roman Przewlocki",
        description: "Teide, photographed at an altitude of approximately 2,000 meters, captured at night using a long exposure of around 25 seconds. The image reveals the stunning interplay of darkness and light, with the subtle glow of the stars and the serene atmosphere of the high-altitude landscape. The extended exposure allows the camera to capture details that are invisible to the naked eye, creating a sense of depth and motion in the night sky. This technique emphasizes the majesty of Teide and the quiet, almost otherworldly beauty of its nocturnal environment.",
        maps: "https://www.google.de/maps/place/Teide/@28.275021,-16.6866679,16088",
        tooltip: "Teide - Teneriffe, Spain",
        src: "./images/pic1.jpg"
    },

    {
        name: "The Sea",
        author: "Olivier Mazur",
        description: "Kołobrzeg is a well-known city in the north of Poland, located directly on the Baltic Sea. It has about 46,000 inhabitants and is especially popular as a seaside and spa resort. Many people visit Kołobrzeg to go on vacation, relax on the beach, or enjoy the fresh sea air.",
        maps: "https://www.google.de/maps/place/Kolberg,+Polen/@54.1758197,15.5581948,10692",
        tooltip: "Kołobrzeg - Poland",
        src: "./images/pic2.jpg"
    },

    {
        name: "perfekt simulation",
        author: "Fabio \"zyqunix\" V.",
        description: "Taken on 04/08/2025 @ 17:11:55 on SAMSUNG SM-G386F in Cyprus",
        maps: "https://www.google.com/maps/@34.9793181,33.9365968,179m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
        tooltip: "Ayia Thekla Beach - Cyprus",
        src: "https://atums.world/raw/2025-11-25_15:09:21.png"
    },
]

function populate(target) {
    images.forEach(image => {
        target.innerHTML += `
            <section class="gallery-section">
              <div class="gallery-container">
                <div class="picture-container" data-tooltip="${image.tooltip}">
                    <a href="${image.maps}" target="_blank" rel="noopener noreferrer">
                      <img src="${image.src}" alt="${image.tooltip}" width="360px">
                    </a>
                </div>
                <div class="paragraph-container">
                    <h2>${image.name}</h2>
                    <p>${image.description}</p>
                    <p class="sign">- ${image.author}</p>
                </div>
              </div>
            </section>
        `
    });
}

populate(document.getElementById("art-gallery"))
