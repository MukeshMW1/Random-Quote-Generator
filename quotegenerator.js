

let btn = document.querySelector('#new-quote');
let quote =document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes =[{
    quote:'“Every child is an artist; the problem is staying an artist when you grow up”',
    person:"Pablo Picasso"}
    ,{
    quote:'“ It is in their ability to shape destinies, spark laughter, and heal wounds. Every word, chosen thoughtfully, is able to enlighten your life."”',
    person:"Pablo Picasso" },{
    quote:'“When you change your thoughts, remember to also change your world.”',
    person:"Norman Vincent Peale"},{
    quote:'“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.”',
    person:"Walter Anderson"},{
    quote:'“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”',
    person:"Diane McLaren"

    
 },];


 btn.addEventListener('click' , function()
 {
    
   let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText  = quotes[random].person;
  







 })