function sumar(event) {
    event.preventDefault();
    var resultado = document.getElementById('res');
    var valor1 = parseInt(document.getElementById('value1').value);
    var valor2 = parseInt(document.getElementById('value2').value);
    var suma = valor1 + valor2;   
    resultado.value = suma;
}

function restar(event) {
    event.preventDefault();
    var resultado = document.getElementById('res');
    var valor1 = parseInt(document.getElementById('value1').value);
    var valor2 = parseInt(document.getElementById('value2').value);
    var resta = valor1 - valor2;   
    resultado.value = resta;
}

function multiplicar(event) {
    event.preventDefault();
    var resultado = document.getElementById('res');
    var valor1 = parseInt(document.getElementById('value1').value);
    var valor2 = parseInt(document.getElementById('value2').value);
    var multiplicacion = valor1 * valor2;   
    resultado.value  = multiplicacion;
}

function dividir(event) {
    event.preventDefault();
    var resultado = document.getElementById('res');
    var valor1 = parseInt(document.getElementById('value1').value);
    var valor2 = parseInt(document.getElementById('value2').value);
    var division = valor1 / valor2;   
    resultado.value = division;
}