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