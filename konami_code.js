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
i=0;
  document.querySelector("body").addEventListener("keydown",function(e){
   
        console.log(e.key);
        check.push(e.key);
        if(e.key===codes[i]){
          trueOrFalse.push("true");
        }else{
          trueOrFalse.push("false");
        }
              if(check.length===10){
                 if(trueOrFalse.includes("false")){
            console.log("Nooooooo");
            check.length=0;
            
           
          }else{
            console.log("yessssssssss");
            check.length =0;
          }
              }
             
    });

   
}
