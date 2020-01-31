/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    //Калькулятор

    var persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        if (restDays.value != '' && persons.value != '') {
            personsSum = +this.value;
            daysSum = +restDays.value;
            total = (daysSum + personsSum) * 4000;
            totalValue.innerHTML = total;
        } else {
            totalValue.innerHTML = 0;
        }
    });

    restDays.addEventListener('change', function () {
        if (restDays.value != '' && persons.value != '') {
            daysSum = +this.value;
            personsSum = +persons.value;
            total = (daysSum + personsSum) * 4000;
            totalValue.innerHTML = total;
        } else {
            totalValue.innerHTML = 0;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            var a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value; //Получаем value из выбора из списка
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    //Форма (контактная форма)
    let formContact = document.querySelector('#form');
    let inputContact = formContact.getElementsByTagName('input');
    let statusMessageContact = document.createElement('div');

    statusMessageContact.classList.add('status');

    formContact.addEventListener('submit', function(event) { //Обработчик событий на форму а не на кнопку
        event.preventDefault();  //Отменили стандартное поведение браузера, чтобы он не обновлялся при отправке формы
        formContact.appendChild(statusMessage);

        let request = new XMLHttpRequest(); //Создаем запрос
        request.open('POST', 'server.php'); //Куда отправляем
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        
        let formData = new FormData(formContact); //То, что ввел пользователь в форму

        //Отправка данных в json формате
        let obj = {}; //Превратили объект formData в обычный читаемый объект
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);
        //Отправили

        request.addEventListener('readystatechange', function() { // Отслеживание состояний запроса
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            }
            else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            }
            else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < inputContact.length; i++) { //Очистка формы
            inputContact[i].value = '';
        }
    });
}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Модальное окно
function modal() {
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //ЗАпретили прокрутку страницы когда открыто модальное окно
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Форма (модальное окно)

    let message = { //Объект со статусами запроса
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form');
    let input = form.getElementsByTagName('input');
    let statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) { //Обработчик событий на форму а не на кнопку
        event.preventDefault(); //Отменили стандартное поведение браузера, чтобы он не обновлялся при отправке формы
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest(); //Создаем запрос
        request.open('POST', 'server.php'); //Куда отправляем
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //получаме данные из формы
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form); //То, что ввел пользователь в форму
        //request.send(formData);

        //Отправка данных в json формате
        let obj = {}; //Превратили объект formData в обычный читаемый объект
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);
        //Отправили

        request.addEventListener('readystatechange', function () { // Отслеживание состояний запроса
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) { //Очистка формы
            input[i].value = '';
        }
    });
}


module.exports = modal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    //Слайдер

    let slideIndex = 1; //Переменная отвечает за тот слайд, к-ый показывается на странице
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display =  'none'); //Скрыли все слайды
        /*for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }*/
        dots.forEach((item) => item.classList.remove('dot-active'));// удалили класс у точек

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }


    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 1; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
               currentSlide(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadline = '2020-02-01';

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
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./js/parts/modal.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map