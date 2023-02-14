const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const input = document.querySelector("#section-material")
const btn = document.querySelector("#btn-catador")
const hidden = document.querySelector(".input-fieldhiddden")
const a = document.querySelector("#adicionar_material")
const b = document.querySelector(".items")

adicionar_material.addEventListener('click', () => {
  window.scroll({top: window.innerHeight, behavior: "smooth"})
})


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

  a.disabled = true
  b.disabled = true

  btn.addEventListener("click", () => {
      a.disabled = false
      b.disabled = false
  })



 function adicionarmaterial() {
    var adicionar = document.getElementById("adicionar_material")
    var adicionar2 = document.getElementById("i_material")
    adicionar.classList.add("select-btn")
    adicionar2.classList.add("personalizar_i")
 }

 const selectBtn = document.querySelector(".select-btn"),
 items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
selectBtn.classList.toggle("open");
});

items.forEach(item => {
item.addEventListener("click", () => {
   item.classList.toggle("checked");

   let checked = document.querySelectorAll(".checked"),
       btnText = document.querySelector(".btn-text");

       if(checked && checked.length > 0){
           btnText.innerText = `${checked.length} Selecionado`;
       }else{
           btnText.innerText = "Materiais que eu recolho";
       }
});
})


