/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");
const ANIO = 2022;
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  function pedirDatos() {
    let respuestaJs;
    let respuestaEdad;

    datosPersona.nombre = prompt("Ingresa tu nombre completo");
    respuestaEdad = parseInt(prompt("En que año naciste?"));
    datosPersona.edad = ANIO - respuestaEdad;
    datosPersona.ciudad = prompt("Ingresa donde vivis");
    respuestaJs = confirm("Te interesa Javascript?");
    if (respuestaJs) {
      datosPersona.interesPorJs = "Si";
    } else {
      datosPersona.interesPorJs = "No";
    }
  }

  profileBtn.onclick = pedirDatos();
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.getElementById("nombre").innerHTML = datosPersona.nombre;
  document.getElementById("edad").innerHTML = datosPersona.edad;
  document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
  document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  let contenedor = document.querySelector("#fila");

  function renderDatos(listaDatos) {
    for (let dato of listaDatos) {
      contenedor.innerHTML += `
      <div class="caja">
      <img src="${dato.imgUrl}" alt="${dato.lenguajes}">
      <p class="lenguajes">${dato.lenguajes}</p>
      <p class="bimestre">${dato.bimestre}</p>
      </div>
      `;
    }
  }
  renderDatos(listado);
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  let btnDark = document.querySelector("#sitio");

  cambiarTema.onclick = btnDark.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keypress", (e) => {
  if (e.key == "f") {
    document.querySelector("#sobre-mi").classList.remove("oculto");
  }
});
