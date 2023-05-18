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
    var nValues = document.querySelector("#numberValues").value;
    nValues++;
    let tableHtml = `
    <input type="number" id="value"><br>
    <button onclick="addRows(${nValues})" id="create">Ingresar</button>
    <div id="resultSum" hidden>
        <p id="sum"></p>
        <button onclick="getSum()">Obtener Suma</button>
    </div>
    <table id="table">
        <tr>
            <td>SUMANDOS<td>
        </tr>
    </table>
    `
    ;
    
    document.getElementById("tableSum").innerHTML = tableHtml;
    activateButtonEnter("value","create");

}
/**
 * Metodo para añadir filas a la tabla
 * @param {number} nValues Numero de valores que deberia tener la tabla
 */
function addRows(nValues) {

    const tabla = document.getElementById("table");
    var newRow = document.createElement("tr");

    var newCeil = document.createElement("td");

    newCeil.innerHTML = document.querySelector("#value").value;
    newRow.appendChild(newCeil);

    tabla.appendChild(newRow);   

    var length = tabla.rows.length;

    if( length == nValues) {
        document.getElementById("create").hidden = true;
        document.getElementById("value").hidden = true;
        document.getElementById("resultSum").hidden = false;
    }

}

/**
 * Funcion para obtener la suma de todos los valores de la tabla 
 */
function getSum() {

    const tChildNodes = document.getElementById("table").childNodes;
    var sum = 0;
    var length = tChildNodes.length;
    for(let i = 2; i < length; i++) {
        sum += parseFloat(tChildNodes[i].childNodes[0].textContent);
    }

    document.getElementById("sum").innerHTML = sum;
}
/**
 * Funcion que sirve para cuando el input de ingreso de valores de la tabla se vacie y para que al presionar
 * enter se envie automaticamente los valores de la tabla.
 * @param {string} idInput: El id del input en donde estan los valores
 * @param {string} idButton : El id del botton que envia los valores en el input
 */

function activateButtonEnter(idInput, idButton) {
    var input = document.getElementById(idInput);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") { 
            event.preventDefault();        
            document.getElementById(idButton).click();
            input.value = null;
        }
    });
}
