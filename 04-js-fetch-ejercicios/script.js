const buttonJoke = document.getElementById("obtenerChiste");

const pButton = document.getElementById("chiste");






//Aquí tu código
fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
    .then((response) =>
        response.json())
    .then((data) => {
        const pJoke = data.joke;
        buttonJoke.addEventListener("click", () => {
            if (pJoke) {
                pButton.innerText = pJoke;
            } else {
                pButton.innerText = data.setup + " " + data.delivery
            }

        });
    })
    .catch((error) => console.error(error))


