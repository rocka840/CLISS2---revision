let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

function butterADD() {
    let text1 = document.getElementById("text1");
    count1 = count1 + 1;
    text1.innerHTML = "butter x" + count1;
}

function flourADD() {
    let text2 = document.getElementById("text2");
    count2 = count2 + 1;
    text2.innerHTML = "flour x" + count2;
}

function pepperADD() {
    let text3 = document.getElementById("text3");
    count3 = count3 + 1;
    text3.innerHTML = "pepper x" + count3;
}

function saltADD() {
    let text4 = document.getElementById("text4");
    count4 = count4 + 1;
    text4.innerHTML = "salt x" + count4;
}

function sugarADD() {
    let text5 = document.getElementById("text5");
    count5 = count5 + 1;
    text5.innerHTML = "sugar x" + count5;
}

function reset() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("text4").innerHTML = "";
    document.getElementById("text5").innerHTML = "";

    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
}