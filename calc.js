function calc(){
    try{
    var no1=document.getElementById("no1").value;
    no1 = no1.replaceAll("×","*");
    no1 = no1.replaceAll("÷","/")
    var result = eval(no1);
    var history = JSON.parse(localStorage.getItem("history")) || [];

        history.push(no1 + " = " + result);

        localStorage.setItem("history", JSON.stringify(history));
    document.getElementById("no1").value = result;
    document.getElementById("result").textContent = "";
    }
      catch{
document.getElementById("no1").value = "Error";
    }
}
function calcWrite(txt) {
    let input = document.getElementById("no1");

    input.value += txt;

    showResult();
}

function showResult() {
    let expression = document.getElementById("no1").value;
    let result = document.getElementById("result");

    // Hali + - × ÷ yozilmagan bo'lsa, pastni bo'sh qoldir
    if (!/[+\-×÷]/.test(expression)) {
        result.textContent = "";
        return;
    }

    // Oxirida amal bo'lsa
    if (/[+\-×÷]$/.test(expression)) {
        expression = expression.slice(0, -1);
    }

    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("÷", "/");

    try {
        result.textContent = eval(expression);
    } catch {
        result.textContent = "";
    }
}
function clearInput() {
    document.getElementById("no1").value = "";
    document.getElementById("result").innerText = "";
}
function deleteOne() {
    let input = document.getElementById("no1");

    input.value = input.value.slice(0, -1);
    showResult();
}
document.addEventListener("keydown", function(event){

    if(event.key >= "0" && event.key <= "9"){
        event.preventDefault();
        calcWrite(event.key);
    }

    if(
        event.key=="+" ||
        event.key=="-" ||
        event.key=="*" ||
        event.key=="/" ||
        event.key=="."
    ){
        event.preventDefault();
        calcWrite(event.key);
    }

    if(event.key=="Enter"){
        event.preventDefault();
        calc();
    }
    
    if(event.key=="Backspace"){
        event.preventDefault();
        deleteOne();
    }

    if(event.key=="Escape"){
        event.preventDefault();
        clearInput();
    }

});
document.getElementById("no1").focus();