const ls = localStorage;

let array = [
  {
    avgTotalVolume: 83428660,
    calculationPrice: "close",
    change: 2.21,
    changePercent: 0.01616,
    close: 138.93,
    closeSource: "official",
    closeTime: 1656705600429,
    companyName: "Apple Inc",
    currency: "USD",
    delayedPrice: 138.91,
    delayedPriceTime: 1656705598201,
    extendedChange: 0.09,
    extendedChangePercent: 0.00065,
    extendedPrice: 139.02,
    extendedPriceTime: 1656719991861,
    high: 139.04,
    highSource: "15 minute delayed price",
    highTime: 1656705599999,
    iexAskPrice: null,
    iexAskSize: null,
    iexBidPrice: null,
    iexBidSize: null,
    iexClose: 138.85,
    iexCloseTime: 1656705599007,
    iexLastUpdated: null,
    iexMarketPercent: null,
    iexOpen: 136.05,
    iexOpenTime: 1656682200010,
    iexRealtimePrice: null,
    iexRealtimeSize: null,
    iexVolume: null,
    lastTradeTime: 1656705599999,
    latestPrice: 138.93,
    latestSource: "Close",
    latestTime: "July 1, 2022",
    latestUpdate: 1656705600429,
    latestVolume: 71051552,
    low: 135.66,
    lowSource: "15 minute delayed price",
    lowTime: 1656686431587,
    marketCap: 2248607196330,
    oddLotDelayedPrice: 138.91,
    oddLotDelayedPriceTime: 1656705598201,
    open: 136.09,
    openTime: 1656682201936,
    openSource: "official",
    peRatio: 22.59,
    previousClose: 136.72,
    previousVolume: 98964467,
    primaryExchange: "NASDAQ",
    symbol: "AAPL",
    volume: 71051552,
    week52High: 182.44,
    week52Low: 129.04,
    ytdChange: -0.1992966281858485,
    isUSMarketOpen: false,
  },
  {
    avgTotalVolume: 2681005,
    calculationPrice: "close",
    change: -0.18,
    changePercent: -0.00701,
    close: 25.51,
    closeSource: "official",
    closeTime: 1656705601975,
    companyName: "Tenaris S.A. - ADR",
    currency: "USD",
    delayedPrice: 25.475,
    delayedPriceTime: 1656705590871,
    extendedChange: 0,
    extendedChangePercent: 0,
    extendedPrice: 25.51,
    extendedPriceTime: 1656716400001,
    high: 25.82,
    highSource: "15 minute delayed price",
    highTime: 1656705590871,
    iexAskPrice: null,
    iexAskSize: null,
    iexBidPrice: null,
    iexBidSize: null,
    iexClose: 25.51,
    iexCloseTime: 1656705598052,
    iexLastUpdated: null,
    iexMarketPercent: null,
    iexOpen: 25.76,
    iexOpenTime: 1656682210192,
    iexRealtimePrice: null,
    iexRealtimeSize: null,
    iexVolume: null,
    lastTradeTime: 1656705598052,
    latestPrice: 25.51,
    latestSource: "Close",
    latestTime: "July 1, 2022",
    latestUpdate: 1656705601975,
    latestVolume: 2085206,
    low: 24.715,
    lowSource: "15 minute delayed price",
    lowTime: 1656686471218,
    marketCap: 15057747267,
    oddLotDelayedPrice: 25.48,
    oddLotDelayedPriceTime: 1656705592966,
    open: 25.68,
    openTime: 1656682200818,
    openSource: "official",
    peRatio: 10.04,
    previousClose: 25.69,
    previousVolume: 2153839,
    primaryExchange: "NEW YORK STOCK EXCHANGE INC.",
    symbol: "TS",
    volume: 2085206,
    week52High: 34.76,
    week52Low: 18.24,
    ytdChange: 0.2374470196449567,
    isUSMarketOpen: false,
  },
  {
    avgTotalVolume: 426593,
    calculationPrice: "close",
    change: 5.37,
    changePercent: 0.01776,
    close: null,
    closeSource: "official",
    closeTime: null,
    companyName: "West Pharmaceutical Services, Inc.",
    currency: "USD",
    delayedPrice: null,
    delayedPriceTime: null,
    extendedChange: null,
    extendedChangePercent: null,
    extendedPrice: null,
    extendedPriceTime: null,
    high: null,
    highSource: "15 minute delayed price",
    highTime: 1656705599854,
    iexAskPrice: null,
    iexAskSize: null,
    iexBidPrice: null,
    iexBidSize: null,
    iexClose: 307.83,
    iexCloseTime: 1656705589403,
    iexLastUpdated: null,
    iexMarketPercent: null,
    iexOpen: 301.31,
    iexOpenTime: 1656682201106,
    iexRealtimePrice: null,
    iexRealtimeSize: null,
    iexVolume: null,
    lastTradeTime: 1656705599854,
    latestPrice: 307.74,
    latestSource: "Close",
    latestTime: "July 1, 2022",
    latestUpdate: 1656705834099,
    latestVolume: null,
    low: null,
    lowSource: "15 minute delayed price",
    lowTime: 1656684980534,
    marketCap: 22796030376,
    oddLotDelayedPrice: null,
    oddLotDelayedPriceTime: null,
    open: null,
    openTime: null,
    openSource: "official",
    peRatio: 34.35,
    previousClose: 302.37,
    previousVolume: 553775,
    primaryExchange: "NEW YORK STOCK EXCHANGE INC.",
    symbol: "WST",
    volume: null,
    week52High: 474.91,
    week52Low: 275.89,
    ytdChange: -0.32577463529950834,
    isUSMarketOpen: false,
  },
  {
    avgTotalVolume: 28038966,
    calculationPrice: "close",
    change: 0.99,
    changePercent: 0.00506,
    close: null,
    closeSource: "official",
    closeTime: null,
    companyName: "Meta Platforms Inc - Class A",
    currency: "USD",
    delayedPrice: null,
    delayedPriceTime: null,
    extendedChange: null,
    extendedChangePercent: null,
    extendedPrice: null,
    extendedPriceTime: null,
    high: null,
    highSource: "15 minute delayed price",
    highTime: 1654718399999,
    iexAskPrice: null,
    iexAskSize: null,
    iexBidPrice: null,
    iexBidSize: null,
    iexClose: 196.64,
    iexCloseTime: 1654718399532,
    iexLastUpdated: null,
    iexMarketPercent: null,
    iexOpen: 194.47,
    iexOpenTime: 1654695000305,
    iexRealtimePrice: null,
    iexRealtimeSize: null,
    iexVolume: null,
    lastTradeTime: 1654718399899,
    latestPrice: 196.64,
    latestSource: "Close",
    latestTime: "June 8, 2022",
    latestUpdate: 1654718400792,
    latestVolume: null,
    low: null,
    lowSource: "15 minute delayed price",
    lowTime: 1654695000563,
    marketCap: 561210585170,
    oddLotDelayedPrice: null,
    oddLotDelayedPriceTime: null,
    open: null,
    openTime: null,
    openSource: "official",
    peRatio: 14.87,
    previousClose: 195.65,
    previousVolume: 18828687,
    primaryExchange: "NASDAQ",
    symbol: "FB",
    volume: null,
    week52High: 384.33,
    week52Low: 169,
    ytdChange: -0.410310893414598,
    isUSMarketOpen: false,
  },
];

//preguntamos si existe la key de los stocks

if (!ls.getItem("stocks")) {
  ls.setItem("stocks", JSON.stringify(array));
}

const stocksList = document.getElementById("stocksList");

function cargarData() {
  let datos = ls.getItem("stocks");

  datos = JSON.parse(datos);
  datos.forEach((stock) => {
    const div = document.createElement("div");
    let valueDeprecated = false;
    if (stock.close < stock.open) {
      valueDeprecated = true;
    }

    div.className = "stock-item";
    div.id = `stock_${stock.symbol}`;
    div.innerHTML += `
        <img
        src="https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${
          stock.symbol
        }.png"
        alt="ex"
        class="stock-item-img"
        />
        <span>|</span>
        <p class="name-stock">${
          stock.companyName ? stock.companyName : "N/N"
        }</p>
        <span>|</span>
        <p class="price ${valueDeprecated ? "decrement" : "increment"}">
            ${stock.latestPrice}
            <span
            ><img
                src="${
                  valueDeprecated
                    ? "./images/down-arrow.svg"
                    : "./images/up-arrow.svg"
                }"
                class="arrow ${valueDeprecated ? "decrement" : "increment"}"
            /></span>
        </p>
        <span>|</span>
        <div class="options-stock">
            <span
            ><img
                src="./images/trash-solid-36.png"
                alt="borrar"
                class="options-img btn_eliminar"
                id="${stock.symbol}"
            /></span>
            <span
            ><img
                src="./images/refresh-regular-36.png"
                alt="actualizar"
                class="options-img btn_actualizar"
                id="${stock.symbol}"
            /></span>
        </div>
          `;
    stocksList.appendChild(div);
  });
}

cargarData();

function cargarStock(stockAgregado) {
  let valueDeprecated = false;
  if (stockAgregado.close < stockAgregado.open) {
    valueDeprecated = true;
  }
  const div = document.createElement("div");
  div.className = "stock-item";
  div.innerHTML += `
        <img
        src="https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${
          stockAgregado.symbol
        }.png"
        alt="ex"
        class="stock-item-img"
        />
        <span>|</span>
        <p class="name-stock">${
          stockAgregado.companyName ? stockAgregado.companyName : "N/N"
        }</p>
        <span>|</span>
        <p class="price ${valueDeprecated ? "decrement" : "increment"}">
            ${stockAgregado.latestPrice}
            <span
            ><img
                src="./images/down-arrow.svg"
                class="arrow"
            /></span>
        </p>
        <span>|</span>
        <div class="options-stock">
            <span
            ><img
                src="./images/trash-solid-36.png"
                alt="borrar"
                class="options-img btn_eliminar"
                id="${stockAgregado.symbol}"
            /></span>
            <span
            ><img
                src="./images/refresh-regular-36.png"
                alt="actualizar"
                class="options-img btn_actualizar"
                id="${stockAgregado.symbol}"
            /></span>
        </div>
          `;
  stocksList.appendChild(div);
}
