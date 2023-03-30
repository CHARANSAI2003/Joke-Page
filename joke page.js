let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");

jokeBtnEl.onclick = function() {
    let option = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/jokes/random", option)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            let par = JSON.parse(data);
            jokeTextEl.textContent = par.value;
        });
}