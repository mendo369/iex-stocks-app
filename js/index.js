const API_KEY = "pk_eafa88f7d9f24ee2b8f0e179f2a9493a";
const rutaBusqueda = "https://cloud.iexapis.com/stable/stock/";
const LS = localStorage;
const KEY = "stocks";

let stocks = JSON.parse(LS.getItem(KEY));

let search = document.querySelector("#btn_agregar");
let symbolSearched = document.querySelector("#search-stock");
let eliminar = document.querySelectorAll(".btn_eliminar");
let actualizar = document.querySelectorAll(".btn_actualizar");

// funciones de busqueda y agregar

search.addEventListener("click", () => {
  let symbol = symbolSearched.value.toUpperCase();
  symbolSearched.value = ""; //limpiamos el campo de busqueda
  let stockExisted = false;
  //buscamos si el stock ya existe
  stocks.forEach((stock) => {
    if (stock.symbol == symbol) {
      stockExisted = true;
    }
  });
  if (stockExisted) {
    alert("stock existente");
  } else {
    //consultamos la API
    fetch(`${rutaBusqueda}${symbol}/quote?token=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => agregar(res))
      .catch(() => alert("Stock inexistente"));
  }
});

function agregar(stock) {
  //agregamos un nuevo elemento al arreglo y luego los guardamos en el localstorage
  stocks.push(stock);
  LS.setItem(KEY, JSON.stringify(stocks));
  cargarStock(stock);
  //como se agregan nuevos elementos hay que darle recursividad al momento de darles eventListeners
  eliminar = document.querySelectorAll(".btn_eliminar");
  eliminar.forEach((btn) => {
    let symbol = btn.id;
    btn.addEventListener("click", () => {
      eliminarStock(symbol);
    });
  });
  actualizar = document.querySelectorAll(".btn_actualizar");
  actualizar.forEach((btn) => {
    let symbol = btn.id;
    btn.addEventListener("click", () => {
      actualizarStock(symbol);
    });
  });
}

//funciones de eliminar

eliminar.forEach((btn) => {
  let symbol = btn.id;
  btn.addEventListener("click", () => {
    if (confirm(`¿Eliminar el stock ${symbol}?`)) {
      eliminarStock(symbol);
    }
  });
});

function eliminarStock(symbol) {
  let index;
  stocks.forEach((stock) => {
    if (stock.symbol == symbol) {
      index = stocks.indexOf(stock);
    }
  });
  stocks.splice(index, 1);
  LS.setItem(KEY, JSON.stringify(stocks));
  let stockitem = document.querySelector(`#stock_${symbol}`);
  stockitem.className = "oculto";
  //cargarData();
}

//funciones de actualizar

actualizar.forEach((btn) => {
  let symbol = btn.id;
  btn.addEventListener("click", () => {
    actualizarStock(symbol);
  });
});

function actualizarStock(symbol) {
  let index;
  stocks.forEach((stock) => {
    if (stock.symbol == symbol) {
      index = stocks.indexOf(stock);
    }
  });
  fetch(`${rutaBusqueda}${symbol}/quote?token=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      stocks[index] = res;
    });
  LS.setItem(KEY, JSON.stringify(stocks));
  alert("stock actualizado");
  //cargarData();
}
