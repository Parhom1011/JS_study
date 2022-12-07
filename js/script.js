"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

/* let i = 0;
while (i < 2) {
    i++;
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
        
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
        console.log('error');
        i--;
    }
} */

/* let i = 0;
do {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
    console.log('error');
    i--;
    }
    i++;
} while (i < 2); */

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов!');
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log('Ты классический зритель!');
} else if (personalMovieDB.count >= 30) {
    console.log('Ты наркоман!');
} else {
    console.log('Упс, ошибка!');
}

console.log(personalMovieDB);