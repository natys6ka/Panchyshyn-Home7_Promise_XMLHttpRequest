/* Потрібно розробити функції які будуть виконуватися послідовно одна за одною 
за допомогою промісів.
1.	Зробити зарядку
2.	Піти в душ
3.	Зробити сніданок
4.	Піти на роботу
 */

function morningDay() {
    let prom = new Promise((resolve, reject) => {
        setTimeout(function () {
            true
                ? resolve('gym.jpg')
                : reject('Error Gym')
        }, 1500);
    });
    return prom;
}
function shower(mess) {
    console.log('1 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            true
                ? resolve('shower.jpg')
                : reject('Error Shower')
        }, 1500);
    });
}
function breakfast(mess) {
    console.log('2 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            true
                ? resolve('breakfast.jpg')
                : reject('Error Breakfast')
        }, 1500);
    });
}
function work(mess) {
    console.log('3 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            true
                ? resolve('work.jpg')
                : reject('Error Work')
        }, 1500);
    });
}
function finish(mess) {
    console.log('4 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            true
                ? resolve('Finish')
                : reject('Error day')
        }, 1500);
    });
}

document.getElementById('start').addEventListener('click', function () {

    morningDay()
        .then(gymMessage => shower(gymMessage))
        .then(showerMessage => breakfast(showerMessage))
        .then(breakfastMessage => work(breakfastMessage))
        .then(workMessage => finish(workMessage))
        .catch(error => console.log(error))

})




/* Потрібно за допомогою XMLHttpRequest витягнути дані 
з OMDb API використовуючи Promise. 
Потрібно в промісі відправляти запит на сервер 
по імені а також по ІД.
1.	Витягуємо дані по імені фільму
2.	Дані розпарсуємо на сторінці
3.	При натисканні на More Details має відкритися модалка з усіма даними про той фільм.
4.	Все має працювати.
*/

document.getElementById('search').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=fb18a1ae', false);
    xhr.send();
    console.log(JSON.parse(xhr.responseText));
})