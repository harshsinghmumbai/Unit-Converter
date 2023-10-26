let Foot = document.getElementById("Foot");
let Inche = document.getElementById("Inche");
// console.log(Foot, Inche);

Foot.addEventListener("input", function () {
    // console.log("Changed is done!")
    let F = this.value
    let G = F * 12;

    Inche.value = G;

});

Inche.addEventListener("input", function () {
    // console.log("Changed is done!");
    let F = this.value;
    let G = F / 12;
    if (!Number.isInteger(G)) {
        G = G.toFixed(6);

    }
    Foot.value = G;

})