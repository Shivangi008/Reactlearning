let dateObject1 = new Date();
console.log("Date is: " + dateObject1.getSeconds());

let dateObject2 = new Date(); 
console.log("Date is: " + dateObject2.getDate()); 
console.log("Day is: " + dateObject2.getDay()); 
console.log("Year is: " + dateObject2.getYear()); 
console.log("Horrs: " + dateObject2.getHours()); 
console.log("Month is: " + dateObject2.getMonth()); 
console.log("Time is: " + dateObject2.getTime()); 
console.log("Millisecond: " + dateObject2.getMilliseconds()); 

let dateObject3 = new Date(); 
dateObject3.setDate(8); 
dateObject3.setYear(1999); 
dateObject3.setHours(23); 
dateObject3.setMonth(11); 
dateObject3.setMilliseconds(2000); 
 
console.log("Date is: " + dateObject3.getDate()); 
console.log("Year is: " + dateObject3.getYear()); 
console.log("Hours: " + dateObject3.getHours()); 
console.log("Month is: " + dateObject3.getMonth()); 
console.log("Millisecond: " + dateObject3.getMilliseconds()); 