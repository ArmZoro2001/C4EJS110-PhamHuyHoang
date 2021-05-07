
function findOppositeNumber(number1,number2){
    if(number2 > number1/2){
        console.log(number2-number1/2);
    }
    if(number2 < number1/2){
        console.log(number2+number1/2);
    }
    if(number2 == number1/2){
        console.log("0");
    }

}
// findOppositeNumber(10,6);
function merge2String(string1, string2){
    if(string1 == null) {
        console.log(string2);
    }
    else if(string2 == null){
        console.log(string1);
    }
    else{
        let mergeString = "";
        let lengthFor = string1.length < string2.length ? string1.length : string2.length;
        for(let i=0; i < lengthFor; ++i){
            mergeString += string1[i] + string2[i];
        }
        if(lengthFor == string1.length) {
            for(let i=lengthFor; i< string2.length; ++i){
                mergeString += string2[i];
            }
        }
        else{
            for(let i=lengthFor; i< string1.length; ++i){
                mergeString += string1[i];
            }
        }
        console.log(mergeString);
    }
}

// merge2String("abc", "123");
// merge2String("abc", "0123");
// merge2String("abcd", "123");
// merge2String("", "123");
// merge2String("abc", "");

let numberLucky = Math.floor(Math.random() * 10) + 1;
let count = 3;
let txt = document.getElementById("input");
let btn = document.getElementById("button");
btn.addEventListener('click', clickPlay)
function clickPlay(){
if (txt.value < 1 || txt.value > 10){
    alert(`Con số dự đoán phải nằm trong khoảng từ 1 đến 10!`);
    txt.value = "";
}
else{
    count--;
    let result = "";
    if(count == 0){
        alert(`Bạn đã hết lượt dự đoán!`);
        txt.value = "";
    }
    else if(txt.value == numberLucky) {
        result += "Chúc mừng bạn đã chọn đúng số!";
    }
        
    else{
        result += `Rất tiếc! Bạn đã chọn sai số đã dự đoán!\nBạn còn ${count} lượt đoán!\nChúc bạn may mắn!`;
    }
    txt.value = "";
    alert(result);
}
}
   