var player1 = localStorage.getItem("Math Quiz Player 1");
var player2 = localStorage.getItem("Math Quiz Player 2");

var player1Score = 0;
var player2Score = 0;

document.getElementById("player1_name").innerHTML = player1 + " :  ";
document.getElementById("player2_name").innerHTML = player2 + " :  ";
document.getElementById("player1_score").innerHTML =" " +  player1Score;
document.getElementById("player2_score").innerHTML =" " +  player2Score;


document.getElementById("player_question").innerHTML = "Question Turn : " + " " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + " " + player2;


//FUnction to make the question

//TWO CONDITIONS
//1- That if already the req items r there, then u can't put
//after you answer correctly, the elements should get deletd.
function startQuestion(){
    
    var input1 = document.getElementById("answer1").value;
    var input2 = document.getElementById("answer2").value;
    var answer = input1 * input2;
    console.log(answer);
    var question = document.createElement("H2");
    question.innerHTML = input1 + " x " + input2 + " = ? "
    question.style.color = "black";
    document.getElementById("output").appendChild(question);
    var breakLine = document.createElement("BR");
    document.getElementById("output").appendChild(breakLine);
    var inputForAns = document.createElement("INPUT");
    inputForAns.type = "number";
    inputForAns.placeholder = "Answer";
    
    document.getElementById("output").appendChild(inputForAns);
    
    document.getElementById("output").appendChild(breakLine);
    var buttonForCheck = document.createElement("BUTTON");
    buttonForCheck.innerHTML = "Check your Answer";
    buttonForCheck.className = "btn";
    buttonForCheck.style.backgroundColor = "#fbc142";
    buttonForCheck.style.color = "white";
    
    document.getElementById("output").appendChild(buttonForCheck);
    buttonForCheck.addEventListener("click",function(){
        question.remove();
        breakLine.remove();
        inputForAns.remove();
        buttonForCheck.remove();
    })


}