function rfc() {
	var nombre = document.getElementById('nom').value;
	var apeP = document.getElementById('aP').value;
	var apeM = document.getElementById('aM').value;
	var anio = document.getElementById('year').value;
	var mes = document.getElementById('M').value;
	var dia = document.getElementById('dia').value;

	if (anio.length === 4) {
		anio = anio.slice(2);
	}

	var rfc = apeP.slice(0,2) + apeM.slice(0,1) + nombre.slice(0,1);
	rfc = rfc + anio + mes + dia;
	rfc = rfc.toUpperCase();

	document.getElementById('resultado').value = rfc;
}
