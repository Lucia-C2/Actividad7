// Recuperar los productos desde el localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`${producto.nombre} ha sido agregado al carrito.`);
}

// Obtener el botón de agregar al carrito de cada página
document.getElementById("agregarCarrito")?.addEventListener("click", function() {
    const producto = {
        nombre: "Producto X", // Nombre por defecto, se actualiza en cada página
        descripcion: "Descripción del producto",
        precio: 0, // Precio del producto
        imagen: "../img/default.jpg" // Ruta de imagen por defecto
    };

    // Condicionar según la página
    if (window.location.pathname.includes("polera")) {
        producto.nombre = "Polera de Hilo";
        producto.descripcion = "Disponible en talle xs, s, m, l y xl. Colores: Amarillo, rosa y verde.";
        producto.precio = 120000;
        producto.imagen = "../img/polera.jpg";
    } else if (window.location.pathname.includes("jeans")) {
        producto.nombre = "Jeans Overside";
        producto.descripcion = "Disponible en talles xs, s, m, l, xl, xxl, xxxl.";
        producto.precio = 100000;
        producto.imagen = "../img/overside.jpg";
    } else if (window.location.pathname.includes("camiseta")) {
        producto.nombre = "Camiseta de Algodón";
        producto.descripcion = "Disponible en talles s, m y l.";
        producto.precio = 25000;
        producto.imagen = "../img/camiseta.jpg";
    } else if (window.location.pathname.includes("rompeviento")) {
        producto.nombre = "Campera Rompeviento";
        producto.descripcion = "Disponible en talle m, l, xl y xxl.";
        producto.precio = 200000;
        producto.imagen = "../img/rompeviento.jpg";
    } else if (window.location.pathname.includes("vestido")) {
        producto.nombre = "Vestido Floral";
        producto.descripcion = "SIN STOCK.";
        producto.precio = 60000;
        producto.imagen = "../img/vestido.jpg";
    }

    agregarAlCarrito(producto);
});
