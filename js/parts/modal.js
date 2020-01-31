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