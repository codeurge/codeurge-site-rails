$(function () {
		timer();
		mileage();
    function timer() {
        var timer = 0;
        var timerContainer = $(".timer");
        var timeHour = $('<span>').addClass('hr').text('00');
        var timeHourLabel = $('<span>').addClass('hr-label').text(' h, ');
        var timeMin = $('<span>').addClass('min').text('00');
        var timeMinLabel = $('<span>').addClass('hr-label').text(' m, ');
        var timeSec = $('<span>').addClass('sec').text('00');
        var timeSecLabel = $('<span>').addClass('hr-label').text(' s');
        timerContainer.html('').append(timeHour).append(timeHourLabel).append(timeMin).append(timeMinLabel).append(timeSec).append(timeSecLabel).append(" ago");
        
    function runTimer() {
        var hour = parseFloat(timeHour.text());
        var minute = parseFloat(timeMin.text());
        var second = parseFloat(timeSec.text());
        
        second++
            
				if(second > 59) {
					second = 0;
					minute = minute + 1;
				}
        
        if(minute > 59) {
            minute = 0;
            hour = hour + 1;
        }
        if(hour > 00) {
            timeHour.css("display", "inline-block");
            timeHourLabel.css("display", "inline-block");
        }
        if(minute > 00) {
            timeMin.css("display", "inline-block");
            timeMinLabel.css("display", "inline-block");
        }
        if(second > 00) {
            timeSec.css("display", "inline-block");
            timeSecLabel.css("display", "inline-block");
        }
        timeHour.html("0".substring(hour >= 10) + hour);
        timeMin.html("0".substring(minute >= 10) + minute);
        timeSec.html("0".substring(second >= 10) + second);
    }
        timer = setInterval(runTimer, 1000);
    }
    function mileage() {
        var mileage = 0;
        var mileageContainer = $(".mileage");
        mileageContainer.html('').append(mileage);
        
        function mileageCounter() {
            mileage = parseFloat(mileage);
            mileage = mileage + 10.61;
            mileageContainer.html(mileage.toFixed(2));
        }
        
        setInterval(mileageCounter, 1000);
    }
});
