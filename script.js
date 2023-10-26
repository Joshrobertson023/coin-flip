/**********************************************************************/
/*                                                                    */
/* Program name: Coin-toss                                            */
/* Date:         October 20, 2023                                     */
/* Author:       Josh Robertson                                       */
/*                                                                    */
/* This is a coin flip that generates a random value                  */
/*                                                                    */
/**********************************************************************/

/**********************************************************************/
/*                            DOM constants                           */
/**********************************************************************/
const btnNewPlay = document.getElementById('newplay'),
      displayResultDiv = document.getElementById('result');

/**********************************************************************/
/*                          Global variables                          */
/**********************************************************************/
let coinHeads = 0; /* 0 = false (tails), 1 = true (heads) */

/**********************************************************************/
/*                             Main program                           */
/**********************************************************************/
btnNewPlay.addEventListener('click', () => {
   coinHeads = flipCoin();
   displayResult();
});

/**********************************************************************/
/*                            Flip the coin                           */
/**********************************************************************/
function flipCoin() {
   return coinHeads = Math.round(Math.random());
}

/**********************************************************************/
/*                        Display the result                          */
/**********************************************************************/
function displayResult() {
   if (coinHeads === 0)
      displayResultDiv.textContent = "Tails!";
   else if (coinHeads === 1)
      displayResultDiv.textContent = "Heads!";
}