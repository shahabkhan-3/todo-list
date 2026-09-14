let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let list = document.querySelector('.list')
let ul = document.querySelector('.ul')

btn.addEventListener('click',function(){

   let li = document.createElement('li')
   li.textContent=input.value;

   let delbtn = document.createElement('span')
   delbtn.textContent ='❌'

   delbtn.onclick = function(){
    li.remove()
 }
    let completebtn = document.createElement('span')
    completebtn.textContent='✅'
     completebtn.onclick = function(){
        li.classList.toggle('done')
     }
  
   li.appendChild(completebtn)
   li.appendChild(delbtn)
    ul.appendChild(li)
    input.value=''; 
})