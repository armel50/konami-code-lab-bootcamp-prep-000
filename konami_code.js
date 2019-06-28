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


var i=0;
function init() {

  document.addEventListener("keydown",function(e){
   console.log("this is "+i);
      //console.log(e.key);
        check.push(e.key);
        if(e.key===codes[i]){
          trueOrFalse.push("true");
          i++;
        }else{
          trueOrFalse.push("false");
          i++;
        }
        
          
        if(check.length===10){
          console.log(trueOrFalse);
          i=0;
            if(trueOrFalse.includes("false")){
                  //console.log("Nooooooo");
                  check.length=0;
                  trueOrFalse.length=0;
            
           
            }else{
                //console.log("yessssssssss");
                
                console.log("Yessssssss");
                check.length =0;
                 trueOrFalse.length=0;
            }
              }
    });
    
   
}
