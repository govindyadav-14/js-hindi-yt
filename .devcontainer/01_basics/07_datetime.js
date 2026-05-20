let date=new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString())
// console.log(date.toLocaleDateString());
// console.log(date.toDateString);
// console.log(typeof date);
let createddate=new Date(2026,0,6);
// console.log(createddate.toDateString());
// console.log(createddate.toLocaleString())
// console.log(date.getTime()) //in mili sec
createddate.toLocaleString('default',{
month:"long" ,

})
console.log(createddate)
