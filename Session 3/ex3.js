//Bài tập về nhà 
//ex1
// c1
//     let a = 5;
//     let b = 6;
//     [a, b] = [b, a];
//     console.log(a,b);
// // //c2
//     let a = 5;
//     let b = 6;
//     let temp;
//     temp = a;
//     a = b;
//     b = temp;
//     console.log(a,b);
//ex2
    // const s = 'Hello beauty there';
    // const a = s.split(' ');
    // console.log(a);
//ex3
// const a = [4, 5, 7, -8];
// console.log(...a);
//ex4
// let item =['Jeans', 'T-shirt', 'Socks']
// do{
//     let a = prompt('Hi there, welcome to shop admin panel, what do you want(C,R,U,D)')
//     if ( a == " "){
//         break;
//     }
//     else if (a == 'r'||a=='R'){
//         console.log('The current items are.')
//         for(let i in item){
//             console.log(`${Number(i)+1}. ${item[i]}` )
//         }
//     }
//     else if(a=='c'|| a=='C' ){
//         item.push = prompt ('Enter your name of the newitem ')
//         alert('Done')
//         //console.log(iteam)
//     }
//     else if(a=='u'|| a=='U'){
//         let update = Number(prompt('Enter the position you want to update'));
//         //let newName =  prompt("Enter the new name");
//         items[update-1] = prompt('Enter the new name');
//         alert('Done')
//         //console.log(items);
//     }

//     else if (a == 'd' || a == 'D'){
//         let del = Number(prompt('Enter the position you want to delete'));
//         items.splice(del-1,1);
//         alert("Done");
//         //console.log(items);
//     }
//     else{
//         alert('This command is not supported');
//     }
    
// }while(1)
//ex5

// let n = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) để tính tổng dãy số đó');
// let a = n.split(",");
// let sum = 0;
    
// for(i=0;i<a.length;i++)
//     {
//         a[i] = Number(a[i]);
//         sum +=a[i];   
//     }
// console.log(`Tổng của dãy số đó là ${sum}`);
//ex6
// let n = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) để tính tổng dãy số đó');
// let a = n.split(",");
// let min =Math.min.apply(Math,a);
// console.log('the smalest Number in ' + min);
//ex7
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let n = Number(prompt('Nhập số cần tìm là :'))
// let index = arr.indexOf(n);
// if(index == -1){
//     alert(`${n} is Not found in my array`)
// }
// else{
//     alert(`${n} is found in my array`)
// }
//ex8
// let size = [5,7,300,90,24,50,75];
// console.log('Kích thước của đàn cừu là :')
// let a = size.join(' ');
// console.log(a);
// let max = Math.max.apply(Math,size);
// console.log(`${max} là kích thước lớn nhất của đàn cừu`)
// let index = size.indexOf(Math.max.apply(Math,size));
// size[index] = 8;
// console.log('Size sau khi cắt lông');
// console.log(size.join(' '));
// let month = prompt('Nhập vào số tháng ')
// for( let m = 1; m <=month; m++ ){
//     console.log('Month' + m)
//     if(m!=month){
//         console.log('Sau một tháng, size tăng thêm là ')
//         for(let i in size){
//             size[i]+=50;
//         }
//         console.log(size.join(' '))
//         let max = Math.max.apply(Math,size);
//         console.log(`${max} là kích thước lớn nhất của đàn cừu`)
//         let index = size.indexOf(Math.max.apply(Math,size));
//         size[index] = 8;
//         console.log('Size sau khi cắt lông ');
//         console.log(size.join(' '));
//     }
//     else{
//         console.log('Sau một tháng, size tăng thêm là ')
//         for(let i in size){
//             size[i]+=50;
//         }
//         console.log(size.join(' '))
        
//     }

// }
// let sum =0;
// for(let x=0;x<size.length;x++)
//     {
//         size[x] = Number(size[x]);
//         sum +=size[x];   
//     }
// console.log('Tổng số size sau ' + month +' là :'+ sum)
// console.log('Tôi nhận được ' + sum + ' * 2 = ' + sum*2)


