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
        i++;
        if(check.length===10){
          console.log(trueOrFalse);
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
