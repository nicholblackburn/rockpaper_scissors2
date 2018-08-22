var buttons = document.getElementsByClassName('selection')

for (var i = 0; i < buttons.length; i++){
  buttons [i].addEventListener('click', function(e) {
  var youChose = e.target.id 
  var computerChoice = compPlay();
  console.log (computerChoice)
  var evaluate = compare(youChose,computerChoice);
  console.log (computerChoice)
  console.log (evaluate)
  })
}

function compPlay(){
 var computerChoice = Math.random();
if (computerChoice <0.34){
  computerChoice = "rock";
}else if(computerChoice >=0.67){
  computerChoice = "paper"
}
else{
  computerChoice = "scissors";
  }
}

function compare(youChose,computerChoice){
  if(youChose===computerChoice){
    console.log("its a tie")
    return "It's a tie!";
  }
  if(youChose==="rock"){
    if(computerChoice==="scissors")
    return "rock wins!";
  }
  else{
    return "scissors wins!";
  }

if (youChose==="paper"){
   if(computerChoice==="rock")
  return "paper wins!";
}
  else{
    return "rock wins!";
  }
if (youChose==="scissors"){
  if(computerChoice==="rock"){
    return "rock wins!";
  }
  else{
    return "scissors wins!"
  }
  }
};

function gamePlay(){
  
}
