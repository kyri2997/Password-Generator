let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1El = document.getElementById("pw1-el");
let pw2El = document.getElementById("pw2-el");

function randomPw() {
       pw1El.textContent = 0;
       pw2El.textContent = 0; 
    for (i=0; i < 14; i++) {
       let genPw1 = Math.floor(Math.random() * characters.length);
       let genPw2 = Math.floor(Math.random() * characters.length);
       pw1El.textContent += characters[genPw1] ;
       pw2El.textContent += characters[genPw2] ;
        // console.log(characters[i]) ;
    }
}

function generate(){
    randomPw()
}




