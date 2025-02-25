const buttonJoke = document.getElementById("obtenerChiste");

const pButton = document.getElementById("chiste");


pButton.innerText = "";



//Aquí tu código
fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
    .then((response) =>
        response.json())
    .then((data) => {
        buttonJoke.addEventListener("click", () => {
            pButton.innerText = "Loading...";
            setTimeout(() => {
                const pJoke = data.joke;
                if (pJoke) {
                    pButton.innerText = pJoke;
                } else {
                    pButton.innerText = data.setup + " " + data.delivery
                }
            }, 5000);
        })
    })
    .catch((error) => console.error(error))


