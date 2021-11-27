player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
player1score=0
player2score=0
document.getElementById("player1name").innerHTML=player1name+":"
document.getElementById("player2name").innerHTML=player2name+":"
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playerquestion").innerHTML="questionturn-"+ player1name
document.getElementById("playeranswer").innerHTML="answerturn-"+ player2name
function send(){
getword=document.getElementById("word").value
word=getword.toLowerCase()
charAt1=word.charAt(1)
charAt2=word.charAt(3)
charAt3=word.charAt(5)
removecharAt1=word.replace(charAt1,"_")
removecharAt2=removecharAt1.replace(charAt2,"_")
removecharAt3=removecharAt2.replace(charAt3,"_")
questionword="<h4 id = 'worddisplay'> q. " + removecharAt3+"</h4>"
inputbox="<br> answer:<input type='text'id='inputcheckbox'>"
checkbutton="<br> <br> <button class = 'btn btn-info' onclick='check()'> Check </button>"
row=questionword+inputbox+checkbutton
document.getElementById("output").innerHTML=row
document.getElementById("word").value=""
}
questionturn="player1"
answerturn="player2"
function check(){
getanswer=document.getElementById("inputcheckbox").value
answer=getanswer.toLowerCase()
if(answer==word){
if(answerturn=="player1"){
    player1score=player1score+1
    document.getElementById("player1score").innerHTML=player1score
}
else{
    player2score=player2score+1
    document.getElementById("player2score").innerHTML=player2score
}
}
if(questionturn=="player1"){
    questionturn="player2"
    document.getElementById("playerquestion").innerHTML="questionturn-"+player2name
}
else{
    questionturn="player1"
    document.getElementById("playerquestion").innerHTML="questionturn-"+player1name  
}
if(answerturn=="player1"){
  answerturn="player2"
    document.getElementById("playeranswer").innerHTML="answerturn-"+player2name
}
else{
    answerturn="player1"
    document.getElementById("playeranswer").innerHTML="answerturn-"+player1name  
}
document.getElementById("output").innerHTML=""
}