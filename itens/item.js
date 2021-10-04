window.onload = (function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
})

var myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/jason'
    },
    mode: 'cors',
    cache: 'default'
};

var data;



getData();

function getData() {
    return fetch("../../JSON/armazenamento.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            this.data = data.filter(projeto => {
                var urlParams = new URLSearchParams(window.location.search);
                return projeto.id == urlParams.get('id')
            });

            buildSite(this.data);

        })
}


function buildSite(data) {

    data.forEach(projeto => {

        document.getElementById("categoria").innerHTML = projeto.type;
        document.getElementById("title").innerHTML = projeto.title;
        document.getElementById("titulo").innerHTML = projeto.title;
        document.getElementById("description").innerHTML = projeto.ingredientes;
        document.getElementById("description2").innerHTML = projeto.modoPreparo;

    });
}


