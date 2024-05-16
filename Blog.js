function iniciar(){
var boton=document.getElementById('grabar');
boton.addEventListener('click', nuevoitem, false);
mostrar();
}
function nuevoitem(){
var clave=document.getElementById('clave').value;
var valor=document.getElementById('texto').value;
localStorage.setItem(clave,valor);
mostrar();
document.getElementById('clave').value='';
document.getElementById('texto').value='';
}
function mostrar(){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='';
for(var f=0;f<localStorage.length;f++){
var clave=localStorage.key(f);
var valor=localStorage.getItem(clave);
cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
}
}
window.addEventListener('load', iniciar, false);
function elimina()
{

	if(confirm('Está Seguro?')){
		localStorage.clear();
		mostrar();
		}
}