// JavaScript function that wraps everything
    $(document).ready(function() {

        //Random number between 19 and 120- shown at the beginning 
        //then hidden from view however logged to compare against 
        //user guesses with the crystals
            
            var wins=0;
            var losses=0;

            var gameNumber=0;           
            var totalScore=0;
            var redNumber=0;
            var blueNumber=0;
            var yellowNumber=0;
            var greenNumber=0;
            var gameOver=false;
            var ranNumber=0;


        gameStart();
           
       
        function gameStart(){
            

            //On clicking each crystal, game will record points 
            //accumulated and compare them to the random game 
            //number - if equal the game number - WIN - if more than
            //gameNumber - LOSE - record win/loss -  Restart game 
               

                    numPick();

                       console.log(gameNumber);

                    jewels();
                     
                     function jewels(){

                        $("#red").click(function(){

                            //if gameOver is false - function runs

                            if (gameOver===false){
                                totalScore=totalScore+redNumber;
                                console.log(totalScore);
                                $("#score").html(totalScore); 
                                compare(); 

                            }

                        });  

                        $("#blue").click(function(){

                            //if gameOver is false - function runs

                            if (gameOver===false){
                                totalScore=totalScore+blueNumber;
                                console.log(totalScore);
                                $("#score").html(totalScore);
                                compare();  
                            }

                        });

                        $("#yellow").click(function(){

                            //if gameOver is false - function runs

                            if (gameOver===false){
                                totalScore=totalScore+yellowNumber;
                                console.log(totalScore);
                                $("#score").html(totalScore);
                                compare();
                            }

                        });

                        $("#green").click(function(){

                            //if gameOver is false - function runs

                            if (gameOver===false){
                                totalScore=totalScore+greenNumber;
                                console.log(totalScore);
                                $("#score").html(totalScore); 
                                compare();
                            }

                        }); 

                    }//End jewels  

                }  //End gameStart

            //At beginning of game,when openNumber button is clicked - random number function is 
            //deployed - random number is displayed on screen and value of 
            //gameNumber is set to random number value.

                    function numPick(){       
                        console.log("Called");
             
              
                        ranNumber= Math.floor((Math.random() * 102) + 19)         
                        gameNumber = document.getElementById("openNumber")
                        gameNumber.innerHTML = ranNumber;
                       
                       
                        //on click-the box with the target number will hide in 3 seconds
                        var windowTimeout=setTimeout(function(){
                            $("#openNumber").hide(3000);});
                        

                        //Sets red crystal to a random number
                        redNumber = document.getElementById("red")
                        redNumber = Math.floor((Math.random() * 12) + 1);

                                            
                        //sets blue crystal to a random number
                        blueNumber = document.getElementById("blue")
                        blueNumber = Math.floor((Math.random() * 12) + 1);

                                                
                        //sets yellow crystal to a random number
                        yellowNumber = document.getElementById("yellow")
                        yellowNumber = Math.floor((Math.random() * 12) + 1);

                                    
                       //sets green crystal to a random number
                        greenNumber = document.getElementById("green")
                        greenNumber = Math.floor((Math.random() * 12) + 1);

                                                
                    }//ends numPick 

                 //Function compare takes a look at the random gameNumber 
                 //and compares it to the total score - if the total score
                 //equals the gameNumber, "YOU WIN" is displayed and the wins
                 //are increased by 1 - if the total score is greater than the 
                 //gameNumber, then "YOU LOSE" is displayed and the losses are
                 //increased by 1 - if the total score is less than the random
                 //gameNumber, nothing happens and the user can keep clicking.

                    function compare(){
                                                
                        if(totalScore===ranNumber){
                        
                            gameOver=true;
                            $("#winsLosses").text("You Win!");
                            wins++;

                         gameEnd();

                         }

                        else if (totalScore>ranNumber){

                             gameOver=true;
                             $("#winsLosses").text("You Lose!");
                             losses++;

                         gameEnd();
                             
                         }
                       
                     }//end compare function

                   function gameEnd(){

                    console.log("game over");

                        var finalWin=document.createElement("W");
                        var w=document.createTextNode("         Wins "+ wins);
                        finalWin.appendChild(w);
                        document.getElementById("winsLosses").appendChild(finalWin);
                       
                        
                        var finalLoss=document.createElement("L");
                        var l=document.createTextNode("          Losses "+ losses);
                        finalLoss.appendChild(l);
                        document.getElementById("winsLosses").appendChild(finalLoss);

                     //delay set to allow user to see score before 
                     //reset to zero 

                        setTimeout(function() {
                            
                       //reset all variables except for wins/loses
                       //being tracked     
                            gameOver=false;
                            totalScore=0;
                            gameNumber=0;           
                            totalScore=0;
                            redNumber=0;
                            blueNumber=0;
                            yellowNumber=0;
                            greenNumber=0;
                            gameOver=false;
                            ranNumber=0

                        //repost wins and losses on screen

                            $("#winsLosses").text("");
                            var finalWin=document.createElement("W");
                            var w=document.createTextNode("         Wins "+ wins);
                            finalWin.appendChild(w);
                            document.getElementById("winsLosses").appendChild(finalWin);
                       
                        
                            var finalLoss=document.createElement("L");
                            var l=document.createTextNode("          Losses "+ losses);
                            finalLoss.appendChild(l);
                            document.getElementById("winsLosses").appendChild(finalLoss);
                            
                            //reset random number box to show 

                            $("#openNumber").show();

                            //reset score on screen to show 0

                            $("#score").html(totalScore);

                            //reset click functions

                            $("#blue").off("click");
                            $("#red").off("click");
                            $("#yellow").off("click");
                            $("#green").off("click");


                            //restart game
                                   
                             gameStart();
                             
                        }, 3000);

                    }//end gameEnd function

                            
 
    } ); //end all Javascript functions
