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
            this.data = data;

            // buildSite(this.data);
        })
}

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

// function storageItem(){

// }

// function clear() {
//     var content = document.getElementById("content");

//     while (content.firstChild) {
//         content.removeChild(content.firstChild);
//     }
// }

// function pesquisar(event) {
//     var valor = event.target.value.toUpperCase();

//     var filtrado = this.data.filter(projeto => {
//         console.log(projeto.tags.filter(tag => tag.toUpperCase().includes(valor)).length)
//         return projeto.title.toUpperCase().includes(valor) ||
//             projeto.client.toUpperCase().includes(valor) ||
//             projeto.tags.filter(tag => tag.toUpperCase().includes(valor)).length &&
//             projeto.type == "site";
//         console.log(projeto.type)
//     });

//     buildSite(filtrado);
// }