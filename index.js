const container = document.getElementById('container');
const box = document.getElementById('box');
const Select = document.getElementById('Select');
const player = document.getElementById('player');
const Computerchoose = document.getElementById('Computerchoose');
const Playerchoose = document.getElementById('Playerchoose');
const result = document.getElementById('result');
let userchoice;
let Alchoice;
let Ans;

const PossibleChoice = document.querySelectorAll('button')
PossibleChoice.forEach(PossibleChoice => PossibleChoice.addEventListener('click',(e)=>{
      userchoice = e.target.id;
      Playerchoose.innerHTML = userchoice
      generateComputrChoice()
      getResult()

}))

function generateComputrChoice(){
      const RandomNumber = Math.floor(Math.random() * 3) + 1;
      if(RandomNumber === 1){
            Alchoice = 'Rock';
      }
      if(RandomNumber === 2){
            Alchoice = 'Scissor';
      }
      if(RandomNumber === 3){
            Alchoice = 'Paper';
      }
      Computerchoose.innerHTML = Alchoice;
}

function getResult(){
      if(Computerchoose === userchoice){
            Ans ="It's a draw";
      }

     
      if(Computerchoose === "Rock " && userchoice === "Paper"){
            Ans = 'Win';
      }

      if(Computerchoose === "Rock" && userchoice === "Scissor"){
            Ans = "Loose";
      }

      if(Computerchoose === "Paper" && userchoice === "Scissor"){
            Ans = "Win";
      }

      if(Computerchoose === "Paper" && userchoice === "Rock"){
            Ans = "Loos";
      }
      if(Computerchoose === "Scissor" && userchoice === "Rock"){
            Ans = "Loos";
      }
      if(Computerchoose === "Scissor" && userchoice === "Paper"){
            Ans = "Win";
      }
      result.innerHTML = Ans;

}
