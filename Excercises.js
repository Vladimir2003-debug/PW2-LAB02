/** Ejercicio 01 Escriba una función que reciba el número de día de la fecha actual
 *  new Date() - https://www.w3schools.com/jsref/jsref_obj_date.asp y devuelva el texto del día de la semana 
 *  correspondientes. Por ejemplo si recibe 0, devolvería “Domingo”.
 *  @param {Date} date La fecha actual 
 */
function getDayName(date) {
    const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    console.log(date.getDay());
    document.getElementById("dayName").innerHTML = days[date.getDay()];
}


/** Ejercicio 02: Escriba una página web que reciba un texto y al presionar un botón muestre el mismo
 *  texto invertido en otra sección (div). Por ejemplo si se escribe “Hola”, se mostraría como “aloH”.
 */


/** Ejercicio 03: Escribir una página que muestre cuántos días faltan para el día de Arequipa!
 * 
 */

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
 * 
 */