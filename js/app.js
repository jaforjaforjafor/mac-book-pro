// document.getElementById('memory-access').addEventListener('click',function(){
//    const clickMemoryField = document.getElementById('memory-cost');
//     clickMemoryField.innerText=clickMemoryField;



const value =20;

document.getElementById("memory-access").addEventListener("click", displayvalue);
const mouseClick =document.getElementById('memory-access');
const clickMemoryField = document.getElementById('memory-cost');

function displayvalue() {
  document.getElementById("memory-cost").innerHTML = value;
  
}
   
// })