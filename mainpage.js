let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr=["Java","Python","C C++","JavaScript"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectSringArr = selectString.split("");

    return selectSringArr;

}

function rsetTyping(){
    target.textContent="";
    dynamic(randomString());
}


function dynamic(radomArr){
    if(radomArr.length>0){
        target.textContent+=radomArr.shift();
        setTimeout(function(){
            dynamic(radomArr);
        },80);
    }
    else{
        setTimeout(rsetTyping,3000);
    }
}


dynamic(randomString());


function blink(){
    target.classList.toggle("active");
}

setInterval(blink,500);