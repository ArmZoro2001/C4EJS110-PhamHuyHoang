// let person =['Nam',19, 'Hà Nội', 25, false]
// // console.log(person)

// let person ={};
// console.log(person)

// let person = {
//     name: 'Nam'
// };
// console.log(person)

// let person = {
//     name: 'Nam',
//     age: 19,
// };
// console.log(person);
// console.log(person.age);
// let prop = 'age';
// console.log(person['name']);
// person.age++;
//vieo1
var  movie = {
    title : 'The dark night rises',
    year: 2012,
    rate : '8,4',
}
console.log(movie)
// //video 2
// //2.1 Log all of 3 the properties of the movie object to the console using 2 different ways
// var{title, year, rate} = movie;
// console.log(title);
// console.log(year);
// console.log(rate);
// for(let x in movie){
//     console.log(x)
// }
// //2.2 Log an non-existent property of the movie, director, what is the result?
// console.log('in ra kết quả là undefined')

//video 3
//3.1
// movie.rate='8,7';
//3.2
// let update = prompt("what your want to update")
// if (update.toLowerCase()==title)
// {
//     let newTitle = prompt('New title')
//     console.log(movie.newTitle)
//     console.log(movie)
// }
// else if(update.toLowerCase()==rate){
//     let newRate = prompt('new rate')
//     console.log(movie.newRate)
//     console.log(movie)
// }
// else if (update.toLowerCase()==year){
//     let newYear = prompt(' new year')
//     console.log(movie.year)
//     console.log(movie)
// }
// //video 4
// else{
//     alert(`${update} does not exist in our data, we will add new`)
//     let neww = prompt ('Enter the new data')
//     movie.update= neww;
// }