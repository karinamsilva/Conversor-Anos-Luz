var anosLuz = prompt("Quantidade de anos-luz a ser convertida:")

var form = 300.00 * 31.536000

var km = parseFloat(form) * parseFloat(anosLuz)
alert(km.toFixed(2) + " km")