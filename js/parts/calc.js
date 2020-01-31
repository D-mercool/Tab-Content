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