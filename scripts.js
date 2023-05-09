/* CREO EL OBJETO QUE VA A CONTENER LOS VALORES QUE INGRESE POR INPUT */
const datos = {
    cantidad: '',
    categoria: ''
};

/* LE ASIGNO EL VALOR DE 'estudiante' A CATEGORIA QUE ES LA PRIMERA OPCION DEL SELECT */
var categoria;
datos.categoria = 'estudiante';

/* OBTENGO ELEMENTOS HTML */
const cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
const totalAPagar = document.querySelector('#totalAPagar');
const btnResumen = document.querySelector('.btnResumen');
const btnBorrar = document.querySelector('.btnBorrar');
const formulario = document.querySelector('.formulario');

/* GUARDO VALORES QUE INGRESO POR INPUT Y SELECT EN EL OBJETO CREADO ANTERIORMENTE */
cantidad.addEventListener('input', function(event){
    datos.cantidad = event.target.value;
    console.log("Cantidad: " + event.target.value + " guardada");
});

categoria.addEventListener('change', function(event){
    datos.categoria = event.target.value;
    console.log("Categoria: " + event.target.value + " guardada");
});

/* BOTON RESUMEN */
btnResumen.addEventListener('click' , function(event){
    event.preventDefault();
    const {cantidad, categoria} = datos;
    var resultado = 0;    
    var indice = 0;
    indice = totalAPagar.textContent.indexOf('$');
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    if(categoria == 'estudiante'){
        resultado = (200*cantidad)*0.2;
        console.log("La categoria seleccionada es (E): " + categoria);
    } 
    else if(categoria == 'trainee'){
        resultado = (200*cantidad)*0.5;
        console.log("La categoria seleccionada es (T): " + categoria);
    }
    else if(categoria == 'junior'){
        resultado = (200*cantidad)*0.85;
        console.log("La categoria seleccionada es (J): " + categoria);
    }
    totalAPagar.textContent += resultado;
    return;
});

/* BOTON BORRAR */
btnBorrar.addEventListener('click' , function(event){
    event.preventDefault();
    var indice = 0;
    indice = totalAPagar.textContent.indexOf('$');
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    formulario.reset();
    return;
});