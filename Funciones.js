function evalua() {
    var pala = document.getElementById('cadena').value;
    var resultado = document.getElementById('parrafo');

    if (pala !== pala.toLowerCase() && pala !== pala.toUpperCase()) {
        resultado.innerHTML = 'La cadena tiene mayúsculas y minúsculas';
    } else if (pala === pala.toLowerCase()) {
        resultado.innerHTML = 'La cadena tiene solo minúsculas';
    } else if (pala === pala.toUpperCase()) {
        resultado.innerHTML = 'La cadena tiene solo mayúsculas';
    }
}
