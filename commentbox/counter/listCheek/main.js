// const items = document.getElementsByClassName('item');
// for (const item of items){
//   item.addEventListener('click',function(event){
//     //console.log(event.target.parentNode)
//     event.target.parentNode.removeChild(event.target);
//   })
// }
document.getElementById('btn-add').addEventListener('click',function()
{
  const element = document.getElementById('item-list')
  const li = document.createElement('li')
  li.innerText = 'tithi i love you';
  li.classList.add('item')
  element.appendChild(li)
  //console.log('kaj korci akon')
})
document.getElementById('item-list').addEventListener('click',function(event){
  event.target.parentNode.removeChild(event.target)
})