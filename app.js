// document.write("Working")

/***************************************************************************
- I need to start testing on one word then do the point below. 
- I need an array for the words. probably 10 words. 
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
 *****************************************************************************/


let words = ["Aquaria" , "Bianca" , "Jinkx" , " Vanji" , "Valentina" , "Fame" , "Monique" , "Willam" , "Roxxy" , "Bob"]


//  ************************ Canvas *************************
let canvas, ctx;

document.addEventListener('DOMContentLoaded', (ev) =>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 280;
    // Used js, instead of CSS, for the dimentions so the aspect ratio would stay intact
    
    drawMakeupTable();
    drawMirror();
    drawLeg1();
    drawLeg2();
    drawLeg3();
    drawLeg4();
    drawFoundation();
    drawPowder();
    drawBlender();
    drawContour();
});

const drawMakeupTable = function (){
    ctx.rect(50, 120, 200, 70);
    ctx.fillStyle = 'black';
    ctx.fill();
   

};

const drawMirror = function (){
ctx.beginPath();
// Create color gradient
let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "white");
grd.addColorStop(1, "grey");

// Fill with the color gradient
ctx.fillStyle = grd;
ctx.fillRect(60, 20, 180, 100);
};

const drawLeg1 = function (){
    ctx.beginPath();
    ctx.rect(60, 190, 10, 70);
    ctx.fillStyle = 'black';
    ctx.fill();
};

const drawLeg2 = function (){
    ctx.beginPath();
    ctx.rect(90, 190, 10, 60);
    ctx.fillStyle = 'black';
    ctx.fill();
};

const drawLeg3 = function (){
    ctx.beginPath();
    ctx.rect(200, 190, 10, 60);
    ctx.fillStyle = 'black';
    ctx.fill();
};

const drawLeg4 = function (){
    ctx.beginPath();
    ctx.rect(230, 190, 10, 70);
    ctx.fillStyle = 'black';
    ctx.fill();
};

const drawFoundation = function (){
    ctx.beginPath();
    ctx.rect(210, 130, 10, 50);
    ctx.fillStyle = '#F29C6B';
    ctx.fill();
};

const drawPowder = function (){
    ctx.beginPath();
    ctx.arc(120, 155, 15, 0, (Math.PI*2), false);
    ctx.fillStyle = 'beige';
    ctx.fill();
};

const drawBlender = function (){
    ctx.beginPath();
    ctx.ellipse(175, 155, 15, 10 ,180 , 0 , (Math.PI*2), false);
    ctx.fillStyle = '#F22E8A';
    ctx.fill();
};

const drawContour = function (){
    ctx.beginPath();
    ctx.rect(70, 145, 20, 20);
    ctx.fillStyle = '#BF613F';
    ctx.fill();
};


// ********************** End of Canvas *****************************

// from stackoverflow
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
function setLetter( letter ) {
    var div = document.getElementById( "name" );
    div.innerHTML = div.innerHTML + letter;
}