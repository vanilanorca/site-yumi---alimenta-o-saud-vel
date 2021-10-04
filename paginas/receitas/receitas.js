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
    return fetch("../../armazenamento.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            this.data = data.filter(projeto => projeto.type == "Receitas");

            buildSite(this.data);
        })
}

function buildSite(data) {

    var content = document.getElementById("content");

    data.forEach(projeto => {
        var a = document.createElement("a");
        a.href = projeto.link + '?id=' + projeto.id;

        var div = document.createElement("div");
        a.classList.add("conteudo-json");
        div.innerHTML = projeto.title;

        a.appendChild(div);
        content.appendChild(a);
    });
}

// ====== radio filter ======
var Doisanos = document.getElementById("2anos")
var DoisASeisAnos = document.getElementById("2a6anos")

function filtrarIdade(e){
    var content = document.getElementById("content");
    content.innerText = "";
    
    if(e.target.id == "2anos"){
        fetch("../../armazenamento.json")
                .then(function (resp) {
                    return resp.json();
                })
                .then(function (data) {
                    this.data = data.filter(projeto => projeto.idade == "2anos");

                    buildSite(this.data);
                });
    }
    
    else if(e.target.id == "2a6anos"){
        fetch("../../armazenamento.json")
                .then(function (resp) {
                    return resp.json();
                })
                .then(function (data) {
                    this.data = data.filter(projeto => projeto.idade == "2a6anos");

                    buildSite(this.data);
                })
    }
}