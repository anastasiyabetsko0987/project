
// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function() {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
  
//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
//   },
//   rememberMyFilms: function() {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов', ''),
//             b = prompt('На сколько оцените его?', '');
    
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('dane');
//       } else {
//         console.log('error');
//         i--;
//       }     
//     }
//   },
//   detetPersonalLevel: function() {
//     if (personalMovieDB.count < 10) {
//       console.log('Просмотрено мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('Вы классный зритель');
//     } else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман');
//     } else {
//       console.log('Error');
//     }
//   },
//   showMyDB: function(hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toogleVisibleMyDB: function() {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGeners: function() {
//     for (let i = 1; i < 2; i++) {
//     //   let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//     //   if (genre === '' || genre == null) {
//     //     console.log('Вы ввели не то, что нужно')
//     //     i--;
//     //   } else {
//     //     personalMovieDB.genres[i-1] = genre;
//     //   } 
//     let genres = prompt(`Ваш любимые анры через запятую`).toLowerCase();

//     if (genres === '' || genres == null) {
//           console.log('Вы ввели не то, что нужно')
//           i--;
//         } else {
//           personalMovieDB.genres = genres.split(', ');
//           personalMovieDB.genres.sort();
//         } 
//     }

//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимы жанр ${i + 1} - это ${item}`);
//     });
//   }
// };


window.addEventListener('DOMContentLoaded', () => {
  const deadLine = '2023-04-19';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)), // сколько в сутках миллисекунд(это все, что в скобках), days - сколько суток осталось до окончания 2020-05-11
    hours = Math.floor((t / (1000 * 60 * 60) % 24)), // общее кол. часов, кот. осталось до таймера(то что до процента)
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(upDateClock, 1000);

    upDateClock();

    function upDateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadLine);
});