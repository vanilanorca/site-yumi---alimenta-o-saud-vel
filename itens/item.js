// LOADING
function load (){
    document.getElementById("loading").style.display = "none";
    document.getElementById("itemcontainer").style.display = "inherit";
}

window.onload = (function () {
    window.setInterval('load()',1500);})
    

// ======== HAMBURGER MENU =========
var hambMenu = document.getElementById("hamb-menu");
var closeMenu = document.getElementById("close-menu");
var nav = document.getElementById("nav");

function openMenu(){
    nav.style.display = "flex"
    closeMenu.style.display = "inherit"
}

function closeMenuFunction(){
    nav.style.display = "none"
    hambMenu.style.display = "inherit"
}


// ======== JSON =========
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
    return fetch("../JSON/armazenamento.json")
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


