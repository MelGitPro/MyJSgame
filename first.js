const prompt = require("prompt-sync")({ sigint: true });
var game = true;
var score = 0;
var easy = 10;
var normal = 100;
var increadible = 1000;
var titanic = 1000000;

function Level(from,to) {
   var a = Math.round(Math.random() * (to - from) + from);
  console.log('Счёт: ', score)
  while (b != a) {
    var b = prompt("Угадай, что загадала машина  ");
    if (a < b) {
      console.log("Нет, число меньше");
    } else if (a > b) {
      console.log("Нет, число больше");
    } else if(a == b) {
      console.log("Да. угадал число равно", a);
      score += a;
    } else if (b == 'exit'){
        game = false;
        break;
    } else if (b == 'clear'){
        console.clear()
    }
  }
}


while (game == true) {
  console.log(`**Ваш счёт: ${score}**`);
  console.log('Выберите сложность:\n 1.Легко: 1-10\n 2.Нормально: 1-100\n 3.Сложно:1-1000\n 4.Невозможно: 1-1 000 000\n 5.Выйти');
  console.log('Чтобы выбрать режим нужно написать его номер');
  mode = prompt('Ваш режим:  ');
  if (mode == 1){
    console.log('Выбран лёгкий режим. Слабенько.')
    Level(1,easy);
  } else if (mode == 2){
    console.log("Выбран нормальный режим. Ни сложно, ни просто.")
    Level(1,normal);
  } else if (mode == 3){
    console.log("Выбран сложный режим. Да ты жесткач!!!")
    Level(1,increadible);
  } else if (mode == 4){
    console.log("Выбран ужасно сложный режим. Да ты псих просто!!!")
    Level(1,titanic);
  } else if (mode == 5){
    game = false;
    break;
  }
}
