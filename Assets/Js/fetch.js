

fetch('https://api.bluelytics.com.ar/v2/latest')
.then(Response => Response.json())
.then(data => {
    const datos = data; 
    dolarOficial = datos.oficial.value_sell;
    dolarBlue = datos.blue.value_sell;
    euroOficial = datos.oficial_euro.value_sell;
    euroBlue = datos.blue_euro.value_sell;
    const pie = document.querySelector("#footer");
    let piee = document.createElement("div");
    pie.classList.add("text-white");
    let parrafo =  `<p>dolar oficial:$${dolarOficial} | dolar blue:$${dolarBlue} | euro oficial:$${euroOficial} | euro blue:$${euroBlue}</p>
    `
    pie.innerHTML = parrafo;
    pie.appendChild(piee);

    
})
.catch(error => console.log(error))

