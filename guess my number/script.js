'use strict';
const secretnumber
 = Math.trunc(Math.random()  *20) + 1;
 let score =20;
 let highscore = 0;
//document.querySelector('.number').textContent = secretnumber;
document.querySelector( '.check').addEventListener
('click',function  () {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
//when there is no input
if(!guess) {
    document.querySelector('.message').textContent ='no number!';
}
//when player is win
else if ( guess === secretnumber){
    document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('.number').textContent = secretnumber;


document.querySelector('body').style.backgroundColor ='#60b347';
document.querySelector('.number').style.width = '30rem';
if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}}
//when guess is too high
else if ( guess > secretnumber)
if(score > 1)
{
    score--;
    document.querySelector('.score').textContent = score;


    document.querySelector('.message').textContent ='too high';

} 
else
{
    document.querySelector('.message').textContent = 'you lost the game';
}
//when guess is too low
else if(guess< secretnumber)
if(score > 1)
{
    score--;
    document.querySelector('.score').textContent = score;


    document.querySelector('.message').textContent ='too low';

} 
else
{
    document.querySelector('.message').textContent = 'you lost the game';



}});
document.querySelector( '.again').addEventListener
('click',function  () {
    score = 20;

  let scretnumber= Math.trunc(Math.random()  *20) + 1;
    
        document.querySelector('.message').textContent ='start guesing....';
    
        document.querySelector('.score').textContent = 'score';
        document.querySelector('.number').textContent ='?' ;
        document.querySelector('.guess').vakye = '';
    
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';})