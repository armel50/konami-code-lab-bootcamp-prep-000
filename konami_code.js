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
    init();
  }else{
    console.log("yessssssssss");
    return "it was fine";
  }
  
}

function init() {

  document.addEventListener("keydown",function(e){
    i=0;
    
    while(check.length!==10){
    
  
      if(e.key===codes[i]){
        console.log(e.key);
        check.push(e.key);
        i++;
        
       
        
      } 
        if(check.length===10){
          console.log(check);
         console.log(codes);
          arrayMatch(check);
        }
      
        
    }
      
    });

   
}
