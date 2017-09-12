$(document).ready(function(){

    $("#main").mouseover(function(){
        $(this).animate({
                left: genPosX()+'px',
                top: genPosY()+'px'
            },
            500
        )});

    $("#main").click(function () {
        $(this).stop(true);
        $(this).fadeOut();
    });

    function genPosX() {
        return Math.floor(Math.random() * window.innerWidth);
    }
    function genPosY() {
        return Math.floor(Math.random() * window.innerHeight);
    }

});