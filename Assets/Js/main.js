const encabezado = document.querySelector("#encabezado");
    let titulo = document.createElement("h1");
    titulo.textContent = "LEATHER JACKET";
    encabezado.appendChild(titulo);

   

const productos = [
    {id: 1, nombre: "Campera Marron Hombre", precio: 15000, imagen: "./assets/img/h01.jpg"},
    {id: 2, nombre: "Campera Bordada Hombre", precio: 21300, imagen: "./assets/img/h02.jpg"},
    {id: 3, nombre: "Campera Negra Hombre", precio: 18000, imagen: "./assets/img/h03.jpg"},
    {id: 4, nombre: "Campera Volverine Hombre", precio: 25000, imagen: "./assets/img/h04.jpg"},
    {id: 5, nombre: "Campera Con Capucha Hombre", precio: 13000, imagen: "./assets/img/h05.jpg"},
    {id: 6, nombre: "Campera Moto Hombre", precio: 16200, imagen: "./assets/img/h06.jpg"},
    
    {id: 7, nombre: "Campera Marron Mujer", precio: 15000, imagen: "./assets/img/m01.jpg"},
    {id: 8, nombre: "Campera Negra y Marron Mujer", precio: 16300, imagen: "./assets/img/m02.jpg"},
    {id: 9, nombre: "Campera Negra Mujer", precio: 12000, imagen: "./assets/img/m03.jpg"},
    {id: 10, nombre: "Campera Cuero Rojo Mujer", precio: 28000, imagen: "./assets/img/m04.jpg"},
    {id: 11, nombre: "Campera Moto Mujer", precio: 16000, imagen: "./assets/img/m05.jpg"},
    {id: 12, nombre: "Campera Cuero y Tela Mujer", precio: 11800, imagen: "./assets/img/m06.jpg"},];




 const caja = document.getElementById("caja");
    productos.forEach((producto, indice)=>{
        let card = document.createElement("div");
        card.classList.add("card", "m-0", "p-1", "col-sm-12", "col-md-4", "col-xl-2");
        let html =`<img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$ ${producto.precio}</p>
          <a href="#" class="btn btn-secondary" onClick = "agregaralCarrito(${indice})">Agregar al Carrito</a>
        </div>`
        card.innerHTML =  html;
        caja.appendChild(card);
    });


let lugarCarrito = document.getElementById("cart");
let total = 0;
const dibujarCarrito = () =>{
    lugarCarrito.className = "cart";
    lugarCarrito.innerHTML = "";
    if(carrito.length > 0){
        carrito.forEach((producto, indice) =>{
            total = total + producto.precio * producto.cantidad;
            const carritoDibujado = document.createElement("div");
            carritoDibujado.className = "producto-carrito";
            carritoDibujado.innerHTML = `<img class="car-img" src="${producto.imagen}"/>
            <div class="product-details">${producto.nombre}</div> 
            <div class="product-details">Cantidad: ${producto.cantidad}</div>
            <div class="product-details">Precio: ${producto.precio}</div>
            <div class="product-details">Subtotal: ${producto.precio * producto.cantidad}</div>
            <button class="btn btn-secondary" id="remove-product" onClick="eliminarProducto(${indice})">Eliminar Producto</button>`;
            lugarCarrito.appendChild(carritoDibujado);
        });
    
    const totalTotal = document.createElement("div");
        totalTotal.className = "total-carrito";
        totalTotal.innerHTML = `<div class="total">TOTAL $ ${total} </div>
        <button class="finalizar btn btn-secondary" id="finalizar" onClick="finalizarCompra()">Finalizar Compra</button>`;
        lugarCarrito.appendChild(totalTotal);
    } else {
        lugarCarrito.classList.remove("carrito");
    }
}


 let carrito = [];
 const agregaralCarrito=(indice)=>{
    const contenidoCarrito = carrito.findIndex((elemento)=>{
        return elemento.id === productos[indice].id
 });
 if(contenidoCarrito === -1){
    const agregarProd = productos[indice];
    agregarProd.cantidad = 1;
    carrito.push(agregarProd);
    actuStorage(carrito);
    dibujarCarrito();
 } else {
    carrito[contenidoCarrito].cantidad += 1;
    actuStorage();
    dibujarCarrito();
 }
}
const eliminarProducto = (indice) => {
    carrito.splice(indice, 1);
    actuStorage(carrito);
    dibujarCarrito();

}

const finalizarCompra = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    lugarCarrito.innerHTML = "";
    const compraFinalizada = `<div class="compra-finalizada">
    <p class="compra-parrafo">Ya casi es tuya por ${total}</p>
    <div class="datos-cliente">
    <p class="datos-parrafo">Complete el formulario de entrega</p>
    <button class="btn btn-secondary formulario" id="formulario" onClick="dibujarFormulario()">Formulario</button><div>`;
    lugarCarrito.innerHTML = compraFinalizada;
}

const dibujarFormulario = () => {
    lugarCarrito.innerHTML = "";
    const formulario = `
    <h2>Datos de Envio</h2>
    <div class="contact__secction-container">
        <div class="row">
            <div class="contact__secction-item">
                <label>Nombre</label>
                <input type="text" id="nombre" placeholder="Nombre"/>
            </div>
            <div class="contact__secction-item">
                <label>E-mail</label>
                <input type="text" id="mail" placeholder="E-mail"/>
            </div>
            <div class="contact__secction-item">
                <label>Telefono</label>
                <input type="number" id="telefono" placeholder="Telefono"/>
            </div>
            <div class="contact__secction-item">
                <label>Domicilio</label>
                <input type="text" id="domicilio" placeholder="Domicilio"/>
            </div>
            <div class="contact-button">
                <button type="button" class="btn btn-secondary envio" onClick="mostrarMensaje()">Confirmar</button>
            </div>
        </div>
    </div>`;
    lugarCarrito.innerHTML = formulario;
}
const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const domicilioCliente = document.getElementById("domicilio").value;
    lugarCarrito.innerHTML = "";
    let mensaje = `<div class="mensaje-final">Gracias ${nombreCliente} por su compra! en los proximos dias recibira su cumpra en ${domicilioCliente}`
    lugarCarrito.innerHTML =  mensaje;
}

const actuStorage = (carrito)=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

