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
            resolve('gym.jpg')
            reject('Error Gym')
        }, 1500);
    });
    return prom;
}
function shower(mess) {
    console.log('1 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('shower.jpg')
            reject('Error Shower')
        }, 1500);
    });
}
function breakfast(mess) {
    console.log('2 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('breakfast.jpg')
            reject('Error Breakfast')
        }, 1500);
    });
}
function work(mess) {
    console.log('3 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('work.jpg')
            reject('Error Work')
        }, 1500);
    });
}
function finish(mess) {
    console.log('4 ' + mess);
    document.getElementById('day').innerHTML += `<img class="foto" src="./photo/${mess}">`;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('Finish')
            reject('Error day')
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

    const searchText = document.getElementById('inputSearch').value;

    sendXHRRequest('GET', `http://www.omdbapi.com/?s=${searchText}&plot=full&apikey=fb18a1ae`)
        .then(data => loadOMDBList(data))
        .catch(error => console.log(error))

})

function sendXHRRequest(method, url) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open(method, url);
        xhr.send();
        xhr.onload = function () {
            JSON.parse(xhr.response).Response == 'True'
                ? resolve(JSON.parse(xhr.response))
                : reject(JSON.parse(xhr.response).Error)
        }
    })
}

function loadOMDBList(arrayOmdb) {
    console.log(arrayOmdb.Search);
    let imdbID = new Array;
    for (const element in arrayOmdb.Search) {
        let a = arrayOmdb.Search[element];
        // imdbID.push(a.imdbID);
        document.getElementById('omdbPlace').innerHTML += `<div id="omdbFile">
            <img src="${a.Poster}" class="logo">
            <h3 class="name">${a.Title}</h3>
            <p class="category">${a.Type}</p>
            <p class="year">${a.Year}</p>
            <button class="more" onclick="details(${a.imdbID})">More Details</button>
        </div>`;
    }

}


function details(imdbID){
    // console.log(imdbID);
}