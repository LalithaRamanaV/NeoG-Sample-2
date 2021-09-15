const inputText= document.querySelector(".input-text")
const increaseFontSizeBtn= document.querySelector(".increase");
const decreaseFontSizBtn=document.querySelector(".decrease");
const resultBtn=document.querySelector(".result");
const output = document.querySelector(".output");

let num = 16;
resultBtn.addEventListener("click",() => {
  output.innerText=inputText.value;
})
increaseFontSizeBtn.addEventListener("click",()=>{
  num = num +2;
  output.style.fontSize=`${num}px`;
})
decreaseFontSizeBtn.addEventListener("click",()=>{
  output.style.fontSize=`${num}px`;
})



