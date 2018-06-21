let day = 'Tuesday';
let alarm;


let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm:'No alarms needed',
  weekAlarm:'Alarm set to 7AM'
};
 if(day==='Saturday'|| day==='Sunday'){
   alarm = 'weekendAlarm';
   
 }else {
   alarm = 'weekAlarm';
 }
console.log(person[alarm]);






