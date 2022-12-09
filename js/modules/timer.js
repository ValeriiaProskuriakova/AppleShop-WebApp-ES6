function timer(deadline){

     //кол-во милисекунд до дати распродажи



    function difference () {
        let today = Date.parse(new Date);
        let saleDate = Date.parse(deadline)
        let t = saleDate - today;
        let days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
        return {
            "days": days,
            "seconds": seconds,
            "minutes": minutes,
            "hours": hours,
            "difference": t
        }
    }

    function zero (num) {
        if (num > 0 && num < 10) {
            return '0' + num
        }
        else {
            return num
        }
    }

    function setTime () {
        let days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timerID = setInterval(update, 1000);
        update()
        function update () {
            let x = difference ()
            days.textContent  = zero(x.days);
            hours.textContent = zero(x.hours);
            minutes.textContent = zero(x.minutes);
            seconds.textContent  = zero(x.seconds);
            if (x.difference <= 0) {
                clearInterval(timerID);
                days.innerHTML  = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent  = '00';
            }
        }
    }

    setTime()
}
export default timer;