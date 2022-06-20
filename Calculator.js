let displayxyz = document.getElementById("display");
let displayans = document.getElementById("displayans");
let buttonsxyz = document.getElementsByClassName("btn");

function isOpxyz(opxyz){
    if (opxyz==="+" || opxyz==="-" || opxyz==="*" || opxyz==="/" || opxyz==="."){
        return true;
    }
    return false;
}

function clickingxyz(clickedxyz){
    if(displayxyz.innerText===""){
        if(clickedxyz==="."){
            displayxyz.innerText='0'+clickedxyz;
        }else if(clickedxyz!='0' && !isOpxyz(clickedxyz)){
            displayxyz.innerText=displayxyz.innerText+clickedxyz;
        }
    } else{
        //checking no 2 oprators come together
        if(isOpxyz(clickedxyz) && isOpxyz(displayxyz.innerText[displayxyz.innerText.length-1])){
            displayxyz.innerText=displayxyz.innerText.slice(0,-1);
        }
        displayxyz.innerText=displayxyz.innerText+clickedxyz;
    }
}

function evalxyz(){
    try{
        displayans.innerText=eval(displayxyz.innerText);
    } catch{
        displayans.innerText="Error";
    }
}

function clearxyz(){
    displayxyz.innerText="";
    displayans.innerText="";
}

function backxyz(){
    displayxyz.innerText=displayxyz.innerText.slice(0,-1);
    displayans.innerText="";
}