/* Потрібно розробити функції які будуть виконуватися послідовно одна за одною 
за допомогою промісів.
1.	Зробити зарядку
2.	Піти в душ
3.	Зробити сніданок
4.	Піти на роботу
 */



 /* Потрібно за допомогою XMLHttpRequest витягнути дані 
 з OMDb API використовуючи Promise. 
Потрібно в промісі відправляти запит на сервер 
по імені а також по ІД.
1.	Витягуємо дані по імені фільму
2.	Дані розпарсуємо на сторінці
3.	При натисканні на More Details має відкритися модалка з усіма даними про той фільм.
4.	Все має працювати.
 */

document.getElementById('search').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=fb18a1ae', false);
    xhr.send();
    console.log(JSON.parse(xhr.responseText));
 })