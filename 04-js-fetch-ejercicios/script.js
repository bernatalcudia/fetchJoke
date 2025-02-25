const buttonJoke = document.getElementById("obtenerChiste");

const pButton = document.getElementById("chiste");






//Aquí tu código
fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
    .then((response) =>
        response.json())
    .then((data) => {
        pButton.innerText = "Loading...";
        buttonJoke.addEventListener("click", () => {
            const pJoke = data.joke;
            if (pJoke) {
                pButton.innerText = pJoke;
            } else {
                pButton.innerText = data.setup + " " + data.delivery
            }

        });
    })
    .catch((error) => console.error(error))


