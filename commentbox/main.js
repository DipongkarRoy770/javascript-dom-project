document.getElementById('btn').addEventListener('click',function(){
  const comment = document.getElementById('new-comment');
  const newComment = comment.value ;
  const container = document.getElementById('container');
  const p = document.createElement('p')
  p.innerText =newComment ;
  container.appendChild(p)
  comment.value = '';
})