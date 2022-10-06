'use strict';
const number = document.querySelector('.three');
const notifications = document.querySelectorAll('.first', '.red');
console.log(notifications);
const Point = document.querySelector('.private');
console.log(notifications.length);
const mark = document.querySelector('.mark');

notifications.forEach(function (not, i) {
  console.log(i + 1);

  not.addEventListener('click', function () {
    console.log('clicked');
    not.classList.add('hiddencolour');
    const anotherNumber = notifications.length - i - 1;
    console.log(anotherNumber);
    number.textContent = `${anotherNumber}`;
    Point.addEventListener('click', function () {
      Point.classList.add('hiddencolour');
    });
  });

  mark.addEventListener('click', function () {
    not.classList.add('hiddencolour');
    Point.classList.add('hiddencolour');
    number.textContent = `0`;
  });
});
