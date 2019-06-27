const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
var check=[];
var trueOrFalse=[];
function arrayMatch(check){
  console.log("arrayMatch");
  for(var i =0;i<check.length;i++){
    if(check[i]===codes[i]){
      trueOrFalse.push("true");
    }else{
      trueOrFalse.push("false");
    }
    
  }
  
  if(trueOrFalse.includes("false")){
    console.log("Nooooooo");
    check.length=0;
    
   
  }else{
    console.log("yessssssssss");
    check.length =0;
  }
  
}

function init() {

  document.querySelector("body").addEventListener("keydown",function(e){
   
        console.log(e.key);
        check.push(e.key);
        
      
        if(check.length===10){
          console.log(check);
         console.log(codes);
          arrayMatch(check);
        }
      
        
    
      
    });

   
}
