function isCorrect(){
  if($(".correct").attr("checked") == "checked"){
    var para = document.createElement("P");
    var answer = document.createTextNode("That was the correct choice");
    para.appendChild(answer);
    document.body.appendChild(para);
  }
}
