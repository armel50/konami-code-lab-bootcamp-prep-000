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
  }
  
}

function init() {

  document.addEventListener("keydown",function(e){
    const key =e.key;
    
    for(var i = 0; i<codes.length;i++){
      if(key===codes[i]){
        console.log(key);
        check.push(key);
        
        if(check.length===10){
         console.log(check);
         console.log(codes);
          arrayMatch(check);
        }
        break;
      }
      
      
    }
      
    });

   
}
