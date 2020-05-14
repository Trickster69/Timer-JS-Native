    let deadLine = '2020-06-13';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return { //вернем обьект который содержит время
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(rendererClock, 1000); //каждую секунду запускает отрисовку

        function rendererClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) { //добавим "0" для красоты
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours); //добавили в html
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) { //условие остановки таймера
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadLine);