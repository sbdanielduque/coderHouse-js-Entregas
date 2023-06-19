//Precios de los zapatos
const precio1 = 259;
const precio2 = 399;
const precio3 = 89;
const precio4 = 349;
const precio5 = 99;
const dcto15 = 0.15
const dcto10 = 0.10

//Bucles y funciones
function tallasDisponibles(modelo){
    switch (modelo) {
        case "air jordan 1":
            confirm("Tallas Disponible: 8 - 8.5 - 10. Quieres saber el precio?")
            confirm("El precio de las air jordan es: $" + precio1)
            break;
        case "yeezy 350 boost":
            confirm("Tallas Disponible: 6 - 8 - 11.5. Quieres saber el precio?")
            confirm("El precio de las yeezy 350 boost es: $" + precio2)
            break;
        case "adidas superstar":
            confirm("Tallas Disponible: 8 - 10. Quieres saber el precio?")
            confirm("El precio de las adidas superstar es: $" + precio3)
            break;
        case "air jordan 11":
            confirm("Tallas Disponible: 10 - 11. Quieres saber el precio?")
            confirm("El precio de las Air Jordan 11 es: $" + precio4)
            break;
        case "adidas campus":
            confirm("Tallas Disponible: 6 - 10 - 10.5 - 11. Quieres saber el precio?")
            confirm("El precio por las Adidas Campus es: $" + precio5)
            break;
        default: 
            alert("Ese modelo no lo tenemos disponible en estos momentos")
            break;
    }
}

function cantidadDeProducto(){
    let producto = parseInt(prompt("Cuantas zapatillas les gustaria comprar?. recuerda que maximo son 5 zapatillas por persona"))
    if (producto === 5){
        alert("Por llevar 5 tienes un 15% de descuento.")
    } else if (producto >= 6 ){
        alert("No puedes comprar mas de 5 zapatillas.")
    } else if (producto >= 3) {
        alert("Por llevarse mas de 3 Tienes un 10% de descuento.")
    } else if( producto === 0 || producto === Nan){
        alert("Ingrese un numero valido, recuerde siempre tiene que ser mayor a 0")
    } else {
        alert("Muchas gracias por su compra.")
    }
}

function conoceLosDescuentos(){
    console.log("Mientas mas compras mas descuentos tienes. Mira nuestros descuentos aca abajo 🤑")
for (i = 1; i <= 5; i++){
    
    if(i === 5){
        console.log("si compras " + i + " par(es), tienes 15% de descuento 🤩")
    } else if(i >= 3){
        console.log("si compras " + i + " par(es), tienes 10% de descuento 😊")
    } else{
        console.log("si compras " + i + " par(es), no tienes descuento 😢")
    }
    
}
}

// Simulacion de Tienda
function preguntarPorTenis(){
    alert("Mira los descuentos en la consola")
    conoceLosDescuentos()
    let modelo = prompt("Escoge un modelo y sabras cuales tallas tenemos disponible.")
    tallasDisponibles(modelo.toLocaleLowerCase())
    cantidadDeProducto()
    alert("Muchas gracias por visitarnos. espero verte pronto nuevamente 😄")
}