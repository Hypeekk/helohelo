const heart = document.getElementById("heart");
const heartScreen = document.getElementById("heartScreen");
const content = document.getElementById("content");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

let noClicks = 0;

// CLICOU NO CORAÇÃO
heart.addEventListener("click", () => {

    heart.style.transform = "scale(2)";
    heart.style.opacity = "0";

    setTimeout(() => {
        heartScreen.style.display = "none";
        content.classList.remove("hidden");
    }, 500);

});


// BOTÃO NÃO
function fugirDoNao() {

    noClicks++;

    // O SIM cresce progressivamente
    const tamanho = 1 + (noClicks * 0.35);
    yes.style.transform = `scale(${tamanho})`;

    // Textos diferentes conforme ela insiste
    if (noClicks === 1) {
        no.textContent = "tem certeza?";
    }

    else if (noClicks === 2) {
        no.textContent = "certeza mesmo?";
    }

    else if (noClicks === 3) {
        no.textContent = "pensa direito 😭";
    }

    else if (noClicks === 4) {
        no.textContent = "para KKKKK";
    }

    else if (noClicks >= 5) {
        no.textContent = "CLICA NO SIM POR FAVOR VAI CLICA POR FAVOR 😭";
        yes.style.transform = `scale(${1 + (noClicks * 0.55)})`;
    }
}


// PC: foge quando o mouse chega perto
no.addEventListener("mouseenter", fugirDoNao);

// CELULAR: funciona quando toca
no.addEventListener("touchstart", (event) => {
    event.preventDefault();
    fugirDoNao();
});


// CLICOU NO SIM
yes.addEventListener("click", () => {

    content.innerHTML = `
        <h1>sabia que você ia escolher esse por livre e espontânea vontade </h1>
        <h2>a gente vai no sábado em, lá pras 20:30 🐙</h2>
    `;

    criarConfetes();
});


function criarConfetes() {

    const quantidade = 100;

    for (let i = 0; i < quantidade; i++) {

        const confete = document.createElement("div");

        confete.classList.add("confete");

        confete.style.left = Math.random() * 100 + "vw";

        confete.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confete.style.animationDelay =
            Math.random() * 0.5 + "s";

        confete.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confete);

        setTimeout(() => {
            confete.remove();
        }, 4500);
    }
}