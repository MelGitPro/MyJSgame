const prompt = require("prompt-sync")({ sigint: true });
var game = true;
var score = 0;

console.log('Это простая консольная игра');
console.log('Чтобы очистить введите clear');
console.log('Чтобы выйти из игры и вернуться в терминал введите exit');

while (game == true) {
  var a = Math.round(Math.random() * (100 - 1) + 1);
  console.log('Счёт: ', score)
  while (b != a) {
 
    var b = prompt("Угадай, что загадала машина  ");
    if (a < b) {
      console.log("Нет, число меньше");
    } else if (a > b) {
      console.log("Нет, число больше");
    } else if(a == b) {
      console.log("Да. угадал число равно", a);
      score++;
    } else if (b == 'exit'){
        game = false;
        break
    } else if (b == 'clear'){
        console.clear()
    }
  }
}
