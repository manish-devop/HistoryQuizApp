const userName = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
userName.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !userName.value;
});

saveHighScore = (e) => {
    console.log('click the save button');
    e.preventDefault();

    const score = {

        score: Math.floor(Math.random() * 100),
        // score:mostRecentScore,
       
        name: userName.value
    };

    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem("highScores" , JSON.stringify(highScores))
    window.location.assign("./index.html");

console.log(highScores);
};

