const box2 = document.getElementById('box2');

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const backgroundColor = btn.style.backgroundColor;

  


  if (backgroundColor === 'blue') {
    btn.style.backgroundColor = 'green';
  } else if (backgroundColor === 'green') {
    btn.style.backgroundColor = 'yellow';}
    else if (backgroundColor === 'yellow') {
        btn.style.backgroundColor = 'orange';}
        else if (backgroundColor === 'orange') {
            btn.style.backgroundColor = 'red';}
            else if (backgroundColor === 'red') {
                btn.style.backgroundColor = 'purple';}
                else if (backgroundColor === 'purple') {
                    btn.style.backgroundColor = 'blue';}
        
   else {
    btn.style.backgroundColor = 'blue';
  }
  
});
 // random color button //
const body = document.getElementById('btn2');

btn2.addEventListener("click", function onClick( event ) {
    const backgroundColor = box.style.backgroundColor;

    var i = 1;                  

function myLoop() {         
  setTimeout(function() { 

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = "#"+randomColor;
    
    i++;                    
    if (i < 100) {           
      myLoop();             
    }                       
  }, 10)
}

myLoop(); 
  },1)

// random charcter button//

  btn3.addEventListener("click", function onClick( event ) {

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_!@#$%^&*|?';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    
    console.log(makeid(16));
 box2.textContent=makeid(16)
    
  });

  function myFunction() {
    alert("you clicked the dot!");
  }

 


