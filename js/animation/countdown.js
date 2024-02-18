function init_life_time() {
    function getAsideLifeTime() {
        let nowDate = +new Date();
        let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
        let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
        let todayPassHoursPercent = (todayPassHours / 24) * 100;
        $('#dayProgress .card-text span').html(parseInt(todayPassHours));
        $('#dayProgress .progress .progress-bar').css('width', parseInt(todayPassHoursPercent) + '%');
        $('#dayProgress .progress .progress-percentage').html(parseInt(todayPassHoursPercent) + '%');
        let weeks = {
            0: 7,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
        };
        let weekDay = weeks[new Date().getDay()];
        let weekDayPassPercent = (weekDay / 7) * 100;
        $('#weekProgress .card-text span').html(weekDay);
        $('#weekProgress .progress .progress-bar').css('width', parseInt(weekDayPassPercent) + '%');
        $('#weekProgress .progress .progress-percentage').html(parseInt(weekDayPassPercent) + '%');
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let monthAll = new Date(year, month, 0).getDate();
        let monthPassPercent = (date / monthAll) * 100;
        $('#monthProgress .card-text span').html(date);
        $('#monthProgress .progress .progress-bar').css('width', parseInt(monthPassPercent) + '%');
        $('#monthProgress .progress .progress-percentage').html(parseInt(monthPassPercent) + '%');
        let yearPass = (month / 12) * 100;
        $('#yearProgress .card-text span').html(month);
        $('#yearProgress .progress .progress-bar').css('width', parseInt(yearPass) + '%');
        $('#yearProgress .progress .progress-percentage').html(parseInt(yearPass) + '%');
    }
    getAsideLifeTime();
    setInterval(() => {
        getAsideLifeTime();
    }, 1000);
}
init_life_time()