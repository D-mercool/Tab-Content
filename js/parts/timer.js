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