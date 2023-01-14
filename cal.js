'use strict'
let num;
let all_num=document.querySelectorAll('.number')
all_num.forEach(function(btn){
    btn.addEventListener("click",function(){
  let btn_text=btn.textContent
  if(btn_text=='X'){
    document.querySelector('.output').textContent+='*'
  }
  else{
    document.querySelector('.output').textContent+=btn_text
  }
  num=document.querySelector('.output').textContent
  
  })
})

const equal=document.querySelector('.equals')
equal.addEventListener('click',function(){
  let result=eval(num)
  document.querySelector(".output").textContent=result

})

const clear=document.querySelector('.all-clear')
clear.addEventListener('click',function(){
  let display=document.querySelector('.output')
  display.textContent=''
})

const delet=document.querySelector('.delete-btn')
delet.addEventListener('click',function(){
  num=num.slice(0,-1)
  // num=num.slice(0,num.length -1)
  document.querySelector('.output').textContent=num
})
