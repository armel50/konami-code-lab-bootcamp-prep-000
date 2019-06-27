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
function arrayMatch(){
  console.log("arrayMatch");
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
