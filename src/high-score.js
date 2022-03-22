const highScoreBoard = document.getElementById('highScore');
let highScore = localStorage.getItem('game1HighScore') || 0;
highScoreBoard.textContent = 'HIGH SCORE: ' + highScore;
