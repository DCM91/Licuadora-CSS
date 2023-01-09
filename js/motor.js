let estadolicuadora = "apagada";
const sonidoLicuadora = document.getElementById("licuadora-sound");
const sonidoBotonLicuadora = document.getElementById("licuadora-button-sound");
const licuadora = document.getElementById("licuadora");

const controlarLicuadora = () => {
  if (estadolicuadora === "apagada") {
    estadolicuadora = "encendido";
    sonido();
    licuadora.classList.add("active");
  } else {
    estadolicuadora = "apagada";
    sonido();
    licuadora.classList.remove("active");
  }
};
const sonido = () => {
  if (sonidoLicuadora.paused) {
    sonidoBotonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    sonidoBotonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
};
