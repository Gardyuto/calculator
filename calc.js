const screen = document.querySelector(".screen")
const nam_1 =document.querySelector(".nam_1")
const nam_2 =document.querySelector(".nam_2")
const nam_3 =document.querySelector(".nam_3")
const nam_4 =document.querySelector(".nam_4")
const nam_5 =document.querySelector(".nam_5")
const nam_6 =document.querySelector(".nam_6")
const nam_7 =document.querySelector(".nam_7")
const nam_8 =document.querySelector(".nam_8")
const nam_9 =document.querySelector(".nam_9")
const nam_0 =document.querySelector(".nam_0")
const nam_division =document.querySelector(".nam_division")
const nam_x =document.querySelector(".nam_x")
const nam_equals = document.querySelector(".nam_equals")
const nam_plus = document.querySelector(".nam_plus")
const nam_minus = document.querySelector(".nam_minus")

let one = 0;
let two = 0;
let znakS = '';  // '' -  '/' '-' '+' '*'

function fun_1(){ screen.innerHTML += nam_1.textContent }
function fun_2(){ screen.innerHTML += nam_2.textContent }
function fun_3(){ screen.innerHTML += nam_3.textContent }
function fun_4(){ screen.innerHTML += nam_4.textContent }
function fun_5(){ screen.innerHTML += nam_5.textContent }
function fun_6(){ screen.innerHTML += nam_6.textContent }
function fun_7(){ screen.innerHTML += nam_7.textContent }
function fun_8(){ screen.innerHTML += nam_8.textContent }
function fun_9(){ screen.innerHTML += nam_9.textContent }
function fun_0(){ screen.innerHTML += nam_0.textContent }
//--------------------------
'808'
'' !== ''    //false
'' === ''  //true
'/' !== '' // true
'*' !== '' // true
'-' !== '' // true

function fun_division() {
    if(isNaN(+screen.innerHTML[screen.innerHTML.length - 1]) || screen.innerHTML.length === 0 || znakS !== '' ) return;
    one = +screen.innerHTML;
    znakS =  nam_division.textContent;
    screen.innerHTML = ''

}

function fun_x() {
    if(isNaN(+screen.innerHTML[screen.innerHTML.length - 1]) || screen.innerHTML.length === 0  || znakS !== '') return;
    one = +screen.innerHTML;
    znakS =  nam_x.textContent;
    screen.innerHTML = ''
}

function fun_plus() {
    if(isNaN(+screen.innerHTML[screen.innerHTML.length - 1]) || screen.innerHTML.length === 0  || znakS !== '') return;
    one = +screen.innerHTML;
    znakS =  nam_plus.textContent;
    screen.innerHTML = ''
}

function fun_minus() {
    if(isNaN(+screen.innerHTML[screen.innerHTML.length - 1]) || screen.innerHTML.length === 0  || znakS !== '') return;
    one = +screen.innerHTML;
    znakS =  nam_minus.textContent;
    screen.innerHTML = ''
}

let a

function fun_nam_equals(){
    two = +screen.innerHTML;
    let res = 0
    if(znakS === "/"){
       res = one / two;
    }
    if(znakS === "x"){
       res = one * two;
    }
    if(znakS === "+"){
        res = one + two;
     }
     if(znakS === "-"){
        res = one - two;
     }
        // switch 

    // console.log(one);
    // console.log(znakS);
    // console.log(two); //2




    screen.innerHTML = res;
}
// '/'    /
// let r = 12 + '/' + 3; 
// screen.innerHTML += nam_equals.textContent;}

//  '1' + 2

nam_1.onclick = fun_1
nam_2.onclick = fun_2
nam_3.onclick = fun_3
nam_4.onclick = fun_4
nam_5.onclick = fun_5
nam_6.onclick = fun_6
nam_7.onclick = fun_7
nam_8.onclick = fun_8
nam_9.onclick = fun_9
nam_0.onclick = fun_0
// -------------------
nam_division.onclick = fun_division
nam_x.onclick = fun_x
nam_equals.onclick = fun_nam_equals
nam_plus.onclick = fun_plus
nam_minus.onclick = fun_minus


let znak = '0'  

'+';'/';'-';'*'
'1','2','3','4'





