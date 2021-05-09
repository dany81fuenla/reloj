

(function(){
    var actualizar_hora = function(){
    var fecha = new Date(),
        hour = fecha.getHours(),
        minute = fecha.getMinutes(),
        second = fecha.getSeconds(),
        dayMouth = fecha.getDate(),
        dayWeek = fecha.getDay(),
        mouth = fecha.getMonth(),
        year = fecha.getFullYear();
    
    var pHour = document.getElementById("hour"),
        pMinutes = document.getElementById("minutes"),
        pSecond = document.getElementById("seconds"),
        pDayMouth = document.getElementById("dayMouth"),
        pDayWeek = document.getElementById("dayWeek"),
        pMouth = document.getElementById("mouth"),
        pYear = document.getElementById("year");

    var week = ['DOMIGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
    
        pDayWeek.textContent = week[dayWeek];

        pDayMouth.textContent = dayMouth;

    var mouthYear = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
        
        pMouth.textContent = mouthYear[mouth];

        pYear.textContent = year;

        if(hour<10){
            hour = "0" + hour
        };
        pHour.textContent = hour;

        if(minute<10){
            minute = "0" + minute
        };
        pMinutes.textContent = minute;

        if(second<10){
            second = "0" + second
        };
        pSecond.textContent = second;

};
        actualizar_hora();
        var interval = setInterval(actualizar_hora, 1000);
}())