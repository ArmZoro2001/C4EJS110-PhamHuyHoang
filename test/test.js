function btn(){
    let luckyn = Math.floor(Math.random() * 11);
    let txt = document.getElementById('input').value; 
    if( txt == luckyn){
        alert('Bạn đoán đúng rồi')       
    }
    else {
        alert('Bạn đoán sai rồi')
        alert(luckyn)
    }
}
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
findOppositeNumber(10,6);
function merge2String(string1, string2){
    
}