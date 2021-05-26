'use strict';




let userName = prompt('What is your name?');

alert(`Welcome to my personal blog ${userName}. I wish you a fun tour!`);

let score=0;



function question1()

{let football = prompt('Do I enjoy playing and watching football matches?');

  switch (football.toLowerCase()){
  case 'yes':
  case 'y':
    score++;
    //console.log('You are right, I like football');
    alert ('You are right, I like football');

    break;

  case 'no':
  case 'n':

    //console.log('You are worng, I do like football');
    alert('You are worng, I do like football');
    break;

  default:
  //console.log('Please, specify your answer to yes/y or no/n');
    alert ('Please, specify your answer to yes/y or no/n');
  }
}
question1();



function question2(){
  let travel = prompt('Do you think that I like travelling?');

  switch(travel.toLowerCase()){

  case 'yes':
  case 'y':
    score++;
    //console.log('Yes I do, you seem that you read my introduction in the website');
    alert('Yes I do, you seem that you read my introduction in the website');

    break;

  case 'no':
  case 'n':

    //console.log('You seem that you did not read my introduction -.-');
    alert('You seem that you did not read my introduction -.-');

    break;

  default:

    // console.log ('Please, specify your answer to yes/y or no/n');
    alert ('Please, specify your answer to yes/y or no/n');
  }
}
question2();




function question3(){
  let major= prompt('Do you think that I am a doctor?');

  switch (major.toUpperCase()){

  case 'YES':
  case 'Y':

    //   console.log('Wrong!!');
    alert ('Wrong!!');

    break;

  case 'NO':
  case 'N':
    score++;
    //   console.log('Engineer!, who else changing careers always!');
    alert ('Engineer!, who else changing careers always!');
    break;

  default:
  //console.log('Please, specify your answer to YES/Y or NO/N');
    alert ('Please, specify your answer to YES/Y or NO/N');
  }
}
question3();




function question4(){
  let fourSeasons=prompt('Do you think I am a summer person?');

  switch(fourSeasons.toUpperCase()){

  case 'YES':
  case 'Y':
    score++;
    //   console.log('You are right!!');
    alert ('You are right!!');

    break;

  case 'NO':
  case 'N':

    //   console.log('WRONG!!');
    alert ('WRONG!!');
    break;

  default:

    //console.log('Please, specify your answer to YES/Y or NO/N');
    alert ('Please, specify your answer to YES/Y or NO/N');
  }
}
question4();




function question5(){
  let introvert= prompt('Do you think that I am introvert?');

  switch (introvert.toUpperCase()){

  case 'YES':
  case 'Y':
    score++;
    //   console.log('Got me!');
    alert ('Got me!');

    break;

  case 'NO':
  case 'N':

    //   console.log('WRONG!!!...I\'m a developer to be!');
    alert ('WRONG!!!...I\'m a developer to be!');
    break;

  default:

    //console.log('Please, specify your answer to YES/Y or NO/N');
    alert ('Please, specify your answer to YES/Y or NO/N');
  }
}
question5();


function question6(){
  for(let i=0; i<4; i++){

    let guessNumber= prompt('How old am I?');

    if (guessNumber==='28'){
      alert('Your answer is right, well done!');
      score++;
      break;

    } else if(guessNumber>28){
      alert('Too high,try again!');
    }

    else if(guessNumber<28){
      alert('Too low, try again!');
    } let correctAnswer= ('The correct answer is 12');
    if(i===3){
      alert(correctAnswer);
    }
  }
}
question6();





function question7(){

  outerLoop: for(let i=0; i<6; i++){

    let capitalCity= ['tokyo', 'casablanca', 'moscow', 'amesterdam'];
    let favCity= prompt('What is my favorite capital city?');

    if(i===5){
      alert(`My favorite capital cities are: ${capitalCity}`);
    }

    for(let j=0; j<capitalCity.length;j++){

      if (favCity===capitalCity[j]){
        alert(`You are right!! my favorite capital cities are ${capitalCity}`);
        score++;
        break outerLoop;
      }else if (favCity!==capitalCity[j]){
        continue;
      }
    }
  }
}
question7();


alert (`Your score is ${score} out of 7`);
alert (`Thank you for answer those silly questions ${userName} I appreciate your time, and welcome to my personal blog`);
