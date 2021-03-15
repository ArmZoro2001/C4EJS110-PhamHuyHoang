//Ex1
console.log('a, what are var and const in the JavaScript');
console.log('var và const là kiểu biến dùng để phục vụ kiểu khai báo biến ');
console.log('b, what are differences let and const');
console.log('const giống như let, chỉ khác giá trị của biến sẽ không thể thay đổi');
console.log('c, what are differences let and var');
console.log('var là một biến toàn cục nên ta có thể truy xuất ở bất cứ đâu ');
console,log('let là ta có thể truy cập các biến trong một hàm nhất định')
//Ex2
console,log(' Boolean là là một kiểu dữ liệu có một trong hai giá trị có thể (thường được kí hiệu là đúng (true) và sai (false)), nhằm đại diện cho hai giá trị thật (truth value) của logic và đại số Boolean');
//Ex3a

for(let x = 0; x<7; x ++ )
{
    console.log(x);
}
//Ex3b
let n = Number (prompt('Nhập N :'));
for ( let x =0; x<n; x++)
{
    console.log(x);
    
}
//Ex3c
let n = Number (prompt('Nhập N :'));
if(n<3){
    console.log('C4EJS110')
}
else{
    for ( let x =3; x<n; x++)
    {
        console.log(x);
        
    }
}
//Ex3d
let n = Number (prompt('Nhập N :'));
let c = Number (prompt('Nhập C :'));
for( c; c < n; c++){
    console.log(c);
}
//Ex3e
let n = Number (prompt('Nhập N :'));
let c = Number (prompt('Nhập C :'));
for( c; c < n; c+=3){
    console.log(c);
}
//ex3f
let n = Number (prompt('Nhập N :'));
let c = Number (prompt('Nhập C :'));
let s = Number (prompt('Nhập S :'));
for(let x = c; c < n; x+=s){
    console.log(x);
}
//ex4
let n = Number (prompt('Nhập N :'));
let giaithua = 1;
for ( let x =1; x<=n; x++)
{
    giaithua = giaithua * x ;
}
console.log(giaithua)
//ex5
let age = prompt ();
if (age < 14 ){
    console.log('Bạn không đủ tuổi ')
}
else {
    console.log('Bạn đủ tuổi')
}
//ex6
let x = Number (prompt('Nhập X :'))
if(x < 4){
    console.log('lower half of 9')
}
else if(x = 4){
    console.log('half')
}
else if(4 < x && x < 10)
{
    console.log('higher half of 9')
}
else{
    console.log('Ngoài phạm vi đề bài')
}
//ex7
let x = Number (prompt('Nhập X :'));
let n = Number (prompt('Nhập N :'));
n=n/2;
if(x<n){
    console.log(x+'lower half of '+n)
}

else 
{
    console.log(x+'higher half of '+ n)
}
//ex8
let n = Number (prompt('Nhập N :'));
if(n%2==0){
    console.log('N là số chẵn')
}
else{
    console.log('N là số lẻ')
}
//ex9a
let x = 6;
let l;
let h;
for(l=0;l<x/2;l++)
{
        console.log('L');
}
for(h=0;h<x-l;h++)
{
        console.log('H');
}
//ex9b
let x = Number(prompt('Nhập X ='));
let l;
let h;
for(l=0;l<x/2;l++)
{
    console.log('L');
}
for(h=0;h<x-l;h++)
{
    console.log('H');
}
//ex9c
for(let i = 1; i<= 8; i++)
    {
        console.log(0);
        console.log(1);
    }
//ex9d
let x = prompt('nhập x =')
for(let i =1; i<= x; i++)
    {
        console.log(0);
        console.log(1);
    }
//ex10
let weigth = Number(prompt('Nhập cân nặng của bạn ( kg )='));
let height = Number(prompt('Nhập chiều cao của bạn ( cm )='));
height = height/100;
let bmi = weigth / (height*height);
if(bmi<16)
{
    alert('Suy dinh dưỡng');
}
else if(bmi <= 18.5)
{
    alert('Thiếu cân');
}
else if( bmi > 18.5 && bmi < 25)
{
    alert('Bình thường');
}
else if( bmi < 30)
{
    alert('Thừa cân');
}
else
{
    alert('Béo phì');
}
