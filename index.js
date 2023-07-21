
document.getElementById("app").innerHTML = `
<h1>Tasks</h1>
<div>
  There are tasks 1,2,3
</div>
`;

let number = prompt("Введите число:", "");

if(number >7){
  alert("Привет")
}
else{
  alert("Число меньше либо равно 7")
}

let name = prompt("Введите имя:", "");

if(name === "Вячеслав"){
  alert("Привет,Вячеслав")
}
else{
  alert("Нет такого имени")
}

let array = prompt("Введите числа через кому(пример 2,5,39):", "");
function printMultiplesOfThree(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      alert("Кратное 3:" + array[i]);
    }
    else{
      alert("Не кратное 3 либо пустое:" + array[i]);
    }
  }
}

printMultiplesOfThree(array.split(","));
