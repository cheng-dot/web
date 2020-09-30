var target = document.getElementById("");
target.onclick = function(){
    var leftValue = document.getElementsByClassName("box").style.left;
    leftValue = leftValue.replace("px","");
    leftValue = Number(leftValue) + 5;
    document.getElementById("box1").style.left = leftValue + "px"; 
}