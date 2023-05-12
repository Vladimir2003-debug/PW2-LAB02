/** Ejercicio 01 Escriba una función que reciba el número de día de la fecha actual
 *  new Date() - https://www.w3schools.com/jsref/jsref_obj_date.asp y devuelva el texto del día de la semana 
 *  correspondientes. Por ejemplo si recibe 0, devolvería “Domingo”.
 *  @param {Date} date La fecha actual 
 */
function getDayName(date) {
    const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    document.getElementById("dayName").innerHTML = days[date.getDay()];
}


/** Ejercicio 02: Escriba una página web que reciba un texto y al presionar un botón muestre el mismo
 *  texto invertido en otra sección (div). Por ejemplo si se escribe “Hola”, se mostraría como “aloH”.
 */
function reverseWord() {
    const word = document.querySelector("#word").value;

    let length = word.length - 1;
    let reverse =  "";

    for(let i = length; i >= 0; i--) {
        reverse += word[i];
    }

    document.getElementById("reverse").innerHTML = reverse;

}

/** Ejercicio 03: Escribir una página que muestre cuántos días faltan para el día de Arequipa!
 *  @param {Date} date La fecha actual 
 */
function daysForArequipa(date) {

    var day = date.getDate();
    var month = date.getMonth();

    daysMonths = [31.28,31,30,31,30,31,31,30,31,30,31];

    let total = 0;
    
    if(month < 7){
        total += daysMonths[month] - day;
        total += sumMonths(daysMonths,month,6) + 15;
    }  else if(month > 7) {
        total += daysMonths[month] - day;
        total += sumMonths(daysMonths,month + 1,11);
        total += sumMonths(daysMonths,0,6) + 15;
    } else {
        total = 15 - day;
    }   

    document.getElementById("diasFaltantes").innerHTML = total;

}
/**
 * Suma de los meses del año
 * @param {Array} months Los dias de los meses del año
 * @param {number} start El mes con que empieza
 * @param {number} end El mes con que termina
 * @return {number} La suma total
 */

function sumMonths(months,start,end) {
    var suma = 0;
    for(let i = start ;i < end ; i++) {
        suma += months[i];
    }

    return suma;
}



/** Ejercicio 04: Escribir un página que reciba el URL de la sesión de google meet de hoy 
 * y devuelva el código de la sesión sin guiones separadores
 */
function getURLCode() {
    const url = document.querySelector("#urlMeet").value;
    var code = url.replace("https://meet.google.com/"," ").split("?")[0].replaceAll("-","");
    document.getElementById("code").innerHTML = code;
    
}

/** Ejercicio 05: Escribir una página que permita calcular las suma de todos los valores de una 
 *  tabla de valores dinámica. La idea es crear una página web con un formulario que te permita decir 
 *  cuantos valores tendrá la tabla, luego, al enviar el formulario la tabla se debe crear dinámicamente,
 *   junto con otro botón de envió para calcular la suma.
 */
function createTable() {

    const nValues = document.getElementById("numberValues");

    let table = `
    <input type="number" id="value"><br>
    <button onclick="addRow()">Ingresar</button>
    <table id="table">
    </table>
    `;


    document.getElementById("tableSum").innerHTML = table;
}
function addRow() {
    var table = document.getElementById("table");
    console.log(table);
}

function sumMonths(){
    console.log("sumMonths");
}