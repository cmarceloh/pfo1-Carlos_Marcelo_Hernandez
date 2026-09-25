const botonTema = document.querySelector(".boton-tema");
const temaGuardado = (() => {
  try {
    return localStorage.getItem("tema");
  } catch {
    return null;
  }
})();

const temaInicial =
  temaGuardado === "light" || temaGuardado === "dark"
    ? temaGuardado
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

function aplicarTema(tema) {
  const esOscuro = tema === "dark";

  document.documentElement.dataset.theme = tema;
  botonTema.setAttribute("aria-pressed", String(esOscuro));
  botonTema.setAttribute(
    "aria-label",
    `Cambiar a modo ${esOscuro ? "claro" : "oscuro"}`,
  );
  botonTema.title = `Cambiar a modo ${esOscuro ? "claro" : "oscuro"}`;
  botonTema.firstElementChild.textContent = esOscuro ? "☀" : "☾";
}

aplicarTema(temaInicial);

botonTema.addEventListener("click", () => {
  const temaNuevo =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  aplicarTema(temaNuevo);

  try {
    localStorage.setItem("tema", temaNuevo);
  } catch {
    // El tema sigue funcionando aunque el navegador bloquee el almacenamiento.
  }
});
