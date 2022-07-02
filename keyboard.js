const textArray = [];

function init(){
    let keys = document.querySelectorAll(".key");
    console.log(keys);
    keys.forEach(element => {
        element.addEventListener("click",actionPerformed);
    });
}

function actionPerformed(evento){
    let keyPressed = evento.target.innerText;
    switch(keyPressed){
        case "Mayus":
            toggleCase();
            break;
        case "Espacio":
            insertSpace();
            break;
        case "<--":
            deleteLastCharacter();
            break;
        default:
            insertAlphanumeric(keyPressed);
    }
}

function toggleCase(){
    let keys = document.querySelectorAll(".key");
    keys.forEach(element => {
        if((element.innerText!="Mayus")&&(element.innerText!="Espacio")){
            if(element.innerText == element.innerText.toUpperCase()){
                element.innerText = element.innerText.toLowerCase();
            }else{
                element.innerText = element.innerText.toUpperCase();
            }
        } 
    });
}

function insertSpace(){
    textArray.push("&nbsp");
    showText();
}

function deleteLastCharacter(){
    textArray.pop();
    showText();
}

function insertAlphanumeric(key){
    textArray.push(key);
    showText();
}

function showText(){
    let text = "";
    for(let i = 0; i < textArray.length; i++){
        text += textArray[i];
    }
    document.getElementById("jTextArea1").innerHTML = text;
}

init();