let userName = prompt("Welcome to GC mini golf! What is your name?")

let holeCount = prompt("Hi " + userName + "! Would you like to play 3 or 6 holes?")

let scores = []

for (let i = 0; i < holeCount; i++){
    scores.push(prompt("How many putts for hole "+(i+1)+"? (par: 3)")) 
}

let totalScore = 0

for (let i = 0; i < scores.length; i++){
    totalScore += parseInt(scores[i])
}
 
if (holeCount==3){
    if (totalScore>9){
        console.log("Nice try, " + userName + "... Your total par was: +" + (totalScore-9) + ".")
    }
    if (totalScore<9){
        console.log("Great job, " + userName + "! Your total par was: -" + (9-totalScore) + ". ")
    }
    if (totalScore==9){
        console.log("Good game, " + userName + ". Your total par was: 0.")
    }
} else if (holeCount==6){
    if (totalScore>18){
        console.log("Nice try, " + userName + "... Your total par was: +" + (totalScore-18) + ".")
    }
    if (totalScore<18){
        console.log("Great job, " + userName + "! Your total par was: -" + (18-totalScore) + ". ")
    }
    if (totalScore==18){
        console.log("Good game, " + userName + ". Your total par was: 0.")
    }
}


/*  Step 1 - get name+number of holes from user, store in variable (userName, holes)//
    Step 2- loop holes
        -ask user for their score
        -add each score to one another, total grows as we loop

        let 3.1 = prompt("How many putts for hole 1? (par: 3)");
        let 3.2 = prompt("How many putts for hole 2? (par: 3)");
        let 3.3 = prompt("How many putts for hole 3? (par: 3)");

let total = 0
for (let i = 0; i < holeCount; i++) {}

    Step 3 - print score
    Step 4 - decide if score is above, below or par
        -if 3 holes (total >= 9)
        -if 6 holes (total >= 18)

    let threeHoles = total

    Nice try, (userName)... Your total par was: +(par).
    Great job, (userName)! Your total par was: -(par).
    Good game, (userName). Your total par was: 0.
*/