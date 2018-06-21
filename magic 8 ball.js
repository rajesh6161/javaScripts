let userName='Rajesh';
userName? console.log(`Hello, ${userName}`) : console.log('Hello!');
const userQuestion = 'Will I become a warewolf tonight?';
console.log(`The user asked: ${userQuestion}`);
const number = Math.floor(Math.random()*8);
let eightBall = '';
switch (number) {
  case 0:
    eightBall = 'Nothing here'; 
    break;
  case 1:
    eightBall = 'You cannot become a warewolf';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
     eightBall = 'No way';
    break;
  case 4:
     eightBall = 'Cannot predict now';
    break;
  case 5:
     eightBall = 'Do count on it';
    break;
  case 6:
     eightBall = 'My sources say no';
  break;  
  case 7:
     eightBall = 'Outlook not so good';
    break;
  case 8:
     eightBall = 'Signs point to yes';
    console.log(`The eight ball answered:${eightBall}`);
    
    
}
