const btnTema = document.getElementById("btnTema");
 let claro = true;
 btnTema.addEventListener("click", () => {
 if (claro) {
 document.body.style.backgroundColor = "#222";
 document.body.style.color = "#fff";
 } else {
 document.body.style.backgroundColor = "#ffffff";
 document.body.style.color = "#000";
 }
 claro = !claro;
 });
btnTema.addEventListener("mouseover", () => {
 btnTema.style.cursor = "pointer";
});