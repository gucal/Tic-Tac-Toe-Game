var turn = document.getElementById("turn");

var boxes = document.querySelectorAll("#main div"), X_O = 0;

function selectWinnerBoxes(b1,b2,b3){  
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");

    turn.innerHTML = b1.innerHTML+ " Kazandı!";
    turn.style.fontSize = "40px";
}


function getWinner(){
    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");

        
        if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)//1-2-3
        {selectWinnerBoxes(box1,box2,box3);
            
        }

         if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) //4-5-6
        { selectWinnerBoxes(box4,box5,box6);
            }
        
         if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) //7-8-9
        {selectWinnerBoxes(box7,box8, box9);
        }

         if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) //1-4-7
        {   selectWinnerBoxes(box1,box4,box7)
        }

         if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)//2-5-8
        {  selectWinnerBoxes(box2,box5,box8);
        }

         if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)//3-6-9
        {   selectWinnerBoxes(box3,box6,box9);
        }
         if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)//1-5-9
        {   selectWinnerBoxes(box1,box5,box9);
        }
         if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)//3-5-7
        { selectWinnerBoxes(box3,box5,box7);
        }
    }

        var boxes = document.querySelectorAll("#main div"), X_O = 0;

        for(var i =0; i<boxes.length; i++){
            boxes[i].onclick= function(){
                if(this.innerHTML !== "X" && this.innerHTML !=="O"){
                if(X_O%2===0){
                    console.log(X_O);
                    this.innerHTML="X";
                    turn.innerHTML = "Sırada O var!";
                    getWinner();
                    X_O += 1;
                }else{
                    console.log(X_O);
                    this.innerHTML= "O";
                    turn.innerHTML = "Sırada X var!";
                    getWinner();
                    X_O += 1;             
                   }
                }
            };
        
        }

    function replay(){
       
        for(var i =0; i<boxes.length; i++){
            boxes[i].classList.remove("win");
            boxes[i].innerHTML = "";
            turn.innerHTML = "Oyna!";
            turn.style.fontSize ="25px";
        }

    }