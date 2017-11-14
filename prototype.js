var score = 0;

var game = setInterval(function(){
    var spectatorsWon = Math.round(Math.random());
    if(spectatorsWon === 1){
        scoreChanged(0, Math.round(Math.random()));
    }else{
        scoreChanged(Math.round(Math.random()), 0);
    }
}, 1000)

function scoreChanged(expertsPoint, spectatorsPoint){
    score += expertsPoint*10;
    score += spectatorsPoint;

    var formattedScore = formatScore(score);

    if(formattedScore){
        console.log('The score is: ' + formattedScore);
    }
}

function formatScore(scoreNumber){
    var expertsScore = Math.floor(scoreNumber/10);
    var spectatorsScore = scoreNumber % 10;
    var formattedScore = expertsScore + ':' + spectatorsScore;

    var isExpertsWon = expertsScore >= 6;
    var isSpectarorsWon = spectatorsScore >= 6;

    if(isExpertsWon || isSpectarorsWon){
        finishGame(formattedScore, isExpertsWon ? 'Experts' : 'Spectators');
        return false;
    }
    return expertsScore + ':' + spectatorsScore;
}

function finishGame(finalScore, winners){
    console.log('Game Finished');
    console.log('The final score is: ' + finalScore);
    console.log(winners + ' won!');
    clearInterval(game);
}

function getSeconds(){
    var d = new Date();
    var n = d.getSeconds();
    return n;
}