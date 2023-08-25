player1=localStorage.getItem("namePlayer1");
player2=localStorage.getItem("namePlayer2");
player1s=0;
player2s=0;
question_turn="player_1";
answer_turn="player_2";
document.getElementById("player1_name").innerHTML=player1+": ";
document.getElementById("player2_name").innerHTML=player2+": ";
document.getElementById("player1_score").innerHTML=player1s;
document.getElementById("player2_score").innerHTML=player2s;
document.getElementById("player_question").innerHTML="Turno da pergunta- "+player1;
document.getElementById("player_answer").innerHTML="Turno da resposta- "+player2;
function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Resposta: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

function check() {
    get_answer=document.getElementById("input_check_box").value;
    if (answer_turn=="player1") {
        player1s=player1s+1;
        document.getElementById("player1_score").innerHTML=player1s;
    }
    else {
        player2s=player2s+1;
        document.getElementById("player2_score").innerHTML=player2s;
    }
    if(question_turn=="player2") {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Turno de pergunta: "+player1;
    }
    else {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Turno de pergunta: "+player2;
    }
    if(answer_turn=="player1") {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Turno de resposta: "+player2;
    }
    else {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Turno de resposta: "+player1;
    }
}