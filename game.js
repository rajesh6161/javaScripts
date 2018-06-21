const value = (int1, int2)=>{
 if (int1>int2){
     console.log(int1 + 'is greater than' + int2);
 }else{
     console.log(int2 + " " + 'is greater than' + " " + int1);
 };
}
value(5, 27);

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
    default:
         day = "unknown";
}
console.log(day);