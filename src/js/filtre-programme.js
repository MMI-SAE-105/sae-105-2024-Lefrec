const seancesVendredi = document.querySelectorAll(".vendredi");
const seancesSamedi = document.querySelectorAll(".samedi");
const seancesDimanche = document.querySelectorAll(".dimanche");

const filtres = document.querySelectorAll(".programme__filtre");


filtres.forEach(element => {
    element.addEventListener("click", (event) => {
        element.classList.toggle("filter-disabled");
            if (element.dataset.jour == "vendredi") {
                seancesVendredi.forEach( element2 => {
                    element2.classList.toggle("seance-disabled");
                })
            }
            if (element.dataset.jour == "samedi") {
                seancesSamedi.forEach( element2 => {
                    element2.classList.toggle("seance-disabled");
                })
            }
            if (element.dataset.jour == "dimanche") {
                seancesDimanche.forEach( element2 => {
                    element2.classList.toggle("seance-disabled");
                })
            }
    })
});
