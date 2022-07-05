let imprimir = document.querySelector("#imprimir");

imprimir.addEventListener("click", () => {
  window.print();
});

let guardarData = document.getElementById("btn_guardar-data");

guardarData.addEventListener("click", () => {
  guardarArchivoDeTexto(localStorage.getItem("stocks"), "StocksList.txt");
});

function guardarArchivoDeTexto(contenido, nombre) {
  const a = document.createElement("a");
  const archivo = new Blob([contenido], { type: "text/plain" });
  const url = URL.createObjectURL(archivo);
  a.href = url;
  a.download = nombre;
  a.click();
  URL.revokeObjectURL(url);
}
