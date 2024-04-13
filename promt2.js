function multi()
{
var num; num=prompt('Ingresa un numero(1-10)',''); 
num=parseInt(num); 
document.write('<div style="background-color: #aab6f9; text-align: center;">'); 
var x=1; 
for (x=1;x<=10;x++) 
{ 
tabla=num*x; 
document.write(""); 
document.write("");
document.write(num," x ",x," = ",tabla," <br>"); 
} 
document.write("");
}