function scuberGreetingForFeet(rideHeight){
  // Write your code here!
  if(rideHeight <= 400){
    return 'This one is on me!';
  } 
  else if(rideHeight > 2500){
    return 'No can do.';
  }
  else if(rideHeight > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
  
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city === 'NYC'){
    return 'Ok, sounds good.';
  }
  else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(isGenerous){
  if(isGenerous === 'generous'){
    return 'Thank you so much.';
  }
  else if(isGenerous === 'not as generous'){
    return 'Thank you.';
  }
  else {
    return 'Bye.';
  }
}