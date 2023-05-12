const btnMenu = document.getElementById("menu");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  menu.style.margin = "0px";
  menu.style.transition = "1s";
});

const cerrarMenu = document.getElementById("cerrarMenu");
cerrarMenu.addEventListener("click", () => {
  menu.style.transition = "1s";
  menu.style.marginLeft = "-100%";
});

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#front", {
    strings: ["FrontEnd Developer"],
  }).go();
});


var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
  .then((response) => {
    if (response.ok) {
      alert("Gracias por tu mensaje, espera mi respuesta")
      form.reset();
    }
  });
}
