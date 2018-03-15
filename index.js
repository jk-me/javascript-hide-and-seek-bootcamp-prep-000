function getFirstSelector(x) {
  return document.querySelector(`${x}`)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var x = document.querySelectorAll('.ranked-list li')
  for (var i=0;i<x.length;i++){
    x[`${i}`].innerHTML=parseInt(x[`${i}`].innerHTML)+parseInt(`${n}`)
  }
}

function deepestChild(){
  var x = document.querySelector('div#grand-node div')
  var n=[]
  while (true){
    
    if (x[0]===undefined){
      return n
    }
   else{ 
     n=[x]
     x=x[0]

  }
}}