let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5
let gameOver = false
let chancesArea = document.getElementById("chances-area");
let history=[]

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
    userInput.value = ""; //익명함수
});

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
} 
/*랜덤번호를 지정해준다. 
Math.random()를 사용하여 0~1 사이의 난수를 반환시키고, 
100을 곱해서 0~99까지의 범위를 지정해주고, 1을 더하여 1~100까지의 범위로 바꿔준다.
그리고 Math.floor()로 감싸주어 소수점 밑은 삭제한다. */

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1 ~ 100 안의 숫자만 입력해주세요."
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "숫자를 재입력하셨습니다. 다른 숫자를 입력해주세요."
        return;
    }

    chances--;
    chancesArea.textContent = `남은기회 : ${chances}번`; //정적인 값과 동적인 값을 모두 사용해야할 때 백틱을 사용한다.
    console.log(chances)

    if (userValue < computerNum){
        resultArea.textContent = "UP!"
    } else if (userValue > computerNum){
        resultArea.textContent = "DOWN!"
    } else {
        resultArea.textContent = "정답!"
        gameOver=true
    }

    history.push(userValue)
    
    if(chances<1){
        gameOver=true
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value=""; //user input창을 clear
    pickRandomNum(); //새로운 랜덤번호 생성

    resultArea.textContent = "게임을 시작합니다."
}
pickRandomNum();