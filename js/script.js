window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'); //получаем все кнопки
    let info = document.querySelector('.info-header'); //получаем родителя кнопок
    let tabContent = document.querySelectorAll('.info-tabcontent'); //получаем контент, который будем скрывать
    
    function hideTabContent(a) { // функция скрывает весь контент, кроме первого
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); //удаляем класс show
            tabContent[i].classList.add('hide'); // добавляем класс hide
        }
    }
    hideTabContent(1); // Вызываем функцию

    function showTabContent(b) { //функция показывает определенный  контент
        if (tabContent[b].classList.contains('hide'))  { //проверям скрыт ли элемент
            tabContent[b].classList.remove('hide'); //удаляем класс hide
            tabContent[b].classList.add('show'); //добавляем класс show
        } 
    }

    info.addEventListener('click', function(event) { //используем делегирование на родителе
        let target = event.target; //получаем событие
        
        if ( target && target.classList.contains('info-header-tab')) { // если событие клика совпадает по классу с нашими кнопками, то
            for (let i = 0; i < tab.length; i++) {  
                if (target == tab[i]) { // проверяем кнопку с контентом для нее
                    hideTabContent(0); // скрываем весь контент
                    showTabContent(i); // показываем нужный контент
                    break;
                }
            }
        }
    });

    //Таймер

    let deadline = '2019-12-05';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()); // Вычисляем разницу между дедлайном и настоящим временем (мс)
        let seconds = Math.floor((t/1000) % 60); //получаем секунды из милисекунд 
        let minutes = Math.floor((t/1000/60)%60); //получаем минуты
        let hours = Math.floor(t/(1000*60*60));//получаем часы
        //let days = Math.floor(t/(1000*60*60*24));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = document.querySelector('.hours');
        let minutes = document.querySelector('.minutes');
        let seconds = document.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.hours >= 10) {
                hours.textContent = t.hours;
            }
            else {
                hours.textContent = `0${t.hours}`;
            }
            if (t.minutes >= 10) {
                minutes.textContent = t.minutes; 
            }
            else {
                minutes.textContent = `0${t.minutes}`;
            }
            if (t.seconds >= 10) {
                seconds.textContent = t.seconds; 
            }
            else {
                seconds.textContent = `0${t.seconds}`;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval); //остановили таймер
            }
        }
    }

    if (Date.parse(deadline) > Date.parse(new Date())) {
        setClock('timer', deadline); 
    }
     
    //Модальное окно

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //ЗАпретили прокрутку страницы когда открыто модальное окно
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    })

});