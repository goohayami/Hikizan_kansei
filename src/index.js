// スタートボタン取得
const startBTN = document.getElementById("start");
// 目標の数字をランダムで生成
const number = Math.floor(Math.random() * 20) + 11;
// 数字をランダムで取得
const left = Math.floor(Math.random() * 10) + 1;
const center = Math.floor(Math.random() * 10) + 1;
const right = Math.floor(Math.random() * 10) + 1;
// 問題のdivを取得
const question = document.getElementById("question");
// 数字を取得してから、テキストを変更
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
num1.textContent = left;
num2.textContent = center;
num3.textContent = right;

// お試し

console.log(left);

// スタートボタンをクリックするとリロード
startBTN.addEventListener("click", () => {
  window.location.reload();
});
question.textContent = number;
// ここまで////////////////////////
let i = number;
num1.addEventListener("click", () => {
  if (i > 0) {
    while (i > 0) {
      i = i - left;
      break;
    }
  }
  console.log(i);
  question.textContent = i;
  if (i === 0) {
    question.textContent = "成功";
  } else if (i < 0) {
    question.textContent = "失敗";
  }
});
num2.addEventListener("click", () => {
  if (i > 0) {
    while (i > 0) {
      i = i - center;
      break;
    }
  }
  console.log(i);
  question.textContent = i;
  if (i === 0) {
    question.textContent = "成功";
  } else if (i < 0) {
    question.textContent = "失敗";
  }
});
num3.addEventListener("click", () => {
  if (i > 0) {
    while (i > 0) {
      i = i - right;
      break;
    }
  }
  console.log(i);
  question.textContent = i;
  if (i === 0) {
    question.textContent = "成功";
  } else if (i < 0) {
    question.textContent = "失敗";
  }
});

// document.getElementById("num1").onclick = function () {
//   question.textContent = number - 1;
// };
// document.getElementById("num2").onclick = function () {
//   question.textContent = number - 2;
// };
