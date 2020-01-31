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