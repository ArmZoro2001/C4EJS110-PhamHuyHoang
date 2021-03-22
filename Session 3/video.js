//Bài tập video 
// //ex1
// let tenPhim = ['once piece', 'naruto', 'black clover'];
// //ex2
// tenPhim.push('HỒi ức');
// console.log(tenPhim);
//ex3
// let i = prompt('Nhập vị trí muốn tìm ')
// console.log(tenPhim[i]);
//ex4
// let newMovie = prompt('Nhập tên phim :')
// tenPhim[0]= newMovie;
// console.log(tenPhim[0]); 

// let i = prompt('Nhập vị trí i ')
// let newMovie = prompt('Nhập tên phim :')
// tenPhim[i]=newMovie;
// console.log(tenPhim)
//ex5
// let i = prompt('Nhập vị trí i ')
// tenPhim.splice(i,1)
// let i = prompt('Nhập vị trí i ')
// let n = prompt('Nhập số phần tử cần xoá ')
// tenPhim.splice(i,n)
// ex6
// console.log(tenPhim)
// for(let i =0; i<tenPhim.length/2; i++)
// {
//     console.log(tenPhim[i]);
// }
// for(let x in tenPhim){
//         console.log(`${Number(x)+1}. ${tenPhim[x]}` )
//     }
// //ex7
// for(let i in tenPhim){
//     tenPhim[i] = tenPhim[i].toLowerCase();
// }
// console.log(tenPhim)
//ex8
// let yourName = prompt("Nhập tên người dùng ")
// if(yourName.length<=15){
//     alert('Good username')
// }
// else{
//     alert('Your user name is too long')
// }
//ex9
let choose = prompt ('How many legs does a spider have?\n1. None\n2. 4 legs\n3. 8 legs\n4. 12legs ')
do{
if(choose == 1 || choose == 2 || choose == 4){
    alert('Good luck next time')
}
else if(choose == 3){
    alert('Bravo, you are correct')
}
else{
    alert('Invalide choice, the answer must be 1, 2, 3 or 4')
}
}while(true);