function generaProducto(prod) {
    return `<div class="col-lg-3 col-md-6 my-3"> <a href="${prod.link}"> <div class="card box"> <div class="card-body"> <img src="${prod.image}" width="100%"> </div> <div class="card-footer"> <h4>${prod.name}</h4> <p>${prod.price}</p> </div> </div> </a> </div>`;
}

function loadHome() {
    document.getElementById("home").className = "d-inline";
    document.getElementById("category").className = "d-none";
}

function loadCat(cat) {
    console.log(cat);

    // ocultar elementos
    document.getElementById("home").className = "d-none";
    document.getElementById("category").className = "d-none";

    var newContent = [];
    var newDescription = "";
    var newTitle = "";

    switch (cat) {
        case "cat-glam":
            newContent = glamGames;
            newDescription = glamDescription;
            newTitle = "Juegos GLAM";
            break;
        case "cat-metal":
            newContent = metalGames;
            newDescription = metalDescription;
            newTitle = "Juegos METAL";
            break;
        case "cat-punk":
            newContent = punkGames;
            newDescription = punkDescription;
            newTitle = "Juegos PUNK";
            break;
        case "cat-classic":
            newContent = classicGames;
            newDescription = classicDescription;
            newTitle = "Juegos CLASSIC";
            break;
        default:
            break;
    }

    // cargar categoria
    document.getElementById("cat-title").innerHTML = newTitle;
    document.getElementById("cat-desc").innerHTML = newDescription;

    // cargar listado de juegos
    var juegos = document.getElementById(`cat-games`);
    juegos.innerHTML = "";

    newContent.forEach(item => {
        console.log(item);
        juegos.innerHTML += generaProducto(item);
    });

    // mostrar seleccionado
    document.getElementById("category").className = "d-inline";

}

function enviaForm() {
    var pass = document.getElementById("passwd");
    var repass = document.getElementById("re-passwd");
    var fechanac = document.getElementById("fechanac");
    var age = new Date().getFullYear() - new Date(fechanac.value).getFullYear();

    if (age < 13) fechanac.setCustomValidity("Debes tener mas de 13 años para registrarte");
    else fechanac.setCustomValidity("");

    if (pass.value != repass.value) repass.setCustomValidity("Tus contraseñas no coinciden");
    else repass.setCustomValidity("");

}