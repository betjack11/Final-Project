var score = 0;

function getScore(){
  if($(".question1.correct").attr("checked") == "checked"){
    score++;
  }
  if($(".question2.correct").attr("checked") == "checked"){
    score++;
  }
  if($(".question3.correct").attr("checked") == "checked"){
    score++;
  }
  if($(".question4.correct").attr("checked") == "checked"){
    score++;
  }
  if($(".question5.correct").attr("checked") == "checked"){
    score++;
  }
  printScore();
}

function printScore(){
  var para = document.createElement("P");
  var current_score = document.createTextNode("Score : " + score);
  para.appendChild(current_score);
  document.getElementById("questions").appendChild(para);
}
