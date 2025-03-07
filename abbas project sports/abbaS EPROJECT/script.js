// humberg start
$(document).ready(function() {
    $('#hamburger').click(function() {
        $('.nav-links').toggleClass('active');
    });
    $('.dropdown').hover(function() {
        $(this).children('.dropdown-menu').stop(true, true).slideDown(200);
    }, function() {
        $(this).children('.dropdown-menu').stop(true, true).slideUp(200);
    });
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.nav-links').removeClass('active'); 
        }
// humberg end
// login form start
    });
    $(document).ready(function(){
        $("#toggle").click(function (){
           $("#takeoff").show(2000); 
        });
    });
    $(document).ready(function(){
        $("#show").click(function (){
           $("#takeoff").show(2000); 
        });
    });
    $(document).ready(function(){
        $("#fade").click(function (){
           $("#takeoff").show(2000); 
        });
    });
});
// login form end


/*
Time date start



*/ 
function updateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true
    };
    const formattedDate = now.toLocaleString('en-US', options);
    dateTimeElement.textContent = formattedDate;
}


setInterval(updateTime, 1000);


updateTime();


/*time date end*/