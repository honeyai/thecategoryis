// document.write("Working")

/***************************************************************************
- I need to start testing on one word then do the point below. 
- I need an array for the words. probably 10 words. // let words = ["Aquaria" , "Bianca" , "Jinkx" , " Vanji" , "Valentina" , "Fame" , "Monique" , "Willam" , "Roxxy" , "Bob"]
- clues = [winner of season 10, winner of season 5, winner of season 6, vanji , bring back valentina, hows your head? miss fame, who can't cartwheel? Monique, who said: your tone seems very pointed right now? willam  , the wig reveal queen? Roxxy, winner of season 8 ]
 - defi will use a for loop.
 - Not sure if I'm gonna use .map, .push .join and .splice
 - I can have the word .length to represent the number of _ _ .
 - The game function will have a while loop. 
 - The word randomization will be Math.floor(Math.random()* the array . length)
 - The player will know if they win or lose by an alert window.  
 - will use canvas to draw the makeup table. 10 attempts.
 - There's an option where I draw the makeup table and cover it with a clear object and with every wrong answer the clear object disappears.
 - The attempts are: 1 for the mirror, 1 for the table, 1 for the lights. 4 for the table legs. 3 for the makeup.
 - don't forget to call your functions.
 - Idea for the action: do a while loop and inside it a nested if loop where you compare the play's input to the answer. I can use .slice , .splice or .map to separate them. I will use .join to stick them together for the result. 
 - consider using add event listener and inner HTML. 
 - I can compare the input using .filter.
 - I will need .length for the number of dashes.
 - why do I use an input with add event listener!!!
 - use .replace to turn the dashes into letters.
 *****************************************************************************/



// ********************************* The Actors ****************************************************
//  Going to create a class with clues and answers as properties and keys and put them in an array. 
class cluesAndanswers {
    constructor (clue , answer){
        this.clue = clue;
        this.answer = answer;

    };
};

// didn't forget to instansiate here :)
let q1 = new cluesAndanswers("The winner of season 11" , "AQUARIA");
let q2 = new cluesAndanswers("The winner of season 6" , "BIANCA");
let q3 = new cluesAndanswers("The winner of season 5" , "JINKX");
let q4 = new cluesAndanswers('The winner of season 8' , "BOB");
let q5 = new cluesAndanswers("Something Vanji started" , "VANJI");
let q6 = new cluesAndanswers("Bring back ... " , "VALENTINA");
let q7 = new cluesAndanswers("How's your head miss..." , 'FAME');
let q8 = new cluesAndanswers("Can't do a cartwheel" , "MONIQUE");
let q9 = new cluesAndanswers("The wig reveal queen..." , 'ROXXY');
let q10 = new cluesAndanswers("Your tone seems very pointed right now" , "WILLAM")


// slap them into an array
let bank = [q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9 , q10];

let attempts = 10;
// Its working so far :)
// console.log(bank);
// console.log(bank[4]);
// console.log(bank[4]. clue);

// ******************************* End of Actors ***************************************************

// ******************************* The Action ***************************************************

// ~~~~~~~~~~~~~~~~~~~~ Action 1 (randomization)  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let max = bank.length-1;
let min = 0;
let randomPlay = Math.floor(Math.random() * (max-min + 1));
let bacon = bank[randomPlay].answer;
let bakedBeans = bank[randomPlay].clue
// I  ran out of creativity with the name choices but remove the bacon , baked beans and other grocery list items before submitting

console.log(bakedBeans , bacon);

// ~~~~~~~~~~~~~~~~~~~~ Action 2 (Splitting)  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let characters = bacon.split("");
let letters = bacon.split("");
// console.log(letters);
console.log(characters)


// ~~~~~~~~~~~~~~~~~~~~ Action 3 (Inserting the clues into the HTML)  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let displayClue = document.querySelector('.question');
displayClue.textContent = bakedBeans;

// ~~~~~~~~~~~~~~~~~~~~ Action 4 (Inserting the answers into the HTML)  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let displayDashes = document.querySelector('.guess');

for (let x = 0 ; x < letters.length ; x++){
    letters[x] = " _ ";
}
displayDashes.textContent = letters;
// console.log(letters);
// The commas are there because I used .split . which is fine. 

// ~~~~~~~~~~~~~~~~~~~~ Action 5 (Keyboard & input action)  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// From stackoverflow, but modified by me. https://stackoverflow.com/questions/30616925/creating-26-alphabet-letter-buttons-with-the-for-loop-and-string-fromcharcode
window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        if ( i == 65 || i == 75 || i == 84 ) {
            p = document.createElement( "p" );
        }
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { setLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 74 || i == 83 || i == 90 ) {
            holder.appendChild( p );
        }
    }
} );

//  ************************ The Game *************************

let brisket ;


function dashRemover () {
    letters.shift();
    document.getElementById("guess").innerHTML = letters
}
// I could use splice here ^


function setLetter( letter ) {
    var div = document.getElementById( "guess" );
    // div.innerHTML = div.innerHTML + letter;
    brisket = characters.includes(letter)
    if (brisket == true){
        dashRemover();
        div.innerHTML = div.innerHTML + letter;
        
        
        letters.push(letter);
    } else {
        // alert("wrong")
      attempts--
      console.log(attempts) 
        switch (attempts){
            case 9:
                drawLeg1();
                break;
            case 8:
                drawLeg2();
                break;
            case 7:
                drawLeg3();
                break;
            case 6:
                drawLeg4();
                break;
            case 5:
                drawMakeupTable();
                break;
            case 4:
                drawMirror();
                break;
            case 3:
                drawFoundation();
                break;
            case 2:
                drawPowder();
                break;
            case 1:
                drawBlender();
                break;
            case 0:
                drawContour()
                alert("Game Over. Refresh the page to play again") 
                break;
        }
    };
    // console.log(brisket);
    // console.log(letter);
}



//  ************************ End of Game *************************



//  ************************ Canvas *************************

let canvas, ctx;


document.addEventListener('DOMContentLoaded', (ev) =>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 280;
    // Used js, instead of CSS, for the dimentions so the aspect ratio would stay intact
});



let drawMakeupTable = function (){
    ctx.beginPath();
    ctx.rect(50, 120, 200, 70);
    ctx.fillStyle = 'black';
    ctx.fill();
};


let drawMirror = function (){
ctx.beginPath();
// Create color gradient
let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "white");
grd.addColorStop(1, "grey");

// Fill with the color gradient
ctx.fillStyle = grd;
ctx.fillRect(60, 20, 180, 100);


};


let drawLeg1 = function (){
    ctx.beginPath();
    ctx.rect(60, 190, 10, 70);
    ctx.fillStyle = 'black';
    ctx.fill();
};

let drawLeg2 = function (){
    ctx.beginPath();
    ctx.rect(90, 190, 10, 60);
    ctx.fillStyle = 'black';
    ctx.fill();
};

let drawLeg3 = function (){
    ctx.beginPath();
    ctx.rect(200, 190, 10, 60);
    ctx.fillStyle = 'black';
    ctx.fill();
};



let drawLeg4 = function (){
    ctx.beginPath();
    ctx.rect(230, 190, 10, 70);
    ctx.fillStyle = 'black';
    ctx.fill();
};

let drawFoundation = function (){
    ctx.beginPath();
    ctx.rect(210, 130, 10, 50);
    ctx.fillStyle = '#F29C6B';
    ctx.fill();
};

let drawPowder = function (){
    ctx.beginPath();
    ctx.arc(120, 155, 15, 0, (Math.PI*2), false);
    ctx.fillStyle = 'beige';
    ctx.fill();
};

let drawBlender = function (){
    ctx.beginPath();
    ctx.ellipse(175, 155, 15, 10 ,180 , 0 , (Math.PI*2), false);
    ctx.fillStyle = '#F22E8A';
    ctx.fill();
};

let drawContour = function (){
    ctx.beginPath();
    ctx.rect(70, 145, 20, 20);
    ctx.fillStyle = '#BF613F';
    ctx.fill();
};


// ********************** End of Canvas *****************************

