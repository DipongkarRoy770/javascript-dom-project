 let value = 0;
 document.getElementById('btn').addEventListener('click',function(){
  value += 1
  document.getElementById('cound').innerText = value 
 })
 function clickMe(){
  value -= 1
  document.getElementById('cound').innerText = value;
 }
