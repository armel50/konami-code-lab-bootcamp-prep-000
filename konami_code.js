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
   
        console.log(e.key);
        check.push(e.key);
        if(e.key===codes[i]){
          trueOrFalse.push("true");
        }else{
          trueOrFalse.push("false");
        }
        i++;
        if(check.length===10){
          console.log(trueOrFalse);
          
            if(trueOrFalse.includes("false")){
                  console.log("Nooooooo");
                  check.length=0;
                  trueOrFalse.length=0;
            
           
            }else{
                console.log("yessssssssss");
                check.length =0;
            }
              }
             
    });

   
}
